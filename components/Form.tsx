// Types

import { useEffect, useState } from 'react'

interface TextFieldProps {
  label?: string
  value?: string
  placeholder?: string
  type?: string
  onChange?: Function
}

export const TextField = ({
  label,
  value,
  placeholder,
  type = 'text',
  onChange,
}: TextFieldProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={value ?? ''}
        placeholder={placeholder}
        onChange={(event) => {
          if (onChange) {
            return onChange(event.target.value)
          }
        }}
        className='block border px-2 py-1 rounded w-full'
        disabled={!onChange}
      />
    </div>
  )
}

interface SelectFieldProps {
  label?: string
  value?: string
  placeholder?: string
  options?: Array<any>
  onChange?: Function
}

export const SelectField = ({ label, value, placeholder, options, onChange }: SelectFieldProps) => {
  const [opts, set] = useState([])

  useEffect(() => {
    if (options) {
      set(options)
    }
  }, [options])

  return (
    <div>
      <label>{label}</label>
      <select
        value={value ?? ''}
        onChange={(event) => {
          if (onChange) {
            return onChange(event.target.value)
          }
        }}
        className='block border px-2 py-1 rounded w-full'
        disabled={!onChange}
      >
        <option value=''>{placeholder ?? 'Please select an option'}</option>
        {opts &&
          opts.map(({ value, name }) => (
            <option key={value} value={value}>
              {name}
            </option>
          ))}
      </select>
    </div>
  )
}
