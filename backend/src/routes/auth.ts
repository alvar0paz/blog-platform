// routes/authRoutes.ts
import express from 'express';
import { validateAuth } from '../middlewares/validateAuth';
import { supabase } from '../utils/supabaseClient';

const router = express.Router();

router.post('/signup', validateAuth, async (req, res): Promise<void> => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      res.status(400).json({ error: error.message });
      return; // Explicitly return to satisfy TypeScript
    }

    res.status(201).json({ message: "User created successfully", data });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post('/login', validateAuth, async (req, res): Promise<void> => {
  const { email, password } = req.body;
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      res.status(400).json({ error: error.message });
      return; // Explicitly return to satisfy TypeScript
    }

    res.status(200).json({ message: "Login successful", data });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
