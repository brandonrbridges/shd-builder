// React
import React from 'react'

interface WidgetProps {
  children: React.ReactNode | any
  title?: string
}

const Widget = ({ children, title }: WidgetProps) => {
  return (
    <div className='border p-4 rounded'>
      {title && (
        <div className='border-b mb-4 pb-4 w-full'>
          <h2>{title}</h2>
        </div>
      )}
      {children}
    </div>
  )
}

export default Widget
