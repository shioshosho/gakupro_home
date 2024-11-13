import { NextPage } from 'next'
//import Test from '@/components/Test'
import Menu from '@/components/Menu'

const TopPage: NextPage = () => {
  return (
    <>
      <Menu />
      <div className="flex flex-col w-screen">
        <div className='mt-[101px]'/>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWF0LFDn5z31IVjP3FsmZuowqF0TdWarYFU90KokZjZgTdgw/viewform?embedded=true" className="w-full m-0 overflow-hidden" style={{ height:"930px", minWidth:"320px" }} >読み込んでいます…</iframe>
        {/*GoogleFormの編集用リンク https://docs.google.com/forms/d/17r-ftT61JoQSc3whv5v1mKbAvQHMCeWvV6mNoNXDOh8/edit*/}
      </div>
    </>
  )
}

export default TopPage
