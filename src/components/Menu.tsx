'use client'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  //text :string
}

const MenuElements :FC<{name:string}> = (props) =>{
  const {name} = props;
  const location = usePathname()
  return(
    <>   
      <div className="flex flex-col items-center">
        <a href={"/" + name} className="px-4 py-1">{name}</a>
        {location==="/" + name
          ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
          : null
        }
      </div>
    </>
  )
}

const Menu: FC<Props> = () => {
  const location = usePathname()
  return(
    <>
      <header className='fixed w-full z-50'>
        <div className='flex justify-center drop-shadow-glow duration-150'>
          <div className="flex flex-none divide-x divide-black justify-center m-6 p-2  bg-white bg-clip-border rounded-md">
            <div className="flex flex-col items-center">
              <a href="/" className="px-4 py-1">Home</a>
              {location==='/'
                ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
                : null
              }
            </div>
            <MenuElements name='About' />
            <MenuElements name='Product' />
            <MenuElements name='Contact' />
          </div>
        </div>
      </header>
    </>
  )
}

export default Menu
