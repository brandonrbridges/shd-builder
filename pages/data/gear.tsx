import DataForm from '@/components/DataForm'

const Gear = () => {
  return (
    <>
      <div className='container'>
        <h1>Gear</h1>

        <div className='space-y-4'>
          <div className='border p-4 rounded'>
            <p>Quick Add Gear</p>
            <DataForm type='gear' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gear
