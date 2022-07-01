// React
import React, { useEffect, useState } from 'react'

// Hooks
import useForm from '@/hooks/useForm'

// Firebase
import { addFirebaseDoc } from '@/helpers/firebase'

// Components
import Button from '@/components/Button'
import { SelectField, TextField } from '@/components/Form'

const weaponFields = [
  { label: 'Name', key: 'name', type: 'text' },
  { label: 'Variant', key: 'variant', type: 'text' },
  {
    label: 'Quality',
    key: 'quality',
    type: 'select',
    options: [
      { name: 'High End', value: 'High End' },
      { name: 'Named', value: 'Named' },
      { name: 'Exotic', value: 'Exotic' },
    ],
  },
  {
    label: 'Type',
    key: 'type',
    type: 'select',
    options: [
      { name: 'Assault Rifle', value: 'Assault Rifle' },
      { name: 'Pistol', value: 'Pistol' },
      { name: 'LMG', value: 'LMG' },
      { name: 'Marksman Rifle', value: 'Marksman Rifle' },
      { name: 'Rifle', value: 'Rifle' },
      { name: 'Shotgun', value: 'Shotgun' },
      { name: 'SMG', value: 'SMG' },
    ],
  },
  { label: 'Base Damage', key: 'baseDamage', type: 'number' },
  { label: 'Optimal Range', key: 'optimalRange', type: 'number' },
  { label: 'RPM (Rounds per Minute)', key: 'rpm', type: 'number' },
  { label: 'Magazine Size', key: 'magazineSize', type: 'number' },
  { label: 'Reload Speed', key: 'reloadSpeed', type: 'number' },
]

const gearFields = [
  { label: 'Name', key: 'name', type: 'text' },
  {
    label: 'Slot',
    key: 'slot',
    type: 'select',
    options: [
      { name: 'Mask', value: 'Mask' },
      { name: 'Backpack', value: 'Backpack' },
      { name: 'Vest', value: 'Vest' },
      { name: 'Gloves', value: 'Gloves' },
      { name: 'Holster', value: 'Holster' },
      { name: 'Kneepads', value: 'Kneepads' },
    ],
  },
  {
    label: 'Quality',
    key: 'quality',
    type: 'select',
    options: [
      { name: 'High End', value: 'High End' },
      { name: 'Named', value: 'Named' },
      { name: 'Exotic', value: 'Exotic' },
    ],
  },
  {
    label: 'Brand',
    key: 'brand',
    type: 'select',
    options: [
      { name: 'Brand 1', value: 'Brand 1' },
      { name: 'Brand 2', value: 'Brand 2' },
    ],
  },
  { label: 'Core Attribute', key: 'coreAtttribute', type: 'text' },
  { label: 'Attribute 1', key: 'atttribute1', type: 'text' },
  { label: 'Attribute 2', key: 'atttribute2', type: 'text' },
  { label: 'Mod', key: 'mod', type: 'text' },
  {
    label: 'Talent',
    key: 'talent',
    type: 'select',
    options: [
      { name: 'Talent 1', value: 'Talent 1' },
      { name: 'Talent 2', value: 'Talent 2' },
    ],
  },
]

interface DataEntryProps {
  type: 'weapons' | 'gear'

  onSubmit?: Function
}

const DataForm = ({ type, onSubmit }: DataEntryProps) => {
  const [fields, setFields] = useState<Array<any>>([])
  const [data, setData] = useForm({})

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()

    await addFirebaseDoc(type, data)

    onSubmit(data)
  }

  useEffect(() => {
    if (type) {
      switch (type) {
        case 'weapons':
          setFields(weaponFields)
          break
        case 'gear':
          setFields(gearFields)
          break
        default:
          return
      }
    }
  }, [type])

  return (
    <form onSubmit={handleSubmit} className='gap-4 grid grid-cols-4'>
      {fields.map((field: object, index: number) => {
        if (field.type == 'text' || field.type == 'number') {
          return (
            <TextField
              key={index}
              type={field.type}
              label={field.label}
              value={data[field.key]}
              onChange={(value: any) => setData({ [field.key]: value })}
            />
          )
        } else if (field.type == 'select') {
          return (
            <SelectField
              key={index}
              label={field.label}
              value={data[field.key]}
              onChange={(value: any) => setData({ [field.key]: value })}
              options={field.options}
            />
          )
        }
      })}
      <div className='col-span-full flex items-center justify-center'>
        <Button type='submit' variant='primary'>
          Add {type == 'weapons' ? 'weapon' : 'gear'}
        </Button>
      </div>
    </form>
  )
}

export default DataForm
