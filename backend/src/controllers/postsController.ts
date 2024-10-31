import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { supabase } from '../utils/supabaseClient';

export const getAllPosts = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { data, error } = await supabase.from('posts').select('*');
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

export const createPost = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { title, content } = req.body;
  const { data, error } = await supabase.from('posts').insert([{ title, content }]);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(201).json(data);
  }
});

export const getPostById = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { data, error } = await supabase.from('posts').select('*').eq('id', id).single();
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

export const updatePost = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { title, content } = req.body;
  const { data, error } = await supabase.from('posts').update({ title, content }).eq('id', id);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

export const deletePost = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { data, error } = await supabase.from('posts').delete().eq('id', id);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});
