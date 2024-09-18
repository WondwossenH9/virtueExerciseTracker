# virtueExerciseTracker

## Project Description
The Virtue Exercise Tracker App is a portfolio project for the ALX-SE program. The app is designed to offer a comfortable experience for users who want to monitor their workouts and stay engaged with their progress. Built using the MERN stack (MongoDB, Express.js, React, and Node.js), the app leverages modern web technologies to deliver a robust and dynamic platform.

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Guidelines](#usage-guidelines)
- [Project Architecture](#project-architecture)
- [Technologies Used](#technologies-used)
- [Environment Variables](#environment-variables)
- [Testing Instructions](#testing-instructions)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Installation Instructions
To set up the Virtue Exercise Tracker locally, follow these steps:

1. Clone the Repository
   ```bash
   git clone https://github.com/WondwossenH9/virtue-exercise-tracker.git
   cd virtueExerciseTracker
2. Install Dependecies
        cd backend
        npm install
        cd ../frontend
        npm install
3. Environment Variables
    Make sure to create a `.env` file in the `backend` directory with the following variables:
    You should replace the placeholders with your actual values.
        PORT=your_port_number
        MONGO_URI=your_mongo_db_uri
        JWT_SECRET=your_jwt_secret
4. Run the application
    Start the backend server: cd backend then npm run dev
    Start the frontend: cd ../frontend then npm start

## Usage Guidelines
Once the application is running, navigate to http://localhost:your_frontend_port in your web browser. You can:

Create an account and log in.
Register and Track your workouts.
Set and monitor fitness goals.
View progress through charts and statistics.

## Project Architecture

Backend Architecture

    backend/
    │
    ├── controllers/       # Request handlers for different routes
    ├── middleware/        # Custom middleware for authentication, logging, etc.
    ├── models/            # Mongoose models defining the structure of your data
    ├── node_modules/      # Installed npm packages
    ├── routes/            # Express route definitions
    ├── .env               # Environment variables for the application
    ├── package-lock.json  # Automatically generated file for npm package versions
    ├── package.json       # Project metadata and dependencies
    └── server.js          # Entry point for the backend server

Frontend Architecture

    frontend/
    │
    ├── node_modules/      # Installed npm packages
    ├── public/            # Static files (e.g., index.html, favicon)
    │
    └── src/               # Source code for the React application
        ├── components/     # Reusable React components
        ├── context/        # Context API for state management
        ├── hooks/          # Custom React hooks
        ├── pages/          # Page components for routing
        ├── App.js          # Main application component
        ├── index.css       # Global styles for the application
        └── index.js        # Entry point for the React app
    ├── .gitignore          # Files and directories to ignore in Git
    ├── package-lock.json   # Automatically generated file for npm package versions
    ├── package.json        # Project metadata and dependencies
    └── README.md           # Documentation for the project

## Technologies Used

    MongoDB: Database for storing user data and workout records.
    Express.js: Web framework for building the backend API.
    React: Frontend library for building the user interface.
    Node.js: JavaScript runtime for the server-side code.
    Mongoose: ODM for MongoDB.
    jsonwebtoken: For authentication.

## Environment Variables
    
    Make sure to set up the following environment variables in your .env file in the backend directory:

        PORT
        MONGO_URI
        JWT_SECRET

## Testing Instructions
You can create tests using a testing framework like Jest for your backend and React Testing Library for your frontend.
Here's a basic example:
    Install Jest(for backend): npm install --save-dev jest
    Create a test script in package.json:
        "scripts": {
            "test": "jest"
        }
    Run tests: npm test

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
Thanks to the ALX-SE program for the opportunity to create this project.
Inspiration from various online resources and documentation for the MERN stack.
