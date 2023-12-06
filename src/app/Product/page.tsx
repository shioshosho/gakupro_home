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
      <div className='pt-[101px] text-white text-center'>
        <p>Under Construction!</p>
      </div>
    </>
  )
}

export default TopPage
