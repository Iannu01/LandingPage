import React from 'react'
import { FaBars } from "react-icons/fa";
const Header = () => {
    return (
        <div className="flex justify-between">
            <div className="flex items-center justify-center gap-2">
                <img src="./Assets/Logo.svg" alt="Logo" />
                <button className="bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-2.5 rounded-2xl">Hostarr is Hiring</button>
            </div>
            <ul className='hidden  lg:flex justify-between font-lato text-gray-400 items-center gap-6'>
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find My Domain</a></li>
                <li><a href="#">My Hostarr</a></li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a href="https://github.com/Iannu01"target={'_blank'} className='text-gray-400'>Sign In</a>
                <button className='rounded-md px-4 py-3 text-white bg-blue-400 hover:bg-blue-600'>Join Waitlist</button>
            </div>
            <div className=' lg:hidden'>
                <FaBars />
            </div>
        </div>
    )
}
export default Header