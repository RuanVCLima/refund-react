import { Input } from '../componentes/Input'
import { useState } from 'react'

export function Dashboard() {
  const [name, setName] = useState('')
  function fetchRefunds(e: React.SubmitEvent) {
    e.preventDefault()
    console.log(name)
  }
  return (
    <div className="bg-neutral-950 rounded-xl p-10 md:min-w-[768px]">
      <h1 className="text-gray-500 font-bold text-xl flex-1">Requests</h1>

      <form
        onSubmit={fetchRefunds}
        className="flex flex-1 items-center justify-between pb-6 border-b-[1px] border-b-neutral-700 md:flex-row gap-2 mt-6 "
      >
        <Input
          placeholder="Search for the name"
          onChange={(e) => setName(e.target.value)}
        />
      </form>
    </div>
  )
}
