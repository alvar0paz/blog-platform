import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePost, useUpdatePost, useDeletePost } from '../hooks/usePosts';
import { useComments, useCreateComment, useUpdateComment, useDeleteComment } from '../hooks/useComments';
import {
  CommentActionButtons,
  CommentContent,
  CommentContentArea,
  CommentInnerContainer,
  Comments,
  CommentsHeader,
  ContentArea,
  Header,
  MainButton,
  MainWrapper,
  PostContent,
  StatusText,
  TitleArea
} from '../components';

const PostDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: post, isLoading, error } = usePost(id!);
  const updatePostMutation = useUpdatePost(id!);
  const deletePostMutation = useDeletePost(id!);

  const { data: comments, refetch, isLoading: commentsLoading, error: commentsError } = useComments(id!);
  const createCommentMutation = useCreateComment(id!);

  const updateCommentMutation = useUpdateComment(id!);
  const deleteCommentMutation = useDeleteComment(id!);

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [newComment, setNewComment] = useState('');
  const [editingCommentId, setEditingCommentId] = useState<string | null>(null);
  const [editingCommentContent, setEditingCommentContent] = useState('');

  useEffect(() => {
    if (isEditing && post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [isEditing, post]);

  const handleUpdate = () => {
    updatePostMutation.mutate({ title, content }, {
      onSuccess: () => {
        setIsEditing(false); 
      }
    });
  };

  const handleDelete = () => {
    deletePostMutation.mutate(undefined, {
      onSuccess: () => {
        navigate('/');
      }
    });
  };

  const handleCreateComment = () => {
    createCommentMutation.mutate(newComment, {
      onSuccess: () => {
        setNewComment(''); 
        refetch(); 
      }
    });
  };

  const handleUpdateComment = (commentId: string) => {
    updateCommentMutation.mutate(
      { commentId, content: editingCommentContent },
      {
        onSuccess: () => {
          setEditingCommentId(null); 
          refetch(); 
        },
      }
    );
  };

  const handleDeleteComment = (commentId: string) => {
    deleteCommentMutation.mutate(commentId, {
      onSuccess: () => refetch() 
    });
  };

  return (
    <MainWrapper>
      {isLoading && <StatusText>Loading post...</StatusText>}
      {error && <StatusText>Error loading post</StatusText>}

      {post && (
       <>
        {isEditing ? (
            <>

              <Header>{post.title}</Header>

              <MainButton
                  onClick={() => navigate('/')}
                >
                  Home
              </MainButton>

              <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '100%', margin: '2rem 0' }}>
                <TitleArea
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ marginBottom: '2rem' }}
                  placeholder="Title has to be at least 4 characters"
                />
                
                <ContentArea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Content has to be at least 4 characters"
                />
              </div>

              <div>
                <MainButton
                  onClick={handleUpdate}
                  disabled={title.length < 4 || content.length < 4}
                  style={{
                    padding: '1rem 2rem',
                    marginRight: '1rem',
                    cursor: title.length < 4 || content.length < 4 ? 'not-allowed' : 'pointer',
                    color: title.length < 4 || content.length < 4 ? 'gray' : 'inherit'
                  }}
                >
                  Save
                </MainButton>
                <MainButton
                  onClick={() => setIsEditing(false)}
                  style={{ padding: '10px 20px', cursor: 'pointer' }}
                >
                  Cancel
                </MainButton>
              </div>
            </>
          ) : (
            <>
              <Header>{post.title}</Header>

              <MainButton
                  onClick={() => navigate('/')}
                >
                  Home
              </MainButton>

              <PostContent>{post.content}</PostContent>

              <div style={{ display: 'flex', gap: '2rem' }}>
                <MainButton
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </MainButton>
                <MainButton
                  onClick={handleDelete}
                  color='red'
                  fontcolor='white'
                >
                  Delete
                </MainButton>
              </div>
            </>
          )}
       </>
      )}

      {commentsLoading && <StatusText>Loading comments...</StatusText>}
      {commentsError && <StatusText>Error loading comments</StatusText>}
      {comments && (
        <>
          <CommentsHeader>Comments</CommentsHeader>
          <Comments>
            <CommentInnerContainer style={{ marginBottom: '3rem' }}>
              <CommentContentArea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment (at lest 4 characters)"
              />
              <MainButton
                onClick={handleCreateComment}
                disabled={newComment.length < 4}
                fontSize='2rem'
                style={{
                  marginLeft: '2rem',
                  width: '30rem',
                  cursor: newComment.length < 4 ? 'not-allowed' : 'pointer',
                  color: newComment.length < 4 ? 'gray' : 'inherit'
                }}
              >
                Add Comment
              </MainButton>
            </CommentInnerContainer>
            
            {comments?.map((comment) => (
              <CommentInnerContainer
                key={comment.id}
                style={{ marginBottom: '1rem' }}
              >
                {editingCommentId === comment.id ? (
                  <>
                    <CommentContentArea
                      value={editingCommentContent}
                      onChange={(e) => setEditingCommentContent(e.target.value)}
                    />
                    <CommentActionButtons>
                      <MainButton
                        onClick={() => handleUpdateComment(comment.id)}
                        disabled={editingCommentContent.length < 5}
                        fontSize='2rem'
                        width='10rem'
                        style={{
                          marginLeft: '2rem',
                          cursor: editingCommentContent.length < 5 ? 'not-allowed' : 'pointer',
                          color: editingCommentContent.length < 5 ? 'gray' : 'inherit'
                        }}
                      >
                        Save
                      </MainButton>
                      <MainButton
                        onClick={() => setEditingCommentId(null)}
                        fontSize='2rem'
                        color='red'
                        fontcolor='white'
                        width='10rem'
                        style={{ marginLeft: '1rem' }}
                      >
                        Cancel
                      </MainButton>
                    </CommentActionButtons>
                  </>
                ) : (
                  <>
                    <CommentContent>{comment.content}</CommentContent>
                    <CommentActionButtons>
                      <MainButton
                        onClick={() => {
                          setEditingCommentId(comment.id);
                          setEditingCommentContent(comment.content);
                        }}
                        fontSize='2rem'
                        style={{ marginLeft: '2rem' }}
                        width='10rem'
                      >
                        Edit
                      </MainButton>
                      <MainButton
                        onClick={() => handleDeleteComment(comment.id)}
                        fontSize='2rem'
                        color='red'
                        fontcolor='white'
                        width='10rem'
                        style={{ marginLeft: '1rem' }}
                      >
                        Delete
                      </MainButton>
                    </CommentActionButtons>
                  </>
                )}
              </CommentInnerContainer>
            ))}
          </Comments>  
        </>
      )}
    </MainWrapper>
  );
};

export default PostDetails;
