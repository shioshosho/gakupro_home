import { FC } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  modelPath :string
  material :object
}

const Scene: FC<Props> = (props) => {
	const { modelPath, material, ...inputProps } = props
	const gltf = useGLTF(modelPath)
  if (material){
    gltf.scene.traverse((object) => {
      if (object.isMesh) object.material = material
    })
  }
  return(
    <>
			<mesh>
				<primitive object={gltf.scene.clone()} {...inputProps} />
			</mesh>
    </>
  )
}

export default Scene
