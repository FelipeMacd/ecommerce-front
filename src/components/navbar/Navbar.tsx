import React from 'react'
import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold uppercase'>E-commerce</div>
            <div><img src="" alt="" /></div>

            <div className='flex gap-4'>
              <div><Link to='/login' className='hover:underline'>Login</Link></div>              
              <div><Link to='/home' className='hover:underline'>Home</Link></div>
              <div><Link to='/contato' className='hover:underline'>Contato</Link></div>
              <div><Link to='/sobrenos' className='hover:underline'>Sobre Nós</Link></div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar;