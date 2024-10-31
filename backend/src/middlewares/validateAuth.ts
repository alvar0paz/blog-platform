// middlewares/validateAuth.ts
import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { authSchema } from '../validation/authSchema';

export const validateAuth = (req: Request, res: Response, next: NextFunction): void => {
  try {
    authSchema.parse(req.body);
    next();
  } catch (err) {
    if (err instanceof z.ZodError) {
      res.status(400).json({
        errors: err.errors.map((e) => e.message),
      });
      return; // Explicitly return after sending the response
    }
    next(err);
  }
};
