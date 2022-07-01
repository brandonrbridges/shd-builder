// Hooks
import { useEffect, useState } from 'react'

interface WeaponsTableProps {
  data: Array<any>
}

const WeaponsTable = ({ data }: WeaponsTableProps) => {
  const [rows, setRows] = useState<Array<any>>([])

  useEffect(() => {
    if (data) {
      setRows(data)
    }
  }, [data])

  return (
    <table className='table-auto w-full'>
      <thead>
        <tr className='text-left'>
          <th>Name</th>
          <th>Variant</th>
          <th>Type</th>
          <th>Quality</th>
          <th>Base Damage</th>
          <th>Optimal Range</th>
          <th>RPM</th>
          <th>Magazine Size</th>
          <th>Reload Speed</th>
        </tr>
      </thead>
      {data.length > 0 && (
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.variant}</td>
              <td>{row.type}</td>
              <td>{row.quality}</td>
              <td>{row.baseDamage}</td>
              <td>{row.optimalRange}</td>
              <td>{row.rpm}</td>
              <td>{row.magazineSize}</td>
              <td>{row.reloadSpeed}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default WeaponsTable
