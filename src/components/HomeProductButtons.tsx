'use client'
import { FC } from 'react'

type Props = {
  //text :string
}

const HomeProductButton :FC<{name:string}> = (props) =>{
  const {name} = props;
  return(
    <>   
      <div className="flex flex-row bg-white rounded-full p-6 mx-24">
        <div className='flex-none text-center ml-4'>gif</div>
        <div className='grow text-center'>{name}</div>
      </div>
    </>
  )
}

const HomeProductButtons: FC<Props> = () => {
  return(
    <>
      <div className='flex flex-col space-y-6'>
          <HomeProductButton name='道案内AR' />
          <HomeProductButton name='研究室デジタルアーカイブ' />
          <HomeProductButton name='VRChat' />
          <HomeProductButton name='バーチャルGYMLABO' />
          <HomeProductButton name='バーチャルキャンパス' />
          <HomeProductButton name='ペッパーズゴースト' />
      </div>
    </>
  )
}

export default HomeProductButtons
