# Blog Platform

A full-stack blog platform built with React and Express, using Supabase for authentication and data storage.

## Table of Contents

- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Project Structure

```plaintext
my-blog-platform/
│
├── frontend/               # Frontend application (React)
│   ├── src/               # React source files
│   ├── public/            # Public assets
│   └── README.md          # Frontend-specific README
│
├── backend/               # Backend application (Express)
│   ├── src/              # Express source files
│   └── README.md         # Backend-specific README
│
└── README.md             # Root README
```

## Setup Instructions

### Prerequisites

- Node.js and Yarn
- Supabase project with authentication and database setup

### Environment Variables

#### Frontend (.env)
```plaintext
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

#### Backend (.env)
```plaintext
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_KEY=your-supabase-service-role-key
PORT=3001
```

### Frontend Setup

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
yarn install

# Start development server
yarn dev
```
Frontend will be available at `http://localhost:3000`

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
yarn install

# Start development server
yarn dev
```
Backend will be available at `http://localhost:3001`

## Running the Application

1. Start the backend server first
2. Start the frontend development server
3. Access the application at `http://localhost:3000`

## Usage

- **Sign Up**: Create a new account
- **Log In**: Access your account
- **Create Post**: Add new blog posts
- **Manage Content**: Edit/delete posts and comments

## API Endpoints

### Authentication
- `POST /auth/signup`: User signup
- `POST /auth/login`: User login

### Posts
- `GET /api/posts`: Get all posts
- `POST /api/posts`: Create post
- `GET /api/posts/:id`: Get single post
- `PUT /api/posts/:id`: Update post
- `DELETE /api/posts/:id`: Delete post

### Comments
- `GET /api/posts/:id/comments`: Get post comments
- `POST /api/posts/:id/comments`: Add comment
- `PUT /api/posts/:id/comments/:commentId`: Update comment
- `DELETE /api/posts/:id/comments/:commentId`: Delete comment

## Technologies Used

### Frontend
- React
- TypeScript
- TanStack Query
- Zod
- Supabase

### Backend
- Node.js
- Express
- Supabase

### Database
- PostgreSQL (via Supabase)

## Additional Resources

For more detailed information:
- See `frontend/README.md` for frontend-specific details
- See `backend/README.md` for backend-specific details
