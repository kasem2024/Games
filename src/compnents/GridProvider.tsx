import  { ReactNode } from 'react'


const GridProvider = ({children}:{children:ReactNode}) => {
  return (

    <div className='grid grid-cols-12 place-items-center  w-full space-y-3 '>
        {children}
    </div>
  )
}

export default GridProvider