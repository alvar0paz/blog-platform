import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreatePost } from '../hooks/usePosts';
import { Header, MainButton, MainWrapper, ContentArea, TitleArea } from '../components';

const CreatePost: React.FC = () => {
  const navigate = useNavigate();
  const createPostMutation = useCreatePost();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreatePost = () => {
    createPostMutation.mutate({ title, content }, {
      onSuccess: () => navigate('/')
    });
  };

  const isSubmitDisabled = title.length < 4 || content.length < 4;

  return (
    <MainWrapper>
      <Header>Create New Post</Header>

      <MainButton
        onClick={() => navigate('/')}
        style={{ marginBottom: '2rem' }}
      >
        Home
      </MainButton>
      
      <TitleArea
        type="text"
        placeholder="Title has to be at least 4 characters"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginBottom: '2rem' }}
      />
      
      <ContentArea
        placeholder="Content has to be at least 4 characters"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ marginBottom: '2rem' }}
      />
      
      <MainButton
        onClick={handleCreatePost}
        disabled={isSubmitDisabled}
        style={{
          marginBottom: '1rem',
          cursor: isSubmitDisabled ? 'not-allowed' : 'pointer',
          color: isSubmitDisabled ? 'gray' : 'inherit',
        }}
      >
        Submit
      </MainButton>
    </MainWrapper>
  );
};

export default CreatePost;
