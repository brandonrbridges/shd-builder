// Components
import DataForm from '@/components/DataForm'
import PageHeader from '@/components/PageHeader'
import Spacer from '@/components/Spacer'
import Widget from '@/components/Widget'

const Weapons = () => {
  return (
    <>
      <div className='container'>
        <PageHeader title='Weapons' />

        <Spacer gap={8}>
          <Widget title='Quick Add Weapons'>
            <DataForm type='weapon' />
          </Widget>
        </Spacer>
      </div>
    </>
  )
}

export default Weapons
