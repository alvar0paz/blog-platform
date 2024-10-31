import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import { AllPosts, Post, MainWrapper, Header, MainButton, AllPostsHeader, StatusText } from '../components';
import Logout from '../components/Logout';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { data: posts, isLoading, error } = usePosts();

  return (
    <MainWrapper>
      <Logout />
      <Header>Blog App</Header>
      
      <MainButton
        onClick={() => navigate('/create')}
        style={{ marginBottom: '20px' }}
      >
        Create Post
      </MainButton>
      
      <AllPostsHeader>All posts</AllPostsHeader>

      <AllPosts
      >
        {isLoading && <StatusText>Loading posts...</StatusText>}
        {error && <StatusText>Error loading posts</StatusText>}
        {posts?.map((post) => (
          <Post
            key={post.id}
            onClick={() => navigate(`/post/${post.id}`)}
          >
            <h2 style={{ margin: 0 }}>{post.title}</h2>
          </Post>
        ))}
        {posts && posts.length === 0 && <p>No posts available.</p>}
      </AllPosts>
    </MainWrapper>
  );
};

export default Home;
