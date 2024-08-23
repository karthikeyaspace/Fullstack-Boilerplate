# Fullstack boilerplate - typescript
A highly scalable and maintainable TypeScript React boilerplate designed for rapid development of modern web applications. This project aims to provide a robust and clean code structure that can easily adapt to various use cases in frontend and backend development.

> **Caution**: This project is made to give a basic understanding of structuring code files and writing clean code. Do not directly clone the repo and build. Always build from scratch.


This project contains code examples such as Config files, **auth context, theme context**, some **custom hooks** different pages, **supabase** authentication in frontend, protected routes, etc in client folder

In server folder, boilerplate for Ai Interation (**Gemini and Chatgpt**), custom api calls (**Google search, YT data, NYT books, Cheerio scrapper**), cors and env configuration, database initialization and crud operations (**firebase, supabase, mysql, mongodb, aws s3**), auth and logger middlewares, different routes (ai, api, auth, user, admin etc.), sending email using **nodemailer**.


```plaintext
directory structure
/full stack boilerplate
│
├── /client                   # React TypeScript Client
│   ├── /public               # Public assets
│   ├── /src
│   │   ├── /assets           # Images, Fonts, Data etc.
│   │   ├── /components       # Reusable React components
│   │   ├── /config           # env and axios configuration
│   │   ├── /contexts         # Auth, Theme contexts etc.
│   │   ├── /hooks            # Custom React hooks
│   │   ├── /pages            # React pages
│   │   ├── /services         # API service, auth calls
│   │   ├── /types            # Type exports for typescript
│   │   ├── /utils            # Uuid, validator functions etc.
│   │   ├── App.tsx           # Main App component
│   │   ├── index.css         # Central css file        
│   │   ├── main.tsx          # Entry point for React
│   │   ├── vite-env.d.ts     # React environment definitions
│   ├── .env                  # Environment variables
│   ├── .gitignore            # Ignore files of git
│   ├── index.html            # Single html file of react 
│   ├── package.json          # React client dependencies and 
│   ├── tailwind.config.json  # Tailwind configuration file 
│   ├── tsconfig.json         # Typescript configuration file 
│   ├── vite.config.json      # Vite configuration file 


├── /server                   # Root server directory
│   ├── /dist                 # Build files
│   ├── /src
│   │   ├── /ai               # Ai initializaton and integration
│   │   ├── /api              # Interation with public api's
│   │   ├── /config           # Cors and env configuration.
│   │   ├── /controllers      # Route controllers
│   │   ├── /db           # db initialization
│   │   ├── /middlewares      # Verify token, logger middleware etc
│   │   ├── /routes           # Express routes
│   │   ├── /services         # Business logic and services
│   │   ├── /types            # TypeScript types and interfaces
│   │   ├── /utils            # Utility functions
│   │   ├── index.ts            # Express app configuration
│   │   ├── server.ts         # Server entry point
├── /tests                    # Unit and integration tests
├── .env                  # Environment variables for server
├── .gitignore            # Ignore files of git 
├── package.json          # Server dependencies and scripts
├── tsconfig.json         # TypeScript configuration
│
```

## General understanding
### Client 

The client side of this project is built using React with TypeScript. The goal is to create a structured and scalable codebase that is easy to maintain and extend. The main focus areas include:

**Components**: Reusable UI components that can be used throughout the application. \
**Contexts**: Centralized state management using React Context API. Examples include authentication, theme management, etc. \
**Hooks**: Custom hooks encapsulate reusable logic, making the code cleaner and more modular. \
**Services**: This layer is responsible for making API calls and handling side effects. It abstracts the network requests, allowing the components to focus on rendering logic. \
**Pages**: Each page represents a view in the application. Pages are composed of multiple components and handle the layout and data-fetching logic. \
**Config**: Configuration files, such as environment variables and Axios instances, are centralized for easier management and scalability. \
**Utils**: Utility functions that can be reused across the application for various tasks like validation, formatting, and more.


### Server

The server side of this project is built using Node.js with TypeScript and Express. The architecture is designed to be clean, modular, and scalable. Here's how the request flow works:

**Routes**: Defines the routes/endpoints of the API. Routes interact with controllers and middleware to process requests. \
**Middleware**: Middleware functions intercept requests before they reach the controllers. Examples include authentication checks, request validation, CORS, etc. \
**Controllers**: Controllers handle incoming requests by interacting with the service layer. They do not interact directly with the database. \
**Services**: This layer contains the business logic of the application. Services interact with the database and other external APIs to fetch and manipulate data. \
**Database**: The database initialization and configuration are handled in this layer. It provides connection management and query execution. \
**Config**: Centralized configuration for CORS, environment variables, and other server-related settings. \
**AI**: This directory contains the initialization and integration logic for any AI models or services you might use. \
**Utils**: Utility functions that provide common functionality across the server-side codebase, such as logging, error handling, etc. 

#### Request flow example
```
User sends request
-> Routes -> Middleware -> Controllers -> Services -> Response
``` 
**Routes**: Define the available endpoints and handle routing to the appropriate controller. \
**Middleware**: Perform tasks like authentication, input validation, and CORS management. \
**Controllers**: Act as intermediaries between the routes and services, managing the logic for handling requests. \
**Services**: Contain the core business logic and interact directly with the database.

## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push the branch to your fork.
4. Create a Pull Request to merge your changes into the main branch of the original repository.
5. Please refer to the CONTRIBUTING.md file for more details.
