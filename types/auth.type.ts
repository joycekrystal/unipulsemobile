import { z } from "zod";
import { authSchemas } from "@/schemas";

export type SignInFormData = z.infer<typeof authSchemas.signInSchema>;
export type SignUpFormData = z.infer<typeof authSchemas.signUpSchema>;

export type AuthUser = {
  id: number;
  userRoleId: number;
  firstName: string;
  middleName: string | null;
  lastName: string;
  email: string;
  studentId: string;
  studentCourse: string;
  studentYearLevel: string;
  isEnabled: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type SigninApiResponse = {
  user: AuthUser;
  authToken: string;
};
