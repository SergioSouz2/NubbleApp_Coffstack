import {z} from 'zod';

const userNameRegex = /^[A-Za-z0-9][A-Za-z0-9_.]{0,29}$/;

export const signUpSchema = z.object({
   userName: z.string().regex(userNameRegex, 'UserName Inválido').toLowerCase(),
   fullName: z
      .string()
      .min(5, 'Insira um nome com pelo menos 5 caracteres')
      .max(50, 'O nome fornecido excede o limite máximo de caracteres')
      .transform(value => {
         return value
            .split(' ')
            .map(
               word =>
                  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
            )
            .join(' ');
      }),
   email: z.string().email('E-mail é inválido'),
   password: z.string().min(8, 'Senha deve ter no mínimo 8 caracteres'),
});

export type SignSchema = z.infer<typeof signUpSchema>;
