import { Request, Response } from 'express';
import { asyncHandler } from '../utils/asyncHandler';
import { supabase } from '../utils/supabaseClient';

export const getAllComments = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { data, error } = await supabase.from('comments').select('*').eq('post_id', id);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

export const createComment = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { content } = req.body;
  const { data, error } = await supabase.from('comments').insert([{ post_id: id, content }]);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.status(201).json(data);
  }
});

export const updateComment = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { commentId } = req.params;
  const { content } = req.body;
  const { data, error } = await supabase.from('comments').update({ content }).eq('id', commentId);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});

export const deleteComment = asyncHandler(async (req: Request, res: Response): Promise<void> => {
  const { commentId } = req.params;
  const { data, error } = await supabase.from('comments').delete().eq('id', commentId);
  if (error) {
    res.status(500).json({ error: error.message });
  } else {
    res.json(data);
  }
});
