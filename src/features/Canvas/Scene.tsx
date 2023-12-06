import { FC, forwardRef, ForwardRefRenderFunction, useImperativeHandle, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { MeshProps } from '@react-three/fiber'
import * as THREE from 'three'

type Props = MeshProps & {
  modelPath :string
  material :THREE.MeshStandardMaterial
  castShadow :any
  receiveShadow :any
  rotation :THREE.Euler | number[]
  scale :number
  position :THREE.Vector3 | number[]
}

const Scene: FC<Props> = (props, ref) => {
	const { modelPath, material, castShadow, receiveShadow, ...inputProps } = props
  const refG = useRef<THREE.Group>(null!)
  const refM = useRef<THREE.Mesh>(null!)
  useImperativeHandle(ref, () => ({
    getGroup: () => refG.current,
    getMesh: () => refM.current,
  }))
	const gltf = useGLTF(modelPath)
  gltf.scene.traverse((object) => {
    if ((object as THREE.Mesh).isMesh){
      if (material) (object as THREE.Mesh).material = material
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
