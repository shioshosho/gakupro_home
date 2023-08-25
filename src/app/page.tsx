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
      <div className='snap-start pt-[101px] flex flex-col h-screen w-screen select-none text-white text-center'>
        <p>START FROM HERE</p>
        {(() => {
          const test: string = "home text 1"
          const items = []
          for(let i=0;i<10;i++){
            items.push(<p>{ test }</p>)
          }
          return items
        })()}
      </div>
      <div className='snap-start text-white text-center h-screen w-screen'>SNAP ME w/ snap-start</div>
      <div className='snap-start text-white text-center flex flex-col justify-center select-none h-screen w-screen italic'>Fin</div>
    </>
  )
}

export default TopPage
