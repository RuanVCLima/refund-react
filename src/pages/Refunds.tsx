import { useState } from 'react'

import { Input } from '../componentes/Input'
import { Select } from '../componentes/Select'
import { CATEGORIES, CATEGORIES_KEYS } from '../utils/categories'
import { Upload } from '../componentes/Upload'

export function Refund() {
  const [category, setCategory] = useState('')
  return (
    <form className="bg-neutral-950 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px">
      <header>
        <h1 className="text-xl font-bold">Refund solicitation</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Expense information for reimbursement
        </p>
      </header>
      <Input required legend="Name of solicitation" />

      <div className="flex gap-4">
        <Select
          required
          legend="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input legend="Value" required />
      </div>

      <Upload filename="ruan.png" />
    </form>
  )
}
