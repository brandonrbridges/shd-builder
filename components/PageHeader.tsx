interface PageHeaderProps {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className='container mb-4'>
      <h1>{title}</h1>
    </div>
  )
}

export default PageHeader
