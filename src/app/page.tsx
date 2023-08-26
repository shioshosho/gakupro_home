'use client'
import { Suspense } from 'react'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { Sky, Preload } from '@react-three/drei'
import Menu from '@/components/Menu'
import Scene from '@/features/Canvas/Scene'
import Loader from '@/components/Loader'

const TopPage: NextPage = () => {
  const newMaterial = new THREE.MeshStandardMaterial({color: 0x3cb371})
  return (
    <>
      <Menu />
      <div className='snap-start pt-[101px] flex flex-col h-screen w-screen select-none text-white text-center z-0'>
        <p>START FROM HERE</p>
        <Canvas>
          {/*
            *<color attach="background" args={['#050505']} />
            */}
          <ambientLight intensity={0.01}/>
          <directionalLight />
          <Suspense fallback={<Loader />}>
            <Scene modelPath='/test.glb' material={newMaterial} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <div className='snap-start text-white text-center h-screen w-screen'>SNAP ME w/ snap-start</div>
      <div className='snap-start text-white text-center flex flex-col justify-center select-none h-screen w-screen italic'>Fin</div>
    </>
  )
}

export default TopPage
