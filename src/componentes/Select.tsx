type Props = React.ComponentProps<'input'> & {
  legend?: string
}

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className="flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs  mb-2 text-inherit">
          {legend}
        </legend>
      )}
      <select
        className="w-full h-12 rounded-lg border border-gray-200 px-4 text-sm text-gray-300 bg-transparent outline-none focus:border-2 focus:border-green-100 placeholder-gray-100"
        value=""
        {...rest}
      >
        <option value="" disabled hidden>
          Select
        </option>
        {children}
      </select>
    </fieldset>
  )
}
