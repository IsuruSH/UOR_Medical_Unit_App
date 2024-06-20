# UOR Medical Unit App

This project is a MERN stack application with Next.js for managing user roles and authentication for doctors, students, and admins.

## Table of Contents

- [UOR Medical Unit App](#uor-medical-unit-app)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the Application](#running-the-application)
  - [Project Structure](#project-structure)
  - [Technologies Used](#technologies-used)
  - [License](#license)

## Getting Started

Follow these instructions to set up and run the project on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Install root dependencies:**

    ```bash
    npm install
    ```

3. **Backend setup:**

    ```bash
    cd backend
    npm install
    cd ..
    ```

4. **Frontend setup:**

    ```bash
    cd frontend
    npm install
    cd ..
    ```

5. **Create a `.env` file in the root directory:**

    ```bash
    touch .env
    ```

    Add the following environment variables to the `.env` file:

    ```
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

### Running the Application

1. **Start MongoDB:**

    Make sure your MongoDB server is running. If you're using a local instance, you can start it using the following command:

    ```bash
    mongod
    ```

    If you're using a cloud instance (e.g., MongoDB Atlas), ensure your connection string is correctly set in the `.env` file.

2. **Run the application:**

    From the root directory of the project, run:

    ```bash
    npm run dev
    ```

    This command will start both the backend and frontend servers concurrently.

3. **Access the application:**

    Open your web browser and go to [http://localhost:3000](http://localhost:3000) to access the application.

## Project Structure

UOR_Medical_Unit_App/
├── backend/
│ ├── config/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ ├── .gitignore
│ ├── app.js
│ ├── package.json
│ └── server.js
├── frontend/
│ ├── components/
│ │ ├── common/
│ │ ├── auth/
│ │ ├── doctor/
│ │ ├── student/
│ │ ├── admin/
│ │ └── layout/
│ ├── pages/
│ │ ├── doctor/
│ │ ├── student/
│ │ ├── admin/
│ ├── public/
│ │ ├── images/
│ │ ├── styles/
│ ├── styles/
│ │ ├── utils/
│ ├── .gitignore
│ ├── package.json
│ └── README.md
├── .env
├── .gitignore
├── package.json
└── README.md


## Technologies Used

- **Backend:**
  - Node.js
  - Express
  - Mongoose
  - Passport
  - JWT
  - Bcrypt
  - Dotenv

- **Frontend:**
  - Next.js
  - React
  - Axios
  - Next-Auth

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
