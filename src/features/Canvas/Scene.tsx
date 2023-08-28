import { FC, forwardRef } from 'react'
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
			<mesh ref={ref} {...inputProps}>
				<primitive object={gltf.scene.clone()} />
			</mesh>
    </>
  )
}

export default Scene

export const WrappedScene = forwardRef(Scene)
