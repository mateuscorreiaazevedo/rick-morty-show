import React from 'react'

type Props = {
  label?: string
  placeholder?: string
  setChange: React.Dispatch<React.SetStateAction<string>>
  name?: string
}

export const SeachBar = ({ label, setChange, placeholder, name }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChange(e.target.value)
  }

  return (
    <label className="w-full h-20 cursor-pointer">
      <span className="text-lg">{label}:</span>
      <input
        type="search"
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
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
