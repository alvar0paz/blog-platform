import express from 'express';
import postsRoutes from './routes/posts';
import commentsRoutes from './routes/comments';
import authRoutes from './routes/auth';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Blog Platform API');
});

// API routes
app.use('/auth', authRoutes); // Add the authentication routes
app.use('/api/posts', postsRoutes);
app.use('/api/posts/:id/comments', commentsRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
