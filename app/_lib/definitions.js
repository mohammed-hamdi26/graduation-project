import { z } from "zod";

export const SignupFormSchema = z.object({
  first_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  last_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  full_name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .trim(),
  age: z
    .number()
    .int()
    .max(100, { message: "Age must be at At most 100 years old." }),
  email: z.string().email({ message: "Please enter a valid email." }).trim(),
  password: z
    .string()
    .length(14, { message: "Must Be  14 characters long" })
    .regex(/[0-9]+/, { message: "Must Contain Numbers ." })
    .trim(),
  phone: z
    .string()
    .length(11, { message: "Phone must be at least 11 characters long." })
    .trim(),
});
