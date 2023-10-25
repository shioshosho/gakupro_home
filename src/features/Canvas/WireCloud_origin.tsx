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
    varying vec2 vUv;
    void main() {
      vUv = uv;

      vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
      vec4 mvPosition =  viewMatrix * worldPosition;
      gl_Position = projectionMatrix * mvPosition;
    }
    `,
    fragmentShader:
      `
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(1.0, vUv.x, 0.0, mix(1.0,0.0,vUv.y));
    }
    `,
    transparent: true
  })
  return(
    <>
      <WrappedScene ref={ref} modelPath='/WireCloud.glb' 
        material={cloudMaterial}
        rotation={rotation}
        scale={scale}
        position={position}
        {...inputProps}
      /> 
    </>
  )
}

export default WireCloud

export const WrappedWireCloud = forwardRef(WireCloud)
