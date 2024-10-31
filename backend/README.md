# Blog Platform Backend

A RESTful API built with Express.js that powers the Blog Platform application, featuring user authentication via Supabase and complete CRUD operations for posts and comments.

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Server](#running-the-server)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Error Handling](#error-handling)
- [Notes](#notes)

## Setup Instructions

### Prerequisites

- Node.js
- Yarn package manager
- Supabase project with authentication and PostgreSQL database

### Environment Variables

Create a `.env` file in the backend directory:

```plaintext
SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_KEY=your-supabase-service-role-key
PORT=3001
```

## Running the Server

```bash
# Install dependencies
yarn install

# Start development server
yarn dev
```

Server will be available at `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /auth/signup`
  - Register new user
  - Body: `{ email: string, password: string }`

- `POST /auth/login`
  - Authenticate user
  - Body: `{ email: string, password: string }`

### Posts
- `GET /api/posts`
  - Get all posts
  - Query params: `limit`, `offset`

- `POST /api/posts`
  - Create new post
  - Body: `{ title: string, content: string }`
  - Requires authentication

- `GET /api/posts/:id`
  - Get single post by ID

- `PUT /api/posts/:id`
  - Update post
  - Body: `{ title?: string, content?: string }`
  - Requires authentication

- `DELETE /api/posts/:id`
  - Delete post
  - Requires authentication

### Comments
- `GET /api/posts/:id/comments`
  - Get all comments for a post

- `POST /api/posts/:id/comments`
  - Add comment to post
  - Body: `{ content: string }`
  - Requires authentication

- `PUT /api/posts/:id/comments/:commentId`
  - Update comment
  - Body: `{ content: string }`
  - Requires authentication

- `DELETE /api/posts/:id/comments/:commentId`
  - Delete comment
  - Requires authentication

## Technologies Used

- **Node.js & Express.js**: Server framework
- **TypeScript**: Type safety
- **Supabase**: Authentication & database
- **Zod**: Request validation

## Project Structure

```plaintext
backend/
│
├── src/
│   ├── routes/          # Route handlers
│   │   ├── auth.ts
│   │   ├── posts.ts
│   │   └── comments.ts
│   │
│   ├── middlewares/     # Custom middlewares
│   │   ├── auth.ts
│   │   └── validation.ts
│   │
│   ├── utils/          # Utility functions
│   │   └── supabase.ts
│   │
│   └── app.ts         # Main application file
│
├── .env               # Environment variables
└── README.md         # This file
```

## Error Handling

Errors are returned as JSON responses:

```json
{
  "error": "Error message here"
}
```

Status codes:
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Server Error

## Notes

### Database Setup

Ensure your Supabase database has the following tables:

1. `posts`
   - `id`: uuid (primary key)
   - `title`: text
   - `content`: text
   - `user_id`: uuid (foreign key)
   - `created_at`: timestamp

2. `comments`
   - `id`: uuid (primary key)
   - `content`: text
   - `post_id`: uuid (foreign key)
   - `user_id`: uuid (foreign key)
   - `created_at`: timestamp

### Security

- Configure Supabase RLS (Row Level Security) policies
- Keep service role key secure
- Use CORS appropriately
- Validate all input data

### Development

- Use `yarn dev` for development with hot reload
- Use `yarn build` for production build
- Use `yarn start` for production server
