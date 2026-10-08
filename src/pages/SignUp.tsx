import { Input } from '../componentes/Input'
import { Button } from '../componentes/Button'
import { useState } from 'react'
import { z, ZodError } from 'zod'
import { api } from '../services/api'
import { useNavigate } from 'react-router'
import { AxiosError } from 'axios'

const signUpSchema = z
  .object({
    name: z.string().trim().min(1, { message: 'Inform the name' }),
    email: z.email({ message: 'Invalid email' }),
    password: z
      .string()
      .min(6, { message: 'Password must have at least 6 characters' }),
    passwordConfirm: z.string({ message: 'Confirm your password' }),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: 'The passwords must be equal',
    path: ['passwordConfirm'],
  })

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  async function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()
    try {
      setIsLoading(true)

      const data = signUpSchema.parse({
        name,
        email,
        password,
        passwordConfirm,
      })

      await api.post('/users', data)

      if (confirm('User registered successfully. Go to the login page?')) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
      if (error instanceof ZodError) {
        return alert(error.issues[0].message)
      }
      if (error instanceof AxiosError) {
        return alert(error.response?.data.message)
      }

      alert('It was not possible to register')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="Name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="your@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Input
        required
        legend="Confirm Password"
        type="password"
        placeholder="123456"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-400 mt-10 mb-4 text-center hover:text-green-800 transition ease-linear"
      >
        I already have a account
      </a>
    </form>
  )
}
