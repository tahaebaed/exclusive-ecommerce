// import React from 'react';
import { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { IoIosHeartEmpty } from 'react-icons/io';
import { LuUser } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import UserMenu from './UserMenu';

function Header() {

    // state to control responsive nav list
    const [showResponsiveNav , setShowResponsiveNav] = useState<boolean>(false);

    // userMenu-----
    const [showUserMenu , setShowUserMenu] = useState<boolean>(false);

    return (
        <>
            <header className='border-b-2 border-solid border-gray-100 sticky top-0 z-[1000] bg-white'>
                {/* top header part */}
                <div className="top">
                    <div className='text-center flex items-center justify-center bg-black text-white p-3 text-sm'>
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </div>
                </div>


                {/* bottom header part */}
                <div className="bottom-header-part flex items-center justify-around pt-8 pb-5">
                    {/* logo */}
                    <div className="text-2xl font-bold tracking-wide">Exclusive</div>

                    {/* nav links */}
                    <nav>
                        <ul className='flex items-center justify-between gap-6 font-medium'>
                            <li >
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={'/'}>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={'contact'}>
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={"about"}>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]' to={"signup"}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* search-cart-wishlist-box */}
                    <div className="search-cart-wishlist-box flex items-center justify-between gap-5">
                        <div className="px-4 rounded-md flex items-center justify-between text-center w-60 gap-4 bg-gray-100 hover:shadow-custom-black transition-all ease-in-out duration-500">
                            <input
                                id='search'
                                type="text"
                                className="placeholder-custom w-52 text-inherit bg-gray-100 border-none text-gray-600 py-[0.7rem] -mr-8 outline-none"
                                placeholder="What are you looking for?"
                            />
                            <div className="bg-gray-100 mt-[0.1em]">
                                <label htmlFor="search" className='hover:cursor-pointer'>
                                    <svg
                                    className="h-[1.1em] w-[1.1em] fill-gray-950"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    >
                                    <g>
                                        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                    </g>
                                    </svg>
                                </label>
                            </div>
                        </div>

                        {/* user-box */}
                        <div className="flex items-center gap-5">
                            <div className="transition-colors duration-300 hover:text-black cursor-pointer relative">
                                <IoIosHeartEmpty size={25} className='opacity-60 transition-all hover:opacity-100 cursor-pointer' />
                                <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                            </div>

                            <div className="transition-colors duration-300 hover:text-black cursor-pointer relative">
                                <CiShoppingCart size={25} className='opacity-60 transition-all hover:opacity-100 cursor-pointer' />
                                <span className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-[18px] h-[18px] text-white bg-[#dd3842] rounded-full font-semibold text-[10px] leading-[12px]">0</span>
                            </div>

                            {/* user icon */}
                            <div className="select-none relative rounded-full bg-[#db4444] p-[0.4rem] cursor-pointer text-white transition-colors duration-300 hover:bg-[#9c2d2d]"
                            onClick={() => setShowUserMenu(showUserMenu ? false : true)}>
                                <LuUser size={20}/>
                                {/* userMenu */}
                                {showUserMenu && <UserMenu setShowResponsiveNav = {setShowResponsiveNav}/>}
                            </div>
                        </div>
                    </div>


                    {/* bar-btn-list */}
                    <div className="bar-btn-list hidden">
                        <div className="flex justify-center items-center">
                            <input checked= {showResponsiveNav} 
                            onChange={
                                e => setShowResponsiveNav(e.target.checked)
                            } 
                            id="checkbox" type="checkbox" className="hidden show-list-btn" />
                            <label
                                className="toggle relative w-8 cursor-pointer m-auto block h-[calc(2px*3+11px*2)]"
                                htmlFor="checkbox"
                            >
                                <div className="bar bar--top absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s)*0.6] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                                <div className="bar bar--middle absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none delay-[calc(0s+0.35s*0.3)] duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                                <div className="bar bar--bottom absolute left-0 right-0 h-[2px] rounded-[12px] bg-black transition-none duration-[0.35s] ease-[cubic-bezier(.5,-0.35,.35,1.5)]"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </header>

            {/* responsive nav-container */}
            <div className={`${showResponsiveNav ? 'translate-x-0 ' : ""}responsive-nav-container p-12 transition-all fixed h-[calc(100vh-130px)] z-[100] top-[130px] w-full bg-[#1b1b1b] transform -translate-x-full`}>
                <div className="responsive-nav flex flex-col text-white h-[100%]">
                    {/* useIcon */}
                    <div className="select-none w-fit relative rounded-full bg-[#db4444] p-[0.4rem] cursor-pointer text-white transition-colors duration-300 hover:bg-[#9c2d2d]"
                    onClick={() => setShowUserMenu(showUserMenu ? false : true)}>
                        <LuUser size={20}/>
                        {/* userMenu */}
                        {showUserMenu && <UserMenu setShowResponsiveNav = {setShowResponsiveNav}/>}
                    </div>

                    {/* nav links */}
                    <nav className='flex-1 flex items-center justify-center'>
                        <ul className='flex flex-col items-center justify-between gap-10 font-medium text-lg'>
                            <li onClick={() => setShowResponsiveNav(false)}>
                                <NavLink to={'/'} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Home
                                </NavLink>
                            </li>
                            <li onClick={() => setShowResponsiveNav(false)}>
                                <NavLink to={'contact'} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Contact
                                </NavLink>
                            </li>
                            <li onClick={() => setShowResponsiveNav(false)}>
                                <NavLink to={"about"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    About
                                </NavLink>
                            </li>
                            <li onClick={() => setShowResponsiveNav(false)}>
                                <NavLink to={"signup"} className='relative after:transition-all after:absolute after:left-[50%] after:translate-x-[-50%] after:bottom-[-3px] after:w-0 after:h-0 after:bg-gray-900 hover:after:w-[100%] hover:after:h-[1.5px]'>
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* search box */}
                    <div className="flex items-center justify-center w-full">
                        <div className="w-full">
                            <div className="flex w-full">
                                <div className="flex items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-8">
                                    <svg viewBox="0 0 20 20" aria-hidden="true" className="pointer-events-none absolute w-5 fill-gray-500 transition">
                                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                                    </svg>
                                </div>
                                <input type="text" className="w-[100%] bg-white pl-2 pr-6 text-[20px] font-semibold outline-0" placeholder="Search For Products..." />
                                <input type="button" value="Search" className="bg-blue-500 p-2 rounded-tr-lg rounded-br-lg text-white font-semibold hover:bg-blue-800 transition-colors" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Header;