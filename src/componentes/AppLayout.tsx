import { Outlet } from 'react-router'
import { Header } from './Header'

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center text-gray-400">
      <main className="p-3 w-full md:w-auto ">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
