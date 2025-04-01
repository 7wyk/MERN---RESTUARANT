import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
    try {
        console.log("Incoming request body:", req.body);  // ✅ Debugging request payload

        // Destructure request body
        const { firstName, lastName, email, phone, date, time } = req.body;

        // Ensure all required fields are provided
        if (!firstName || !lastName || !email || !phone || !date || !time) {
            console.log("❌ Missing fields:", { firstName, lastName, email, phone, date, time });  // ✅ Log missing fields
            return res.status(400).json({
                success: false,
                message: "Please fill out the full reservation form",
            });
        }

        // Create a new reservation in the database
        const newReservation = await Reservation.create({
            firstName,
            lastName,
            email,
            phone,
            date,
            time,
        });

        console.log("✅ Reservation saved successfully:", newReservation);

        return res.status(200).json({
            success: true,
            message: "Reservation sent successfully",
        });

    } catch (error) {
        console.error("❌ Error saving reservation:", error); // Debugging

        // Handle MongoDB validation errors
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: validationErrors.join(", "),
            });
        }

        return next(error);
    }
};
