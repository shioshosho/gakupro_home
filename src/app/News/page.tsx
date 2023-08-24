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
      <div className='flex-1 overflow-y-scroll hidden-scrollbar bg-fuchsia-50'>
      {(() => {
        const test: string = "news test"
        const items = []
        for(let i=0;i<50;i++){
          items.push(<p>{ test }</p>)
        }
        return items
      })()}
      </div>
    </>
  )
}

export default TopPage
