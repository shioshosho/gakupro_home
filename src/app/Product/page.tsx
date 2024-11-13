'use client'
import { Suspense, useRef, FC } from 'react'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { SpotLight, Preload, Text } from '@react-three/drei'
import Menu from '@/components/Menu'
import Scene from '@/features/Canvas/Scene'
import Loader from '@/components/Loader'

const TopPage: NextPage = () => {
  return (
    <>
      <Menu />
      <div className="flex flex-col w-screen px-6">
        <div className='mt-[101px]'/>
        <div className='bg-white rounded-md p-10'>
          <h2 id='giving_direction_with_ar'>道案内AR</h2>
          <div> 
            <ul>
              <li>新入生や来客など、飯塚キャンパスに慣れていない人のための道案内アプリを開発します</li>
              <li>位置推定技術と音声案内を組み合わせて、歩きスマホをしない道案内を目指します</li>
              <li>拡張現実(AR)や空間音響を用いた直観的なユーザー体験や、デジタルツインを用いた経路探索のデザイン・開発にも挑戦します</li>
            </ul>
          </div>
        </div>
        <div className='bg-white rounded-md p-10 mt-5'>
          <h2 id='virtual_gymlabo'>バーチャルGYMLABO</h2>
          <div>
            <ul>
              <li>戸畑キャンパスに位置するGYMLABOの施設，イベント情報，貸出スペース予約状況などにWebサイト上からアクセス可能にすることでGYMLABOの活性化に貢献します</li>
            </ul>
          </div>
        </div>
        <div className='bg-white rounded-md p-10 mt-5'>
          <h2 id='virtual_campus'>バーチャルキャンパス</h2>
          <div>
            <ul>
              <li>飯塚キャンパスの施設情報を3Dマップ形式でWebサイトからアクセス可能にすることで，キャンパスに初めて訪問する方・遠方にお住まいで訪問が難しい方がキャンパスについて知るハードルを下げます</li>
              <li>
                <h3>VRChat</h3>
                <ul>
                  <li>VRChat上に作成した飯塚キャンパスのワールドを訪問することで，実際にキャンパスを訪れることなく疑似的にキャンパスの雰囲気を体験をすることができます</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <div className='bg-white rounded-md p-10 mt-5'>
          <h2 id='gymalabo_lab_introduction'>GYMLABO研究室紹介</h2>
          <div>
            <ul>
              <li>戸畑キャンパスに位置するGYMLABOに設置されているデジタルサイネージを用いて研究室の紹介をします</li>
            </ul>
          </div>
        </div>
        <div className='bg-white rounded-md p-10 mt-5'>
          <h2 id='nft'>NFT</h2>
          <div>
            <ul>
              <li>研究室カード，教授カード</li>
            </ul>
          </div>
        </div>
        <div className='bg-white rounded-md p-10 mt-5'>
          <h2 id='safety_and_health_vr_teaching_materials'>安全衛生VR教材</h2>
          <div>
            <ul>
              <li>使用時に注意が必要な器具の扱い方をVRを通して実践的に学ぶことで，誤った器具の使用法が原因の事故を防ぎます</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopPage
