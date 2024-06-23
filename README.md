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


# Branch Workflow

This document explains the branching strategy used in this project for development, testing, and deployment.

## Branches

- `main`: The main production branch.
- `development`: The branch for active development.
- `testing`: The branch for testing and quality assurance.
- `deployment`: The branch for deployment to production.

## Workflow

### Development

1. **Create a new feature branch:**

    ```bash
    git checkout -b feature/your-feature-name
    ```

2. **Work on the feature, commit changes, and push the branch:**

    ```bash
    git add .
    git commit -m "Add your feature"
    git push -u origin feature/your-feature-name
    ```

3. **Create a pull request to merge the feature branch into `development`.**

### Testing

1. **Merge `development` into `testing`:**

    ```bash
    git checkout testing
    git merge development
    ```

2. **Push the `testing` branch:**

    ```bash
    git push origin testing
    ```

3. **Test the application and fix any bugs.**

### Deployment

1. **Merge `testing` into `deployment`:**

    ```bash
    git checkout deployment
    git merge testing
    ```

2. **Push the `deployment` branch:**

    ```bash
    git push origin deployment
    ```

3. **Deploy the application from the `deployment` branch.**

## Best Practices

- Always keep the `main` branch stable and deployable.
- Use feature branches for new features and bug fixes.
- Regularly merge `development` into `testing` for continuous integration.
- Ensure the `testing` branch is stable before merging into `deployment`.

## Setting Up Local Branches

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/your-repository.git
    cd your-repository
    ```

2. **Fetch all branches:**

    ```bash
    git fetch --all
    ```

3. **Checkout to `development` branch:**

    ```bash
    git checkout development
    ```

4. **Repeat for `testing` and `deployment` branches:**

    ```bash
    git checkout testing
    git checkout deployment
    ```

## Collaboration

- Communicate with your team to avoid conflicts.
- Review and test code thoroughly before merging.
- Use pull requests for code reviews and discussions.



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
