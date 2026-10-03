import { Button } from '../componentes/Button'
import { Input } from '../componentes/Input'
import { useState } from 'react'
import searchSvg from '../assets/search.svg'
import { RefundItem } from '../componentes/RefundItem'
import { CATEGORIES } from '../utils/categories'

const REFUND_EXAMPLE = {
  id: '123',
  name: 'Ruan',
  category: 'meals',
  amount: '34.50',
  categoryImg: CATEGORIES['food'].icon,
}

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

        <Button type="submit" variant="icon">
          <img src={searchSvg} alt="Search icon" className="w-5" />
        </Button>
      </form>

      <div>
        <RefundItem data={REFUND_EXAMPLE} />
      </div>
    </div>
  )
}
