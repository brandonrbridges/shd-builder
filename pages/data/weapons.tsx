// Hooks
import { useEffect, useState } from 'react'

// Helpers
import { getFirebaseDocs } from '@/helpers/firebase'

// Components
import DataForm from '@/components/DataForm'
import PageHeader from '@/components/PageHeader'
import Spacer from '@/components/Spacer'
import Table from '@/components/Table'
import WeaponsTable from '@/components/WeaponsTable'
import Widget from '@/components/Widget'

const Weapons = () => {
  const [weapons, setWeapons] = useState([])

  const updateState = (item) => {
    setWeapons((state: Array<any>) => [...state, item])
  }

  useEffect(() => {
    const onLoad = async () => {
      const data = await getFirebaseDocs('weapons')

      if (data) {
        return setWeapons(data)
      }
    }

    onLoad()
  }, [])

  return (
    <>
      <div className='container'>
        <PageHeader title='Weapons' />

        <Spacer gap={8}>
          <Widget title='Quick Add Weapons'>
            <DataForm type='weapons' onSubmit={updateState} />
          </Widget>
          <Widget title='Weapons'>
            <WeaponsTable data={weapons} />
          </Widget>
        </Spacer>
      </div>
    </>
  )
}

export default Weapons
