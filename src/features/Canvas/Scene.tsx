import { FC, forwardRef, useImperativeHandle, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

type Props = {
  modelPath :string
  material :object
  castShadow :any
  receiveShadow :any
}

const Scene: FC<Props> = (props, ref) => {
	const { modelPath, material, castShadow, receiveShadow, ...inputProps } = props
  const refG = useRef()
  const refM = useRef()
  useImperativeHandle(ref, () => ({
    getGroup: () => refG.current,
    getMesh: () => refM.current,
  }))
	const gltf = useGLTF(modelPath)
    gltf.scene.traverse((object) => {
      if (object.isMesh){
        if (material) object.material = material
        if (castShadow) object.castShadow=true
        if (receiveShadow) object.receiveShadow=true
      }
    })
  return(
    <>
      <group ref={refG}>
        <mesh ref={refM} {...inputProps}>
          <primitive object={gltf.scene.clone()} />
        </mesh>
      </group>
    </>
  )
}

export default Scene

export const WrappedScene = forwardRef(Scene)
