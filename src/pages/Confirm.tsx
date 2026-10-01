import { Navigate, useLocation } from 'react-router'
import okSvg from '../assets/ok.svg'

export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }
  return (
    <div className="bg-neutral-950 lg:w-[512px] rounded-xl flex flex-col items-center p-10 gap-6">
      <h1 className="text-2xl font-bold text-center text-green-100">
        Request sent
      </h1>
      <img src={okSvg} alt="Ok icon" className="w-28" />
      <p className="text-sm text-gray-300 text-center">
        now you just have to wait. Soon your request will be analysed, and the
        finance department will contact you.
      </p>

      <a
        href="/"
        className=" w-full p-3 text-center bg-green-100 rounded-lg hover:bg-green-200 transition ease-linear"
      >
        New request
      </a>
    </div>
  )
}
