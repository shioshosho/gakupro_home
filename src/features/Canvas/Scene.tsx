import { FC } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  modelPath :string
  material :object
  castShadow :any
  receiveShadow :any
}

const Scene: FC<Props> = (props) => {
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
			<mesh {...inputProps}>
				<primitive object={gltf.scene.clone()} />
			</mesh>
    </>
  )
}

export default Scene
