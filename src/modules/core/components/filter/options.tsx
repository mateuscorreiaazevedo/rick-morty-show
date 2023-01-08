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
    <label className="cursor-pointer lg:w-40 md:w-32 w-full flex flex-col items-start h-fit md:h-20 lg:h-20 xl:h-20">
      <span className="text-lg hidden md:block hover:text-secondary dark:hover:text-primary transition-all">{label}:</span>
      <select
        onChange={setChange}
        name={name}
        placeholder={label}
        className="lg:w-40 w-full h-10 shadow-md focus:outline-secondary dark:focus:outline-primary border-none focus-within:border-transparent rounded-lg px-4 cursor-pointer dark:text-lighten bg-lighten dark:bg-gray-scale"
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
