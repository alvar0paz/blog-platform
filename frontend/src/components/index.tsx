import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }
`
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.h1`
  width: 100%;
  font-size: 7rem;
  margin: 0 0 3rem;
  font-weight: bold;
  text-align: center;
  padding: 2rem;
`

export const AllPostsHeader = styled.h2`
  margin: 4rem 0 3rem;
  font-weight: bold;
  font-size: 3rem;
`

export const AllPosts = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 20rem;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 4rem 0;
  overflow-y: scroll; 
  border-radius: 1rem;  
  overflow-x: hidden;
  > *:last-child {
    margin-bottom: 0;
  }
`

export const Post = styled.div`
  background-color: lightgray;
  border-radius: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 10px;
  width: 80%;
`

export const MainButton = styled.button<{ color?: string, fontSize?: string, fontcolor?: string, width?: string }>`
  font-size: ${props => props.fontSize || '3rem'};
  color: ${props => props.fontcolor || 'black'};
  background-color: ${props => props.color || '#f9f9f9'};
  width: ${props => props.width || 'fit-content'};
  border: 1px solid gray;
  padding: 1rem;
  cursor: pointer;
`

export const TitleArea = styled.input`
  width: 50%;
  padding: 1rem;
` 

export const ContentArea = styled.textarea`
  resize: none;
  width: 50%;
  padding: 1rem;
  height: 20rem;
`

export const PostContent = styled.div`
  font-size: 2rem;
  border: 1px solid gray;
  padding: 2rem;
  margin: 5rem 0;
  border-radius: 1rem;
  width: 50%;
  height: 20rem;
  overflow-y: auto;
`

export const CommentsHeader = styled.h3`
  margin: 6rem 0 3rem;
  font-weight: bold;
  font-size: 3rem;
`

export const Comments = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-height: 20rem;
  overflow-y: auto;
  border: 1px solid #ddd;
  padding: 4rem 0;
  overflow-y: scroll; 
  border-radius: 1rem;  
  overflow-x: hidden;
  > *:last-child {
    margin-bottom: 0;
  }
`

export const CommentInnerContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`

export const CommentActionButtons = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
`

export const CommentContentArea = styled.textarea`
  resize: none;
  width: 100%;
  padding: 1rem;
  font-size: 2rem;
`

export const CommentContent = styled.div`
  width: 60%;
  font-size: 3rem;
  padding: 1rem;
  border: 1px solid gray;
  border-radius: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StatusText = styled.div`
  font-size: 2rem;
  margin: 4rem 0;
`

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 25%;
`

export const AuthInput = styled.input`
  width: 100%;
  font-size: 2rem;
  padding: 1rem;
`

export const AuthText = styled.p`
  margin: 1rem 0;
  font-size: 2rem;
`