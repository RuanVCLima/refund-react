import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

import fileSvg from '../assets/file.svg'
import { Input } from '../componentes/Input'
import { Select } from '../componentes/Select'
import { CATEGORIES, CATEGORIES_KEYS } from '../utils/categories'
import { Upload } from '../componentes/Upload'
import { Button } from '../componentes/Button'

export function Refund() {
  const [name, setName] = useState('Teste')
  const [amount, setAmount] = useState('34')
  const [category, setCategory] = useState('transport')
  const [filename, setFileName] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const params = useParams<{ id: string }>()

  function onSubmit(e: React.SubmitEvent) {
    e.preventDefault()

    if (params.id) {
      return navigate(-1)
    }

    console.log(name, amount, category, filename)
    navigate('/confirm', { state: { fromSubmit: true } })
  }
  return (
    <form
      className="bg-neutral-950 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px"
      onSubmit={onSubmit}
    >
      <header>
        <h1 className="text-xl font-bold">Refund request</h1>
        <p className="text-sm text-gray-200 mt-2 mb-4">
          Expense information for reimbursement
        </p>
      </header>
      <Input
        required
        legend="Name of request"
        value={name}
        onChange={(e) => setName(e.target.value)}
        disabled={!!params.id}
      />

      <div className="flex gap-4">
        <Select
          required
          legend="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          disabled={!!params.id}
        >
          {CATEGORIES_KEYS.map((category) => (
            <option key={category} value={category}>
              {CATEGORIES[category].name}
            </option>
          ))}
        </Select>

        <Input
          legend="Value"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          disabled={!!params.id}
        />
      </div>

      {params.id ? (
        <a
          href="https://www.google.com"
          target="_blank"
          className="text-sm text-green-100 font-semibold flex items-center justify-center gap-2 my-6 hover:opacity-70 transition ease-linear"
        >
          <img src={fileSvg} alt="File icon" />
          Show ticket
        </a>
      ) : (
        <Upload
          filename={filename && filename.name}
          onChange={(e) => e.target.files && setFileName(e.target.files[0])}
        />
      )}

      <Button type="submit" isLoading={isLoading}>
        {params.id ? 'Return' : 'Send'}
      </Button>
    </form>
  )
}
