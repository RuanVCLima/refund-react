export function NotFound() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black text-gray-300">
      <div className="flex flex-col">
        <h1 className="text-gray-400 font-semibold text-2xl mb-10">
          {' '}
          Error 404 Page not found. 🥲
        </h1>
        <a
          href="/"
          className=" font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
        >
          {' '}
          Click here to return
        </a>
      </div>
    </div>
  )
}
