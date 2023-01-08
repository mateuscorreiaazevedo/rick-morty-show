import React from 'react'

type Props = {
  setChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  label: string
  options?: {
    label: string
    value: string
  }[]
}

export const Options = ({ label, name, options, setChange }: Props) => {
  return (
    <label className="cursor-pointer flex flex-col items-start h-20">
      <span className="text-lg hover:text-secondary dark:hover:text-primary transition-all">{label}:</span>
      <select
        onChange={setChange}
        name={name}
        placeholder={label}
        className="w-40 h-10 focus:outline-secondary dark:focus:outline-primary border-none focus-within:border-transparent rounded-lg px-4 cursor-pointer dark:text-lighten bg-lighten dark:bg-gray-scale"
      >
        <option value={undefined} className='text-gray-500 bg-gray-200'>
          {label}
        </option>
        {options?.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </label>
  )
}
