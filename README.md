# Craaaackle ChatApp

Craaaackle ChatApp is a real-time chat application built using the MERN stack (MongoDB, Express.js, React, Node.js) and WebSockets for seamless communication.

## Features

- **Real-time Messaging:** Instant messaging between users using WebSockets.
- **User Authentication:** Secure login and registration system.
- **Message History:** Access to previous chat messages.
- **Responsive Design:** Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend:** React with Vite for fast development.
- **Backend:** Node.js with Express.js.
- **Database:** MongoDB for storing user and message data.
- **WebSockets:** Socket.io For real-time bidirectional communication.

## Installation

1. **Clone the repository:**

        git clone https://github.com/sidxdhiman/craaaackle-chatapp.git

2. **Navigate to the project directory:**
    
        cd craaaackle-chatapp

3. **Install dependencies for both client and server:**

    # Navigate to the server directory
        cd backend
    
    # Install server dependencies
        npm install

    # Navigate to the client directory
        cd frontend

    # Install client dependencies
        npm install

4. **Set up environment variables:**

    Create a .env file in the root directory and add the following:
    
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        
5. **Start the development servers:**

    # Start the backend server
        npm run dev

    # In a new terminal, navigate to the client directory and start the frontend
        cd frontend
        npm run dev


Created By **Sidharth Dhiman**        
