import { z } from "zod";

export const authSchemas = {
  signInSchema: z.object({
    studentId: z.string().min(1, "Student ID is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  }),
  signUpSchema: z.object({
    studentId: z.string().min(1, "Student ID is required"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    email: z.string().min(1, "E-mail is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
  }),
} as const;
