import React from 'react'

type Props = {
  label?: string
  placeholder?: string
  setChange: (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void
  name?: string
  value?: string | undefined
}

export const SeachBar = ({ label, setChange, placeholder, name, value }: Props) => {
  return (
    <label className="w-full md:h-20 lg:h-20 h-fit xl:h-20 cursor-pointer">
      <span className="text-lg hidden md:block sm:hidden lg:block xl:block">{label}:</span>
      <input
        defaultValue={value ?? ''}
        type="search"
        name={name}
        placeholder={placeholder}
        onChange={setChange}
        className="
          w-full
          h-10
          px-4
          rounded-lg
          bg-lighten
          dark:bg-gray-scale
          focus:outline-secondary
          dark:focus:outline-primary
          border-none
          placeholder:italic
          shadow-md
        "
      />
    </label>
  )
}
