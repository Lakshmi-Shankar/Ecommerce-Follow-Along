# Ecommerce-Follow-Along

*Milestone 1: Project Overview*

This project is designed to enhance the shopping experience by providing users with an efficient and personalized e-commerce platform. It allows users to browse, purchase, and manage products seamlessly while enjoying a user-friendly interface.

*Key Features*  

- This application uses *MERN Stack*
- *REST API Creation*: It is a style used for building web services that allow communication between a client and a server using standard HTTP methods.
- *Authentication*: This is the process of verifying the identity of a user before allowing them access to specific resources. 
- *Backend Development*: In MongoDB, schema design is the process of defining the structure and relationships of the data stored in the database.

*Tech Stack*  

- *Frontend*: React framework for building the user interface.  
- *Backend*: Node.js to handle server-side operations and APIs.  
- *Database*: MongoDB for storing user and product data efficiently.  


*Milestone 2: Project Setup and Login Page*

This milestone focuses on setting up the project structure and implementing a basic login page.

*Key Features*

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Login Page: A simple login page with fields for username and password.

*Tech Stack Used*

- Frontend: React, Tailwindcss

*Milestone 3: Serevr setup and error handling.*


*Key Features:* 

Organized backend code with a clear folder structure.

Configured a Node.js server using Express to handle APIs.

Integrated MongoDB for data storage and management.

Implemented basic error handling for smooth server operations.

*Tech Stack* 

Backend: Node.js, Express  
Database: MongoDB, Mongoose


*Milestone 4: Creating User Model and Controller*

This project is a simple User Management System that allows the creation, retrieval, and management of user data. It also supports file uploads (like profile pictures) using **Multer**.

*Features*
- **User Model**: Blueprint for storing user data in the database.
- **User Controller**: Manages operations like adding, retrieving, and updating user information.
- **File Uploads**: Accepts and stores user-uploaded files (e.g., profile images).
- **Documentation**: Well-documented code for ease of 


*Milestone 5: Project Signup Setup*

This milestone focuses on setting up the project structure and implementing a basic signup page.

*Key Features*

- Project Setup: Initialized the project with the required dependencies and folder structure.
- Signup Page: A simple signup page with fields for Name Email Password User Photo.

*Tech Stack Used*

- Frontend: React

*Milestone 6: Password Encryption and User Data Storage*

Password Encryption: Used bcrypt to hash passwords.

User Data Storage: Saved user data securely in the database.

GitHub Updates: Committed changes for password encryption.

Tech stack used:
- nodejs


*Milestone 7:*
  In this milestone we are going to create a backend endpoint for user and  the focus is on validating user credentials and verifying the encrypted password stored in the database.



Key features:
   1)validate user credentials during login:
Protect User Data: Keeps passwords safe even if the database is compromised.
Privacy: Ensures passwords aren't stored in plain text.
Compliance: Meets security standards like GDPR and PCI-DSS.
Prevents Password Theft: Hashed passwords are difficult to decipher, increasing security.

   2) compare the encrypted password with the user’s input:
User Enters Credentials:

The user provides their email/username and password on the login page.

Fetch User Data from Database:

The backend retrieves the user record based on the provided email/username.
If the user is not found, return an error: "User does not exist."

Compare Encrypted Passwords:

Process the user's input password using the same hashing algorithm (e.g., bcrypt).
Compare the resulting hash to the stored hashed password.
If they match, the user is authenticated; if not, send an error.

Tech stalk:
 Backend : bcryptjs.


*Milestone 8:*
In this milestone,  we will create a frontend card component for products and design a homepage to display these cards for each product.

Key features:
  1) create a card component:
Showcase Products Effectively: Presents product details in a clear and visually appealing way.
Reusable Design: Can be used across multiple pages or sections of the app.
Improved User Experience: Makes it easy for users to browse and interact with products.
Organized Layout: Keeps the homepage clean and structured.
  2) display those cards on the products page:
Create a Dynamic Component: Design a single card component that accepts product details as props.
Use Mapping: Use array mapping to iterate over the product list and render a card for each product.
Pass Data Dynamically: Pass unique product information (e.g., name, price, image) to each card.
Maintain Consistency: Ensure the layout remains uniform for all products.



Tech stack :
Frontend: react


## MileStone-9 : CreateProduct Component


# Overview

CreateProduct is a React component that allows users to create a product by filling out a form with details such as name, description, category, price, stock, and images. It provides real-time image previews and validates required fields before submission.

# Features

User-friendly form for creating a product
Supports image uploads with previews  
Dynamically updates form state using React useState
Cleans up object URLs to prevent memory leaks
Uses Tailwind CSS for styling
Displays an alert upon successful submission

## Milestone 10: Updated models/product.js controller/product.js Createproductjs

# Controller/Product.js:

This Express.js route handles the creation of a new product. It validates the product data, checks if the user exists in the database, and ensures that at least one image is uploaded. If validation passes, the product is saved to the database and a success message is returned.

# model/Product.js

This code defines a Mongoose schema for a "Product" model in MongoDB. It specifies fields such as name, description, category, tags, price, stock, email, and images, with validation rules to ensure that required data is provided. Additionally, it includes automatic timestamping for creation and modification times. The schema is then used to create and export the Product model.

# src/Creatproduct.js

The CreateProduct component is a form for creating a new product. Here's a quick breakdown of its key features:

State Management: Uses useState to manage the form data for name, description, category, tags, price, stock, and email, along with image handling (images and previewImages).
File Handling: Allows users to upload multiple images, which are previewed before submission. The images are added to the form data using FormData.
Form Submission: When the form is submitted, the data is sent to the backend using axios. If the request is successful, a success message is displayed, and the form is reset. If there's an error, an alert is shown.
Category Options: Provides a set of predefined categories for the product (Electronics, Fashion, Books, and Home Appliances).
