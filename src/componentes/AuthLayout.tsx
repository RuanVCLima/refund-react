import { Outlet } from 'react-router'

import logoSvg from '../assets/logo.svg'

export function AuthLayout() {
  return (
    <div className="w-screen h-screen bg-black flex flex-coil justify-center items-center text-gray-300 ">
      <main className="bg-neutral-950 p-8 rounded-md flex items-center flex-col md:min-w-[28.875rem]">
        <img src={logoSvg} alt="Logo" className="my-8" />
        <Outlet />
      </main>
    </div>
  )
}
