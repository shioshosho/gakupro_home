'use client'
import { Suspense, useRef, FC } from 'react'
import { NextPage } from 'next'
import * as THREE from 'three'
import { Canvas, useFrame, useThree} from '@react-three/fiber'
import { SpotLight, Sky, Preload, PerspectiveCamera, OrbitControls, useHelper, Text } from '@react-three/drei'
import Menu from '@/components/Menu'
import HomeProductButtons from '@/components/HomeProductButtons'
import Scene from '@/features/Canvas/Scene'
import Twinkle from '@/features/Canvas/Twinkle'
import Loader from '@/components/Loader'

const Light: FC = () => {
  const light1 = useRef()
  {/*
    *useHelper(light1, THREE.SpotLightHelper)
    */}
  return(
    <>
      <spotLight intensity={5} position={[0,4,0]} shadow-mapSize-width={2048} shadow-mapSize-height={2048} castShadow />
    </>
  )
}

const Contents: FC = () => {
  const newMaterial = new THREE.MeshStandardMaterial({color: 0x3cb371})
  const sceneRef = useRef<any>(null!)
  const { viewport } = useThree()
  useFrame(({ clock }) => {
    if (sceneRef.current && sceneRef.current.getGroup()){
      sceneRef.current.getGroup().position.y += Math.sin(0.8 * clock.getElapsedTime()) / 400
    }
    if (sceneRef.current && sceneRef.current.getMesh()){
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
        //scale={[10,1,10]}
        scale={[viewport.width/2 + 3,1,10]}
        color={'white'}
        distance={20}
        penumbra={20}
        castShadow
      />
      <Suspense fallback={<Loader />}>
        <Scene
        ref={sceneRef}
        modelPath='/kyutech_map.glb'
        material={newMaterial}
        rotation={[1 * Math.PI / 9, 0, 0]}
        //scale={0.02}
        scale={viewport.width / 900}
        //position={[-0.5, 0.3, 0]}
        position={[0, 0.3, 0]}
        receiveShadow
        castShadow
        />
        <Text position={[0,2.5,0]} scale={[viewport.width/20,viewport.width/20,viewport.width/20]} color='white'>
          Write Something Here !
        </Text>
        <mesh
        //position={[0, -2, 0]}
        position={[0,-viewport.width/10,0]}
        rotation={[-1*Math.PI / 2, 0, 0]}
        receiveShadow scale={70}>
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
      <div className='{/*pt-[101px]*/} flex flex-col w-screen select-none'>
        <div className='md:aspect-[12/5] 2xl:aspect-[12/3.5] mt-[101px]'>
          <Canvas shadows>
            <Contents />
            <Preload all />
            {/*
            <PerspectiveCamera />
            <OrbitControls />
            */}
          </Canvas>
        </div>
      </div>
      <div className='text-white text-center my-8 text-2xl max-[768px]:my-6 max-[768px]:text-sm '>
        メタプラスは令和5年度に採択された<br className='hidden max-[768px]:block '/>
        九州工業大学・明専会学生プロジェクトです<br/>
        本プロジェクトでは以下に示すようなプロダクトに<br className='hidden max-[768px]:block '/>
        取り組んでいます
      </div>
      <div className='mb-6'><HomeProductButtons /></div>
    </>
  )
}

export default TopPage
