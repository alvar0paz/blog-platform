import { supabase } from './supabaseClient';

export const fetchPosts = async () => {
  const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
  if (error) throw new Error(error.message);
  return data;
};

export const fetchPostById = async (id: string) => {
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
  if (error) throw new Error(error.message);
  return data;
};

export const createPost = async (post: { title: string; content: string }) => {
  const { data, error } = await supabase.from('posts').insert([post]);
  if (error) throw new Error(error.message);
  return data;
};

export const updatePost = async (id: string, post: { title: string; content: string }) => {
  const { data, error } = await supabase.from('posts').update(post).eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};

export const deletePost = async (id: string) => {
  const { data, error } = await supabase.from('posts').delete().eq('id', id);
  if (error) throw new Error(error.message);
  return data;
};
