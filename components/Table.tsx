interface TableProps {
  headers: Array<any>
  data?: Array<any>
}

const Table = ({ headers, data }: TableProps) => {
  return (
    <table className='table-auto'>
      {headers && (
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
      )}
      {data && (
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((i, index) => (
                <td key={index}>{i}</td>
              ))}
            </tr>
          ))}
        </tbody>
      )}
    </table>
  )
}

export default Table
