import { z } from 'zod';

export const authSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" })
    .max(20, { message: "Password must be no more than 20 characters" }),
});

export type AuthSchema = z.infer<typeof authSchema>;
