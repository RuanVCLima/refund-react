import { BrowserRouter } from 'react-router'
import { AuthRoutes } from './AuthRoutes'
import { EmployeeRoutes } from './EmployeeRoutes'
import { ManagerRoutes } from './ManagerRoutes'
import { Loading } from '../componentes/Loading'
import { useAuth } from '../hooks/useAuth'

const isLoading = false

const session = {
  user: {
    role: '',
  },
}

function Route() {
  const context = useAuth()
  console.log(context)
  switch (session?.user.role) {
    case 'employee':
      return <EmployeeRoutes />
    case 'manager':
      return <ManagerRoutes />
    default:
      return <AuthRoutes />
  }
}

export function Routes() {
  if (isLoading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}
