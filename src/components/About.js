import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../images/pro.png";

function About() {
  return (
    <div>
      <div className='flex space-x-8 justify-between items-center py-2 px-2 '>
        <div className='flex space-x-4'>
          <div className='h-[1px] w-[100px] py-1px'>
            <img src={img}/>
          </div>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/About">About</NavLink>
        </div>

      </div>
      <div className='py-10 px-10'>
        <div>This is a About Page</div>
        <h3>Build Website as the Mention Website flow</h3>
        <h3>There was no Such Problem While Building this Website</h3>
        <h3>Facing Problem because your given credentials were not working </h3>
        <h3>Not added authorization because it needed JWT and for that used database and localStorage So i am keep this website Simple</h3>
        <h3>This website Fullfill your requirements</h3>
      </div>



    </div>

  )
}

export default About