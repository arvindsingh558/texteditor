import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar() {
    let Links=[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Contact",link:"/contact"},
    ]

    let [open,setOpen]=useState(false) 


    return (
        <>
            <div className='shadow-md h-[77px] z-[4] w-full fixed top-0 left-0 bg-white'>
                <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                    <div className=' font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
                        <span className='text-3xl text-indigo-600 mr-1 pt-2'>
                            <ion-icon name="document-text-outline"></ion-icon>
                        </span>
                        TextEditor
                    </div>
                    <div onClick={()=>setOpen(!open)} className=' text-3xl z-[5] absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open?"close-outline":"menu-outline"}></ion-icon>
                    </div>
                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-[3] z-[2] left-0 w-full md:w-auto md:pl-0 pl-9 ${open?"top-20 opacity-100":"top-[-490px]"} md:opacity-100 opacity-0`}>
                        {
                            Links.map((Link)=>(
                                <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7 '>
                                    <NavLink to={Link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{Link.name}</NavLink>
                                </li>
                            ))
                        }
                    <Button>
                        Read More
                    </Button>
                    </ul>
                    
                </div>
            </div>
        </>
    )
}

export default Navbar
