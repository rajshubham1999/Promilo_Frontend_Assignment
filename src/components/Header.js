import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='flex space-x-8 justify-between items-center py-2 px-2 '>
        <div className='flex space-x-4'>
            <div className='h-[1px] w-[100px] py-1px'>
                <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" />
            </div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
        </div>
        
    </div>
  )
}

export default Header