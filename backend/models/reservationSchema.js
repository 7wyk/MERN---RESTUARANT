import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {  // ✅ Changed from "firstname" to "firstName"
        type: String,
        required: [true, "First name is required"],
        minLength: [3, "First name must be at least 3 characters"],
        maxLength: [30, "First name must not exceed 30 characters"],
    },
    lastName: {  // ✅ Changed from "lastname" to "lastName"
        type: String,
        required: [true, "Last name is required"],
        minLength: [3, "Last name must be at least 3 characters"],
        maxLength: [30, "Last name must not exceed 30 characters"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: validator.isEmail,
            message: "Please provide a valid email address",
        },
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"],
        minLength: [11, "Phone number must be at least 11 digits"],
        maxLength: [11, "Phone number must not exceed 11 digits"],
        match: [/^\d+$/, "Phone number must be numeric"],
    },
    time: {
        type: String,
        required: [true, "Time is required"],
    },
    date: {
        type: Date,
        required: [true, "Date is required"],
    },
});

// ✅ Ensure consistency in field names throughout the app
export const Reservation = mongoose.model("Reservation", reservationSchema);
