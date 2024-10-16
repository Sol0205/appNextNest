# Getting Started

This project aims to build a web application using Next.js for the frontend and Nest.js for the backend. Follow the steps below to set up the project on your local machine.

## Requirements

- **Node.js**: v22.7.0
- **npm**: v10.8.2

## Project Dependencies

### Main Dependencies

- `next`: Framework for server-rendered React applications.
- `react`: JavaScript library for building user interfaces.
- `react-dom`: React package for working with the DOM.
- `react-hook-form`: Library for handling form validation.

### Development Dependencies

- `eslint`: Linter for maintaining code quality.
- `typescript`: TypeScript support for type checking.
- `tailwindcss`: Utility-first CSS framework for styling.



## Installation

### Step 1: Clone the repository

First, clone the project repository:

```bash
git clone https://github.com/Sol0205/appNextNest.git
```

### Step 2: Navigate to the Project Directory

Move to the root directory of the project:

```bash
cd "appNextNest"
```

## Backend Setup

### Step 1: Create the `.env` file

In the root directory of the backend, create a `.env` file with the following content:

```.env
DATABASE_URL="postgres://user:123@localhost:5499/nestdb?schema=public"
```

### Step 2: Navigate to the Backend Directory

Move to the backend directory:

```bash
cd backend
```

### Step 3: Install the Backend Dependencies

```bash
npm install
```

### Step 4: Start the Database Using Docker

```bash
docker-compose up -d
```

### Step 5: Run Prisma Migrations to Set Up the Database Schema

```bash
npx prisma migrate dev --name init
```

### Step 6: Start the Backend Server in Development Mode

```bash
npm run start:dev
```

## Frontend Setup

### Step 1: Navigate to the Frontend Directory

Move to the frontend directory:

```bash
cd frontend
```

### Step 2: Install the Frontend Dependencies

```bash
npm install
```

### Step 3: Start the Frontend Application

Run the frontend in development mode:

```bash
npm run dev
```