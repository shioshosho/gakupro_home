'use client'
import { FC } from 'react'
import { Html, useProgress } from '@react-three/drei'

const Loader: FC = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

export default Loader
