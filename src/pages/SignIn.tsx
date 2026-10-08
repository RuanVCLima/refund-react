import { Input } from '../componentes/Input'
import { Button } from '../componentes/Button'
import { useActionState } from 'react'
import { z, ZodError } from 'zod'
import { api } from '../services/api'
import { AxiosError } from 'axios'

const signInSchema = z.object({
  email: z.email({ message: 'E-mail is invalid' }),
  password: z.string().min(1, { message: 'Inform the password' }).trim(),
})

export function SignIn() {
  const [state, formAction, isLoading] = useActionState(onAction, null)
  async function onAction(_, formData: FormData) {
    try {
      const data = signInSchema.parse({
        email: formData.get('email'),
        password: formData.get('password'),
      })

      const response = await api.post('/sessions', data)

      console.log(response.data)
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        return { message: error.issues[0].message }
      }

      if (error instanceof AxiosError) {
        return { message: error.response?.data.message }
      }

      return { message: 'It was not possible to login' }
    }
  }
  return (
    <form action={formAction} className="w-full flex flex-col gap-4">
      <Input
        name="email"
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
      />

      <Input
        name="password"
        required
        legend="Senha"
        type="password"
        placeholder="123456"
      />

      <p className="text-sm text-red-600 text-center my-4 font-medium">
        {state?.message}
      </p>

      <Button type="submit" isLoading={isLoading}>
        Entrar{' '}
      </Button>

      <a
        href="/signup"
        className="text-sm font-semibold text-gray-400 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        {' '}
        Criar conta
      </a>
    </form>
  )
}
