import React from 'react';
import { Link } from 'react-router-dom';


import { LuUser } from 'react-icons/lu';
import { FiShoppingBag } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';

function UserMenu({setShowResponsiveNav} : {setShowResponsiveNav : React.Dispatch<React.SetStateAction<boolean>>}) {
    return (
        <div className='userMenu absolute bottom-[-210px] left-[-180px] bg-gradient-to-br from-[#4e2a63] to-[#272b36] rounded-[10px] p-4 z-[100]'>
            <ul className='flex flex-col gap-3'>
                <li className='flex items-center gap-2 transition-opacity opacity-70 hover:opacity-100'
                onClick={() => setShowResponsiveNav(false)}>
                    <LuUser />
                    <Link to={"my_account"} >Manage My Account</Link>
                </li>
                <li className='flex items-center gap-2 transition-opacity opacity-70 hover:opacity-100'
                onClick={() => setShowResponsiveNav(false)}>
                    <FiShoppingBag />
                    <Link to={"cart"} >My Order</Link>
                </li>
                <li className='flex items-center gap-2 transition-opacity opacity-70 hover:opacity-100'
                onClick={() => setShowResponsiveNav(false)}>
                    <MdOutlineCancel />
                    <Link to={"cancellations"} >My Cancellations</Link>
                </li>
                <li className='flex items-center gap-2 transition-opacity opacity-70 hover:opacity-100'
                onClick={() => setShowResponsiveNav(false)}>
                    <FaRegStar />
                    <Link to={"my_reviews"} >My Reviews</Link>
                </li>
                <li className='flex items-center gap-2 transition-opacity opacity-70 hover:opacity-100'
                onClick={() => setShowResponsiveNav(false)}>
                    <CiLogout />
                    <Link to={"logout"} >Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserMenu;