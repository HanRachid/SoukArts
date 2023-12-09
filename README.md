# SoukArts

## Overview

Welcome to SoukArts, an ecommerce website for moroccan artisans! This repository houses the codebase for SoukArts, and this readme will guide you through the project's structure, dependencies, and modules.

## Modules

### Backend Modules

- **TypeScript:** Utilized for type checking, enabling early error detection and improving overall code quality.
- **bcrypt:** Employed for secure password hashing to safeguard user credentials.
- **Mongoose:** Used for seamless interaction with MongoDB, providing a structured and efficient data storage solution.
- **MongoDB:** A NoSQL database chosen for its scalability and flexibility, fitting the dynamic needs of SoukArts.

### Frontend Modules

- **Material-UI:** Empowers the frontend with a visually appealing and responsive user interface.
- **React Router:** Enables seamless navigation between different views within the React application.
- **React Redux:** Manages the state in a centralized manner, enhancing predictability and maintainability.
- **React Icon:** Provides a wide array of customizable SVG icons to enhance the visual elements of the application.
- **Vite:** Ensures fast and efficient development, making the development process smoother.
- **Vitest:** Ensures the reliability of the frontend codebase by facilitating the writing and execution of tests.
- **Cloudinary:** Enhances media handling, allowing efficient storage and retrieval of images and videos.
- **Formik:** Streamlines form handling and validation, providing a smooth user experience.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/HanRachid/SoukArts.git
   ```

2. **Install Dependencies::**

   ```bash
   cd Soukarts
   cd frontend
   npm i
   cd Soukarts
   cd backend
   npm i
   ```

3. **Run the Application:**
   ```bash
   cd frontend
   npm run dev
   cd backend
   npm run serve
   ```
4. **env variables::**
   you will need to setup your own mongodb database, and cloudinary account, and use your api keys as env variables.
