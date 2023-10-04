import {z} from 'zod';

export const loginSchema = z.object({
   email: z.string().email('E-mail é inválido'),
   password: z.string().min(1, 'Senha Obrigatória'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
