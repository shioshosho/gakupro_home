import { FC } from 'react'

type Props = {
  test :string
}

const Test: FC<Props> = (props) => {
  return(
    <>
      <h1>{props.test}</h1> 
    </>
  )
}

export default Test
