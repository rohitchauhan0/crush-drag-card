import Image from 'next/image'
import React from 'react'

const New = () => {
  return (
    <div className=' h-screen w-screen'>
        <Image src="/giphy.gif" width={500} height={500} className='h-full w-full' />
    </div>
  )
}

export default New