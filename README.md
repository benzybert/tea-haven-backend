# Tea Haven E-commerce Backend

This repository contains the backend code for the Tea Haven E-commerce application.

## Table of Contents
- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The backend of the Tea Haven E-commerce application is built to handle all server-side logic, database interactions, and API endpoints for the frontend application.

## Technologies
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- dotenv for environment variables

## Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/tea-haven-ecommerce.git
    ```
2. Navigate to the backend directory:
    ```bash
    cd tea-haven-ecommerce/backend
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Create a `.env` file in the root of the backend directory and add the following environment variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

## Usage
1. Start the server:
    ```bash
    npm start
    ```
2. The server will run on `http://localhost:5001`.

## API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a single product by ID
- `POST /api/orders` - Create a new order
- `GET /api/orders/:id` - Get order details by ID

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License.