'use client'
import { FC } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  //text :string
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
            <div className="flex flex-col items-center">
              <a href="/About" className="px-4 py-1">About</a>
              {location==='/About'
                ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
                : null
              }
            </div>
            <div className="flex flex-col items-center">
              <a href="/Product" className="px-4 py-1">Product</a>
              {location==='/Product'
                ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
                : null
              }
            </div>
            <div className="flex flex-col items-center">
              <a href="/Contact" className="px-4 py-1">Contact</a>
              {location==='/Contact'
                ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
                : null
              }
            </div>
            <div className="flex flex-col items-center">
              <a href="/Join_us" className="px-4 py-1">Join us</a>
              {location==='/Join_us'
                ? <svg viewBox='0 0 2 2' width='5px'><circle cx="1" cy="1" r="1"/></svg>
                : null
              }
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Menu
