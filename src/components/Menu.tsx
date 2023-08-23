import { FC } from 'react'

type Props = {
  //text :string
}

const Menu: FC<Props> = () => {
  return(
    <>
      <div className="flex divide-x justify-center p-5">
        <a href="localhost:3000" className="px-4 py-1">Home</a>
        <a href="localhost:3000/About" className="px-4 py-1">About</a>
        <a href="localhost:3000/News" className="px-4 py-1">News</a>
        <a href="localhost:3000/Contact" className="px-4 py-1">Contact</a>
      </div>
    </>
  )
}

export default Menu
