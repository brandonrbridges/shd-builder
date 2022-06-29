import DataForm from '@/components/DataForm'

const Weapons = () => {
  return (
    <>
      <div className='container'>
        <h1>Weapons</h1>

        <div className='space-y-4'>
          <div className='border p-4 rounded'>
            <p>Quick Add Weapon</p>
            <DataForm type='weapon' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Weapons
