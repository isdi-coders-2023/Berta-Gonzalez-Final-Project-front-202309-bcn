![LOGO](https://berta-gonzalez-202309-bcn-front.netlify.app/images/logo.webp)

**Single Page Application (SPA) CRUD Overview**

### Description

"Nerdmas Balls" is a Single Page Application (SPA) that implements CRUD (Create, Read, Update, Delete) functionality using the MERN stack. The application is designed to manage a collection of "Nerdmas Balls" with a user-friendly and seamless user interface.

### Technology Stack

#### 1. MongoDB

- **Database:** MongoDB serves as the NoSQL database to store and manage data related to Nerdmas Balls. It offers flexibility in handling diverse data structures.

#### 2. Express.js

- **Backend Server:** Express.js, a Node.js framework, is utilized to create a robust and scalable backend server. It handles HTTP requests and interacts with the MongoDB database to perform CRUD operations.

#### 3. React

- **Frontend Framework:** React is the core frontend library for building interactive user interfaces. It enables the dynamic rendering of components for a smooth user experience.

#### 4. Node.js

- **Runtime Environment:** Node.js facilitates server-side JavaScript execution, ensuring seamless communication between the frontend and backend components.

### CRUD Operations

#### 1. Create (Add Nerdmas Ball)

- Users can add new Nerdmas Balls to the collection.
- Input forms capture relevant details of each Nerdmas Ball, such as name, color, size, etc.
- Upon submission, the data is sent to the backend, and the new Nerdmas Ball is added to the MongoDB database.

#### 2. Read (List and View Nerdmas Balls)

- The application displays a list of all Nerdmas Balls, providing users with an overview.
- Users can click on individual Nerdmas Balls to view detailed information on a dedicated page.
- Data is retrieved from the MongoDB database and dynamically rendered using React components.

#### 3. Update (Modify Nerdmas Ball)

- Users have the ability to modify the details of existing Nerdmas Balls.
- An edit feature allows users to update information such as color, size, or any other attributes.
- Modified data is sent to the backend, updating the corresponding entry in the MongoDB database.

#### 4. Delete (Remove Nerdmas Ball)

- Users can delete Nerdmas Balls they no longer need.
- A delete option removes the selected Nerdmas Ball from both the frontend display and the MongoDB database.

### User Interface

- The SPA design ensures a seamless and responsive user interface, eliminating the need for page reloads during navigation.
- React components provide a modular structure, enhancing code maintainability and reusability.
- Styling may be implemented using libraries such as Styled-components for a visually appealing and consistent UI.

### Testing and Quality Assurance

- Jest and Vitest can be employed for testing both frontend and backend components, ensuring the reliability of the application.
- Continuous integration tools and Husky scripts can be set up to enforce code quality standards.

### Conclusion

"Nerdmas Balls" is a feature-rich SPA that combines the power of the MERN stack with React to deliver a smooth, interactive, and efficient user experience for managing a collection of Nerdmas Balls through CRUD operations.

### Nerdmas Overview

The "nerdmas" project utilizes the MERN stack for developing a web application. Here's a brief summary of the key components and toolkits used in the provided `package.json` file:

#### Key Scripts:

- **dev:** Runs Vite for development.
- **build:** Runs TypeScript compiler and Vite for building the project.
- **lint:** Uses ESLint for linting TypeScript and TypeScript React files.
- **preview:** Launches Vite for previewing the project.
- **test:** Executes Vitest for running tests.
- **test:dev:** Runs Vitest in watch mode for continuous testing during development.
- **test:coverage:** Generates test coverage reports using Vitest.
- **prepare:** Installs Husky for Git hooks.

#### Key Dependencies:

- **React Libraries:** `react`, `react-dom`, `react-redux`, and `react-router-dom` for building React-based components and managing state.
- **Redux Toolkit:** A set of utilities for efficient Redux development.
- **Axios:** A promise-based HTTP client for making network requests.
- **React Toastify:** A notification library for React applications.

#### Key DevDependencies:

- **TypeScript (tsc):** A superset of JavaScript that adds static typing.
- **Vite:** A fast and efficient frontend build tool.
- **Vitest:** A test runner for Vite projects.
- **ESLint:** A tool for identifying and fixing code style issues.
- **Husky:** Enables Git hooks for running scripts before commits.
- **Styled-components:** A library for styling React components.
- **MSW (Mock Service Worker):** Enables mocking of HTTP requests for testing.
- **JSDOM:** A JavaScript implementation of the DOM for testing environments.

### Conclusion

The "nerdmas" project leverages the MERN stack with a focus on React for the frontend, Vite for efficient development, and a suite of testing tools for maintaining code quality. The inclusion of Redux Toolkit, Axios, and other libraries ensures a robust and scalable architecture for building modern web applications.

### Demo

You can try out a live demo of Nerdmas Balls by visiting the following link:

[NERDMAS BALLS](https://berta-gonzalez-202309-bcn-front.netlify.app/)
