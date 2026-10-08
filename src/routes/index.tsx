import { BrowserRouter } from 'react-router'
import { AuthRoutes } from './AuthRoutes'
import { EmployeeRoutes } from './EmployeeRoutes'
import { ManagerRoutes } from './ManagerRoutes'
import { Loading } from '../componentes/Loading'
import { useAuth } from '../hooks/useAuth'

function Route() {
  const { session } = useAuth()
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
  const { isLoading } = useAuth()
  if (isLoading) {
    return <Loading />
  }
  return (
    <BrowserRouter>
      <Route />
    </BrowserRouter>
  )
}
