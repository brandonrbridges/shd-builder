// Hooks
import { useState } from 'react'

interface FormProps {
  initial?: object
}

const Form = ({ initial = {} }: FormProps) => {
  const [state, setState] = useState(initial)

  const set = (value: object) => {
    setState((state: object) => ({ ...state, ...value }))
  }

  return [state, set]
}

export default Form
