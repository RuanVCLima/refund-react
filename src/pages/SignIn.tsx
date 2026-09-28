import { Input } from '../componentes/Input'
import { Button } from '../componentes/Button'

export function SignIn() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <Input required legend="E-mail" placeholder="seu@email.com" />

      <Input required legend="Senha" type="password" placeholder="123456" />

      <Button>Entrar </Button>
    </form>
  )
}
