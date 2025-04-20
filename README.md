🧑‍💼 Naukri-Clone
A simplified clone of the Naukri job portal, built with React, Redux Toolkit, Tailwind CSS, and Firebase Authentication. Users can sign up, log in, and explore job listings. Backend integration is in progress.

🔗 Live Preview: Coming Soon
📁 GitHub Repo: mamta-vyas/Naukri-Clone

🧰 Tech Stack
Frontend: React, Tailwind CSS

State Management: Redux Toolkit

Routing: React Router

Authentication: Firebase (Email/Password)

Backend: Node.js, Express, JWT, MongoDB

Build Tool: Vite

📂 Folder Structure

.
├── README.md
├── build
│   ├── 404.html
│   └── index.html
├── client
│   ├── dist
│   │   ├── assets
│   │   │   ├── index-CivjFw9K.css
│   │   │   └── index-Cn865pZY.js
│   │   ├── index.html
│   │   └── vite.svg
│   ├── eslint.config.js
│   ├── firebase.json
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── app
│   │   │   └── store.js
│   │   ├── assets
│   │   │   └── react.svg
│   │   ├── components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobList.jsx
│   │   │   ├── Pagination.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── features
│   │   │   └── auth
│   │   │       └── authSlice.jsx
│   │   ├── firebase.js
│   │   ├── index.css
│   │   ├── main.jsx
│   │   └── pages
│   │       ├── About.jsx
│   │       ├── Home.jsx
│   │       ├── JobDetail.jsx
│   │       ├── Login.jsx
│   │       └── SignUp.jsx
│   └── vite.config.js
└── server
    ├── config
    │   └── db.js
    ├── controllers
    │   └── jobController.js
    ├── index.js
    ├── middleware
    │   ├── auth.js
    │   └── errorHandler.js
    ├── models
    │   ├── User.js
    │   └── jobModel.js
    ├── nodemon.json
    ├── package-lock.json
    ├── package.json
    └── routes
        ├── auth.js
        └── jobRoutes.js

19 directories, 45 files

Backend (Node.js with Express):

JWT-based authentication for secure login and registration.

MongoDB integration for storing user data.

Protected routes to retrieve logged-in user data.


📂 Features

Job listing cards (Frontend)

Redux Toolkit for state management

Tailwind CSS for responsive styling

Backend: JWT authentication, MongoDB integration, user login/signup routes

Protected routes for user data

🛠 Getting Started
1. Clone the Repo
git clone https://github.com/mamta-vyas/Naukri-Clone
cd Naukri-Clone

2. Install Dependencies
npm install

3. Setup Backend (Server)
Navigate to the server folder and install server dependencies:
cd server
npm install

Create a .env file in the server folder and add your environment variables:
JWT_SECRET=your_jwt_secret
MONGODB_URI=your_mongodb_connection_string

Start the backend server:
npm start

4. Setup Frontend (React)
Navigate to the client folder and install frontend dependencies:
cd client
npm install

Start the React app locally:
npm start

5. Build and Deploy
Frontend is deployed on Netlify:

Backend is deployed on Render:
Render URL

🔐 API Endpoints
POST /api/auth/register: User registration (requires name, email, password).

POST /api/auth/login: User login (requires email, password).

GET /api/auth/me: Get logged-in user data (requires JWT token in the Authorization header).

🛠 Scripts
Frontend (client):

npm run dev - Start the local development server.

npm run build - Build for production.

npm run preview - Preview the production build.

Backend (server):

npm start - Start the backend server.

🤝 Contributing
Contributions are welcome! If you'd like to fix a bug or add a feature, feel free to fork the repo and open a pull request.

🙋‍♀️ Author
Made by Mamta Vyas
