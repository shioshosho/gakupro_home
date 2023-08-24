import { NextPage } from 'next'
//import Test from '@/components/Test'
import Menu from '@/components/Menu'

const TopPage: NextPage = () => {
  return (
    <>
      {/*
        *<Test test='hoge' />
        */}
      <Menu />
      <div className='flex-1 overflow-y-scroll hidden-scrollbar'>
      {(() => {
        const test: string = "about text"
        const items = []
        for(let i=0;i<50;i++){
          items.push(<p className='text-white'>{ test }</p>)
        }
        return items
      })()}
      </div>
    </>
  )
}

export default TopPage
