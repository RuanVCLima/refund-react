import { Input } from '../componentes/Input'
import { Button } from '../componentes/Button'
import { useState } from 'react'

export function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()
    console.log(email, password)
  }
  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        required
        legend="E-mail"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />

      <Input
        required
        legend="Senha"
        type="password"
        placeholder="123456"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" isLoading={isLoading}>
        Entrar{' '}
      </Button>
    </form>
  )
}
