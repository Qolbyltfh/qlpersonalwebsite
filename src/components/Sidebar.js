import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { BsArrowLeftCircle } from 'react-icons/bs'
import { FiHome, FiArchive, FiTrello, FiUser, FiMap } from "react-icons/fi";
import HamburgerButton from './HamburgerMenuButton/HamburgerButton'
import Logo from '../assets/images/logo-ql-colour-removebg-preview.png';
const Sidebar = () => {
  const [open, setOpen] = useState(true)
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()

  const Menus = [
    { title: 'Home', path: '/', src: <FiHome /> },
    { title: 'About', path: '/about', src: <FiArchive /> },
    { title: 'Resume', path: '/resume', src: <FiMap /> },
    { title: 'Projects', path: '/projects', src: <FiTrello /> },
    { title: 'Contact', path: '/contact', src: <FiUser />, },
  ]

  return (
    <>
      <div
        className={`${
          open ? 'w-60' : 'w-fit'
        } hidden sm:block relative h-screen duration-300 bg-gray-100 border-r border-[#EBB88C] dark:border-[#EBB88C] p-5 dark:bg-black`}
      >
        <BsArrowLeftCircle
          className={`${
            !open && 'rotate-180'
          } absolute text-3xl bg-white fill-[#EBB88C]  rounded-full cursor-pointer top-9 -right-4 dark:fill-[#EBB88C] dark:bg-black`}
          onClick={() => setOpen(!open)}
        />
        <Link to='/'>
          <div className={`flex ${open && 'gap-x-4'} items-center justify-center`}>
          <img src={Logo} alt='' className='pl-2 w-24' />
          </div>
        </Link>

        <ul className='pt-6'>
          {Menus.map((menu, index) => (
            <Link to={menu.path} key={index}>
              <li
                className={`flex items-center gap-x-6 p-3 text-base font-normal rounded-lg cursor-pointer dark:text-white hover:bg-gray-200 dark:hover:bg-[#EBB88C]
                        ${menu.gap ? 'mt-9' : 'mt-2'} ${open ? '' : 'justify-center '} ${location.pathname === menu.path &&'bg-[#EBB88C] dark:bg-[#EBB88C]  '}`}
              >
                <span className='text-2xl'>{menu.src}</span>
                <span
                  className={`${!open && 'hidden'} origin-left duration-300 hover:block`}
                >
                  {menu.title}
                </span>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      {/* Mobile Menu */}
      <div className="pt-3">
        <HamburgerButton
          setMobileMenu={setMobileMenu}
          mobileMenu={mobileMenu}
        />
      </div>
      <div className="sm:hidden">
        <div
          className={`${
            mobileMenu ? 'flex' : 'hidden'
          } absolute z-50 flex-col items-center self-end py-8 mt-16 space-y-6 font-bold sm:w-auto left-6 right-6 dark:text-white  bg-gray-50 dark:bg-black dark:border-[#EBB88C] border drop-shadow md rounded-xl`}
        >
          {Menus.map((menu, index) => (
            <Link
              to={menu.path}
              key={index}
              onClick={() => setMobileMenu(false)}
            >
              <span
                className={` ${
                  location.pathname === menu.path &&
                  'bg-[#EBB88C] dark:bg-[#EBB88C]'
                } p-2 rounded-xl hover:bg-gray-200 dark:hover:bg-[#EBB88C]`}
              >
                {menu.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Sidebar
