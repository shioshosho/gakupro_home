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
      </div>
      <div className='snap-start text-white text-center flex flex-col justify-center select-none h-screen w-screen italic'>Fin</div>
    </>
  )
}

export default TopPage
