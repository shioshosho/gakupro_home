import { FC, forwardRef } from 'react'
import * as THREE from 'three'
import { WrappedScene } from '@/features/Canvas/Scene'

type Props = {
  rotation :THREE.Vector3
  scale :number
  position :THREE.Vector3
}

const WireCloud: FC<Props> = (props, ref) => {
	const { rotation, scale, position, ...inputProps } = props
  const cloudMaterial = new THREE.ShaderMaterial({
    vertexShader:
      `
      void main() {
        vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
        vec4 mvPosition =  viewMatrix * worldPosition;
        gl_Position = projectionMatrix * mvPosition;

      }
      `,
    fragmentShader:

      `

      void main() {
        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
      }
      `
  })
  return(
    <>
      <WrappedScene ref={ref} modelPath='/WireCloud.glb' 
        material={cloudMaterial}
        rotation={rotation}
        scale={scale}
        position={position}
        {...inputProps}
        castShadow
      /> 
    </>
  )
}

export default WireCloud

export const WrappedWireCloud = forwardRef(WireCloud)
