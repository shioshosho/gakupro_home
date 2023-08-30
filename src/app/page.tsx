'use client'
import { Suspense, useRef, FC } from 'react'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { SpotLight, Sky, Preload, PerspectiveCamera, OrbitControls, useHelper } from '@react-three/drei'
import Menu from '@/components/Menu'
import Scene, { WrappedScene } from '@/features/Canvas/Scene'
import Twinkle from '@/features/Canvas/Twinkle'
import LowPolyCloud from '@/features/Canvas/LowPolyCloud'
import Loader from '@/components/Loader'

const Light: FC = () => {
  const light1 = useRef()
  useHelper(light1, THREE.SpotLightHelper)
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
    if (sceneRef.current){
      sceneRef.current.rotation.y -= 0.003
      sceneRef.current.position.y += Math.sin(0.8 * clock.getElapsedTime()) / 400
    }
  })
  return(
    <>
      {/*
        *<color attach="background" args={['#050505']} />
        */}
      {/*
        *<ambientLight intensity={0.01}/>
        */}
      {/*
        *<directionalLight
        *      position={[5, 5, 5]}
        *      intensity={1} // 光の強さ
        *      shadow-mapSize-width={2048} // 描画精度
        *      shadow-mapSize-height={2048}
        *      castShadow
        *  />
        */}
      <LowPolyCloud />
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
        {/*
          <Sky
          sunPosition={[0, 0, -1]}
          turbidity={1.3}
          rayleigh={0.1}
          mieCoefficient={0.141}
          mieDirectionalG={0.958}
          inclination={0.5}
          azimuth={0.5}
          />
          */}
      </Suspense>
    </>
  )
}

const TopPage: NextPage = () => {
  return (
    <>
      <Menu />
      <div className='snap-start {/*pt-[101px]*/} flex flex-col h-screen w-screen select-none text-white text-center z-0'>
        <Canvas shadows>
          <Contents />
          <Preload all />
          <PerspectiveCamera />
          <OrbitControls />
        </Canvas>
      </div>
      <div className='snap-start text-white text-center h-screen w-screen'>SNAP ME w/ snap-start</div>
      <div className='snap-start text-white text-center flex flex-col justify-center select-none h-screen w-screen italic'>Fin</div>
    </>
  )
}

export default TopPage
