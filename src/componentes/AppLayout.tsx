import { Outlet } from 'react-router'

export function AppLayout() {
  return (
    <div className="w-screen h-screen bg-black flex flex-col items-center text-gray-400">
      <main className="p-3 w-full md:w-auto ">
        <Outlet />
      </main>
    </div>
  )
}
