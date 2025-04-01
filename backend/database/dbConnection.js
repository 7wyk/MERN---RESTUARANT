import mongoose from "mongoose";

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            dbName: "RESTAURANT",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to database successfully!");
    } catch (err) {
        console.error(`❌ Error connecting to database: ${err.message}`);
        process.exit(1); // Exit process if connection fails
    }
};
