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
      <a href={href} className='mx-8'>
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
          <HomeProductButton href={"/Product#giving_direction_with_ar"} name='道案内AR' />
          <HomeProductButton href={"/Product#virtual_gymlabo"} name='バーチャルGYMLABO' />
          <HomeProductButton href={"/Product#virtual_campus"} name='バーチャルキャンパス' />
          <HomeProductButton href={"/Product#gymalabo_lab_introduction"} name='GYMLABO研究室紹介' />
          <HomeProductButton href={"/Product#nft"} name='NFT' />
          <HomeProductButton href={"/Product#safety_and_health_vr_teaching_materials"} name='安全衛生VR教材' />
      </div>
    </>
  )
}

export default HomeProductButtons
