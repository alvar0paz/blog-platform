import { supabase } from './supabaseClient';

export const fetchCommentsByPostId = async (postId: string) => {
  const { data, error } = await supabase.from('comments').select('*').eq('post_id', postId).order('created_at', { ascending: true });
  if (error) throw new Error(error.message);
  return data;
};

export const createComment = async (postId: string, content: string) => {
  const { data, error } = await supabase.from('comments').insert([{ post_id: postId, content }]);
  if (error) throw new Error(error.message);
  return data;
};

export const updateComment = async (commentId: string, content: string) => {
  const { data, error } = await supabase.from('comments').update({ content }).eq('id', commentId);
  if (error) throw new Error(error.message);
  return data;
};

export const deleteComment = async (commentId: string) => {
  const { data, error } = await supabase.from('comments').delete().eq('id', commentId);
  if (error) throw new Error(error.message);
  return data;
};
