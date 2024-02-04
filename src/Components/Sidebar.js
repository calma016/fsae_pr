import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";





function Sidebar() {
  const [isShowingSidebar, setIsShowingSidebar] = useState(true)

  function toggleSidebar(){
    setIsShowingSidebar(!isShowingSidebar)
  }

  return (
    <div class="flex relative" >
      {/* Sidebar */}
       <div class="w-72 bg-purple-900 h-screen text-white leading-loose max-h-fit px-10 lg:hidden " >
          <div>
            <div className='flex items-center justify-between '>
              <div>Logo</div>
              <div >
                {isShowingSidebar ? 
                <MdOutlineClose onClick={toggleSidebar} className='cursor-pointer'/>:
                <AiOutlineMenu onClick={toggleSidebar} className='cursor-pointer'/>
                }
              </div>
            </div>
          </div>
                <div>
                    <ul>
                        <li className='flex items-center gap-2 m-3 p-2'> <AiOutlineHome /> Home</li>
                        <li className='flex items-center gap-2 m-2 p-2'> < MdOutlineShoppingCart /> Purchases</li>
                        <li className='flex items-center gap-2 m-2 p-2'> <FaSackDollar /> Budget</li>
                        <li className='flex items-center gap-2 m-2 p-2'> <MdOutlineSettings /> Settings</li>
                    </ul>
                </div>
       </div>

       {/* Navbar */}
       <div className=' absolute top-0 left-0 right-0 w-100  bg-purple-900 text-white hidden lg:flex h-[50px] items-center justify-between px-4'>
          <div><h1>logo</h1></div>
          <div>
            <ul className='flex items-center gap-4'>
              <li className='cursor-pointer'><a>Home</a></li>
              <li className='cursor-pointer'><a>Purchases</a></li>
              <li className='cursor-pointer'><a>budget</a></li>
              <li className='cursor-pointer'><a>Settings</a></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar