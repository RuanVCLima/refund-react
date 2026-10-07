import { BrowserRouter } from 'react-router'
import { AuthRoutes } from './AuthRoutes'
import { EmployeeRoutes } from './EmployeeRoutes'
import { ManagerRoutes } from './ManagerRoutes'
import { Loading } from '../componentes/Loading'

const isLoading = false

const session = {
  user: {
    role: '',
  },
}

function Route() {
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
