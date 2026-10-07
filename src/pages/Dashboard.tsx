import { Button } from '../componentes/Button'
import { Input } from '../componentes/Input'
import { useState } from 'react'
import searchSvg from '../assets/search.svg'
import { RefundItem } from '../componentes/RefundItem'
import type { RefundItemProps } from '../componentes/RefundItem'
import { CATEGORIES } from '../utils/categories'
import { formatCurrency } from '../utils/formatCurrency'
import { Pagination } from '../componentes/Pagination'

const REFUND_EXAMPLE = {
  id: '123',
  name: 'Ruan',
  category: 'meals',
  amount: formatCurrency(34.5),
  categoryImg: CATEGORIES['food'].icon,
}

export function Dashboard() {
  const [name, setName] = useState('')
  const [page, setPage] = useState(1)
  const [totalOfPage, setTotalOfPage] = useState(10)
  const [refunds, setRefunds] = useState<RefundItemProps[]>([REFUND_EXAMPLE])

  function fetchRefunds(e: React.SubmitEvent) {
    e.preventDefault()
    console.log(name)
  }

  function handlePagination(action: 'next' | 'previous') {
    setPage((prevPage) => {
      if (action === 'next' && prevPage < totalOfPage) {
        return prevPage + 1
      }

      if (action === 'previous' && prevPage > 1) {
        return prevPage - 1
      }

      return prevPage
    })
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

      <div className="my-6 flex flex-col gap-4 max-h-[342px] overflow-y-scroll">
        {refunds.map((item) => (
          <RefundItem key={item.id} data={item} href={`/refund/${item.id}`} />
        ))}
      </div>

      <Pagination
        current={page}
        total={totalOfPage}
        onNext={() => handlePagination('next')}
        onPrevious={() => handlePagination('previous')}
      />
    </div>
  )
}
