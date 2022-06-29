// Types

interface TextFieldProps {
  value?: string
  placeholder?: string
  onChange?: Function
}

export const TextField = ({ value, placeholder, onChange }: TextFieldProps) => {
  return (
    <input
      type='text'
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
  )
}
