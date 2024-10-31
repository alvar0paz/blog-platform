# Blog Platform Frontend

A React-based blog platform that enables users to create, read, update, and delete blog posts, as well as manage comments and user authentication.

## Features

- User authentication (register/login) via Supabase
- Create, read, update, and delete blog posts
- Comment management system
- Protected routes based on authentication status
- Responsive design

## Technologies

- React with TypeScript
- React Router for navigation
- Supabase for authentication and backend
- TanStack Query for data management
- Styled Components for styling

## Project Structure

```bash
frontend/
│
├── src/
│   ├── api/                # API logic and Supabase client
│   ├── components/         # Reusable components
│   ├── context/            # Authentication and global state
│   ├── hooks/              # Custom hooks
│   ├── pages/              # Main application pages
│   ├── validation/         # Front end validation
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Application entry point
│
└── package.json            # Dependencies and scripts
```

## Prerequisites

- Node.js
- Yarn package manager
- Supabase project with authentication configured

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the frontend directory:
```bash
cd my-blog-platform/frontend
```

3. Install dependencies:
```bash
yarn install
```

4. Start the development server:
```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Main Components

### Pages
- **Home**: Displays blog post list
- **PostDetails**: Single post view with comments
- **CreatePost**: New post creation form
- **Login**: User login page
- **Signup**: User registration page

### Components
- **AuthForm**: Shared authentication form
- **AuthInput**: Styled input fields
- **MainButton**: Primary button component
- **ProtectedRoute**: Route protection wrapper

## Data Management

TanStack Query hooks for data operations:
- `usePosts`: Fetch post list
- `usePost`: Fetch single post
- `useCreatePost`, `useUpdatePost`, `useDeletePost`: Post mutations
- `useComments`: Fetch comments
- `useCreateComment`, `useUpdateComment`, `useDeleteComment`: Comment mutations

## Authentication

Supabase Auth handles user management with the following flows:
- Sign Up: Account creation with email/password
- Login: User authentication
- Protected Routes: Route access control based on auth status

## Error Handling

- Authentication errors displayed in auth components
- Data fetching errors handled via TanStack Query
- User-friendly error messages throughout the application

## Future Enhancements

- User roles implementation
- Enhanced styling
- Real-time comment updates
- Additional authentication methods
