Restaurant Reservation System
A full-stack restaurant reservation management application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This modern web application provides an intuitive interface for customers to browse the restaurant's menu, learn about the establishment, and make reservations seamlessly.
🌟 Features
Frontend

Responsive Design: Fully responsive layout optimized for desktop, tablet, and mobile devices
Interactive Navigation: Smooth scrolling navigation with hamburger menu for mobile devices
Hero Section: Eye-catching landing page with animated elements and restaurant branding
About Section: Comprehensive information about the restaurant's story and values
Menu Showcase: Dynamic display of popular dishes with categorization (Breakfast, Lunch, Dinner)
Team Section: Meet the culinary team behind the restaurant
Reservation System: User-friendly reservation form with real-time validation
Success Page: Confirmation page with automatic redirection after successful reservation
Toast Notifications: Real-time feedback for user actions using react-hot-toast
404 Page: Custom not-found page for better user experience

Backend

RESTful API: Well-structured API endpoints for reservation management
Database Integration: MongoDB integration with Mongoose ODM
Data Validation: Server-side validation for all reservation fields
Error Handling: Comprehensive error handling middleware
CORS Configuration: Secure cross-origin resource sharing setup
Environment Variables: Secure configuration management using dotenv

🛠️ Tech Stack
Frontend

React 18.3.1: Modern React with hooks for state management
React Router DOM: Client-side routing
Axios: HTTP client for API requests
React Hot Toast: Elegant toast notifications
React Scroll: Smooth scrolling navigation
React Icons: Icon library for UI elements
Vite: Fast build tool and development server

Backend

Node.js: JavaScript runtime environment
Express.js: Web application framework
MongoDB: NoSQL database
Mongoose: MongoDB object modeling
Validator: Email and data validation
CORS: Cross-Origin Resource Sharing middleware
Dotenv: Environment variable management

📋 Prerequisites
Before running this project, make sure you have the following installed:

Node.js (v18 or higher)
MongoDB (local installation or MongoDB Atlas account)
npm or yarn package manager

🚀 Installation & Setup
1. Clone the repository
bashgit clone <repository-url>
cd <project-directory>
2. Backend Setup
bashcd backend
npm install
Create a config/config.env file in the backend directory:
envPORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
Start the backend server:
bashnpm start
3. Frontend Setup
bashcd frontend
npm install
Start the development server:
bashnpm run dev
```

The application will be available at `http://localhost:5173`

## 📁 Project Structure
```
restaurant-reservation/
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controller/
│   │   └── reservation.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── error/
│   │   └── error.js
│   ├── models/
│   │   └── reservationSchema.js
│   ├── routes/
│   │   └── reservationRoute.js
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── About.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Menu.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Qualities.jsx
│   │   │   ├── Reservation.jsx
│   │   │   ├── Team.jsx
│   │   │   └── WhoAreWe.jsx
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── NotFound/
│   │   │   └── Success/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── restApi.json
│   └── package.json
```

## 🔑 Key Features Explained

### Reservation System
- Client-side form validation
- Server-side data validation using Mongoose schemas
- Phone number validation (11 digits, numeric only)
- Email validation using the validator library
- Name length restrictions (3-30 characters)
- Real-time error feedback to users

### Database Schema
The reservation model includes:
- First Name (required, 3-30 characters)
- Last Name (required, 3-30 characters)
- Email (required, validated format)
- Phone (required, exactly 11 digits)
- Date (required)
- Time (required)

## 🎨 Styling

The application features a modern, clean design with:
- Custom CSS styling with responsive breakpoints
- Google Fonts (Oswald) for typography
- Smooth transitions and hover effects
- SVG graphics for visual enhancement
- Mobile-first responsive design approach

## 🔒 Environment Variables

### Backend (.env)
```
PORT=4000
FRONTEND_URL=http://localhost:5173
MONGO_URI=your_mongodb_connection_string
📝 API Endpoints
POST /api/v1/reservation/send
Creates a new reservation

Body: { firstName, lastName, email, phone, date, time }
Success Response: { success: true, message: "Reservation sent successfully" }
Error Response: { success: false, message: "Error message" }

🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page.
👨‍💻 Author
Sathwik

Location: Udupi, Karnataka
GitHub: [@yourusername]

📄 License
This project is open source and available under the ISC License.
🙏 Acknowledgments

Restaurant data and menu items are for demonstration purposes
Icons provided by React Icons library
Design inspiration from modern restaurant websites
