import React from 'react'

type Props = {
  label?: string
  placeholder?: string
  setChange: (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement>) => void
  name?: string
}

export const SeachBar = ({ label, setChange, placeholder, name }: Props) => {
  return (
    <label className="w-full h-20 cursor-pointer">
      <span className="text-lg">{label}:</span>
      <input
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
        "
      />
    </label>
  )
}
