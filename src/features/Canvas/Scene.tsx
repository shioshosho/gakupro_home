import { FC } from 'react'
import { useGLTF } from '@react-three/drei'

type Props = {
  modelPath :string
}

const Scene: FC<Props> = (props) => {
	const { modelPath, ...inputProps } = props
	const gltf = useGLTF(modelPath)
  return(
    <>
			<mesh>
				<primitive object={gltf.scene.clone()} {...inputProps} />
			</mesh>
    </>
  )
}

export default Scene
