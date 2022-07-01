// Components
import DataForm from '@/components/DataForm'
import PageHeader from '@/components/PageHeader'
import Spacer from '@/components/Spacer'
import Widget from '@/components/Widget'

const Gear = () => {
  return (
    <>
      <div className='container'>
        <PageHeader title='Gear' />

        <Spacer gap={8}>
          <Widget title='Quick Add Gear'>
            <DataForm type='gear' />
          </Widget>
        </Spacer>
      </div>
    </>
  )
}

export default Gear
