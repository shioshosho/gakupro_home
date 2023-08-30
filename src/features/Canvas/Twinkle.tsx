import { FC } from 'react'
import { Stars } from '@react-three/drei'

const Twinkle: FC = () => {
  return(
    <>
      <Stars 
          radius={200}
          depth={500}
          count={3000}
          factor={10}
          saturation={0}
          fade={true}
          speed={1}
        />
        <Stars 
          radius={200}
          depth={400}
          count={1000}
          factor={10}
          saturation={9}
          fade={true}
          speed={3}
        />
        <Stars 
          radius={200}
          depth={400}
          count={1000}
          factor={10}
          saturation={9}
          fade={true}
          speed={4}
        />
        <Stars 
          radius={200}
          depth={500}
          count={500}
          factor={10}
          saturation={9}
          fade={true}
          speed={120}
        />
    </>
  )
}

export default Twinkle
