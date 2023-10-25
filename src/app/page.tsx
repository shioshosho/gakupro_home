'use client'
import { Suspense, useRef, FC } from 'react'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { SpotLight, Sky, Preload, PerspectiveCamera, OrbitControls, useHelper, Html } from '@react-three/drei'
import Menu from '@/components/Menu'
import { WrappedScene } from '@/features/Canvas/Scene'
import Twinkle from '@/features/Canvas/Twinkle'
import { WrappedWireCloud } from '@/features/Canvas/WireCloud'
import Loader from '@/components/Loader'

const Light: FC = () => {
  const light1 = useRef()
  {/*
    *useHelper(light1, THREE.SpotLightHelper)
    */}
  return(
    <>
      <spotLight ref={light1} intensity={5} position={[0,4,0]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
    </>
  )
}

const Contents: FC = () => {
  const newMaterial = new THREE.MeshStandardMaterial({color: 0x3cb371})
  const sceneRef = useRef()
  useFrame(({ clock }) => {
    if (sceneRef.current.getGroup()){
      sceneRef.current.getGroup().position.y += Math.sin(0.8 * clock.getElapsedTime()) / 400
    }
    if (sceneRef.current.getMesh()){
      sceneRef.current.getMesh().rotation.y -= 0.003
    }
  })
  useThree(({ camera }) => {
    camera.position.set(0,0,5);
     {/*
       *console.log(camera.position)
       */}
  });
  return(
    <>
      <Twinkle />
      <Light />
      <SpotLight
        position={[0,4,0]}
        scale={[10,1,10]}
        color={'white'}
        distance={20}
        penumbra={20}
        castShadow
      />
      <Suspense fallback={<Loader />}>
        <WrappedScene ref={sceneRef} modelPath='/kyutech_map.glb'
        material={newMaterial}
        rotation={[1 * Math.PI / 9, 0, 0]}
        scale={0.02}
        position={[-0.5, 0.3, 0]}
        receiveShadow
        castShadow
        />
        <mesh position={[0, -2, 0]} rotation={[-1*Math.PI / 2, 0, 0]} receiveShadow scale={70}>
            <planeGeometry />
            <meshStandardMaterial side={THREE.DoubleSide} />
        </mesh>
      </Suspense>
    </>
  )
}

const TopPage: NextPage = () => {
  return (
    <>
      <Menu />
      <div className='{/*pt-[101px]*/} flex flex-col h-screen w-screen select-none z-0'>
        <div className='h-2/3 mt-[101px]'>
          <Canvas shadows>
          <Contents />
          <Preload all />
          {/*
          <PerspectiveCamera />
          <OrbitControls />
          */}
          {/*
            *<Html fullscreen className='flex flex-col text-white text-center justify-end'><div className='mb-36 text-8xl'>Hello,World!</div></Html>
            */}
          </Canvas>
        </div>
      </div>
      <div className='text-white text-center h-screen w-screen'>SNAP ME w/ snap-start</div>
      <div className='text-white text-center flex flex-col justify-center select-none h-screen w-screen italic'>Fin</div>
    </>
  )
}

export default TopPage
