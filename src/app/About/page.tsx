'use client'
import React, { VFC } from 'react';
import { NextPage } from 'next'
import { DoubleSide } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

const ThreeDemo: NextPage = () => {
    return (
        <Canvas camera={{ fov: 50, position: [0, 3, 10] }} shadows>
            <Contents />
        </Canvas>
    )
}

const Contents: VFC = () => {
    return (
        <>
            {/* control */}
            <OrbitControls />

            {/* light */}
            <directionalLight
                position={[5, 5, 5]}
                intensity={1} // 光の強さ
                shadow-mapSize-width={2048} // 描画精度
                shadow-mapSize-height={2048}
                castShadow
            />

            {/* box 1 */}
            <mesh position={[0, 2, 0]} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color="blue" />
            </mesh>

            {/* box 2 */}
            <mesh position={[1, 3, 2]} scale={0.5} castShadow receiveShadow>

                <boxGeometry args={[1, 1, 1]} />
                <meshPhongMaterial color="red" />
            </mesh>

            {/* floor */}
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[10, 10]} />

                <meshStandardMaterial color="#E5E5E5" side={DoubleSide} />
            </mesh>
        </>
    )
}

export default ThreeDemo
