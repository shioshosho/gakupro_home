'use client'
import { FC } from 'react'

type ButtonProps = {
  name :string
  href :string
}

type Props ={
}

const HomeProductButton :FC<ButtonProps> = (props) =>{
  const {name, href} = props;
  return(
    <>   
      <a href={href} className='mx-24'>
        <div className="flex flex-row bg-white hover:bg-indigo-50 rounded-full p-6">
          <div className='flex-none text-center ml-4'>gif</div>
          <div className='grow text-center'>{name}</div>
        </div>
      </a>
    </>
  )
}

const HomeProductButtons: FC<Props> = () => {
  return(
    <>
      <div className='flex flex-col space-y-6'>
          <HomeProductButton href={"/Product"} name='道案内AR' />
          <HomeProductButton href={"/Product"} name='研究室デジタルアーカイブ' />
          <HomeProductButton href={"/Product"} name='VRChat' />
          <HomeProductButton href={"/Product"} name='バーチャルGYMLABO' />
          <HomeProductButton href={"/Product"} name='バーチャルキャンパス' />
          <HomeProductButton href={"/Product"} name='ペッパーズゴースト' />
      </div>
    </>
  )
}

export default HomeProductButtons
