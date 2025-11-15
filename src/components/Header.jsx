import React from 'react'

function Header({title,subtitle}) {
  return (
    <div className='text-center pt-10 pb-5'>
      <p className='text-gray-500 mb-5 uppercase'>{title}</p>
      <h2 className='md:text-5xl text-3xl'>{subtitle}</h2>
    </div>
  )
}

export default Header
