class ErrorHandler extends Error {  // Use 'Error' (capitalized) here instead of 'error'
    constructor(message, statusCode) {
        super(message);  // Call the parent constructor with the message
        this.statusCode = statusCode;  // Assign a status code to the error instance

        // Capture the stack trace, which helps with debugging
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal server error!";
    err.statusCode = err.statusCode || 500;

    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

export default ErrorHandler;
