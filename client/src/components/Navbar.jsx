import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

import { RiCertificate2Line, RiMenu3Fill, RiAdvertisementLine, RiMessengerLine } from "react-icons/ri";
import { FaHome, FaRegBell, FaRegUser, FaSchool, FaSearch, FaTasks } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdCastConnected, MdClose } from "react-icons/md";
import { GrNotes } from "react-icons/gr";
import { BsSave2 } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TbUsersGroup } from "react-icons/tb";


import Search from './Search';
import { useAuthUser } from '../contexts/authContext';


export default function Navbar() {


    const user = useAuthUser()

    const navLinks = [
        //for the bottom navigation bar
        { icon: <FaHome />, name: "home", link: "/" },
        { icon: <TbUsersGroup />, name: "connections", link: "/connections" },
        { icon: <FaChalkboardTeacher />, name: "courses", link: "/courses" },
        { icon: <FaSchool />, name: "institute", link: "/institute" },
        { icon: <MdCastConnected />, name: "live-class", link: "/live-class" },
        { icon: <GrNotes />, name: "notes", link: "/notes" },


        //for the top navigation bar
        { icon: <FaRegBell />, name: "notifications", link: "/notifications" },
        { icon: <RiMessengerLine />, name: "messages", link: "/messages" },
        { icon: <FaRegUser />, name: "profile", link: user.username },


        //other navigations, and all the other links will be in the side navigation
        { icon: <FaTasks />, name: "tasks", link: "/tasks" },
        { icon: <BsSave2 />, name: "saved videos", link: "/saved-videos" },
        { icon: <RiCertificate2Line />, name: "certificates", link: "/certificates" },
        { icon: <RiAdvertisementLine />, name: "Advertising", link: "/advertising" },
        { icon: <IoSettingsOutline />, name: "settings", link: "/settings" },
    ]



    const location = useLocation()
    const navigate = useNavigate()


    const [menuOpen, setMenuOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)


    const handleMenuOpen = () => {
        setMenuOpen(!menuOpen)
        document.body.style.overflowy = document.body.style.overflowy === "hidden" ? "scroll" : "hidden"
    }

    return (
        <header
            className='
            sticky top-0 p-2 shadow bg-bg
            md:px-4
        '>
            <div
                onClick={handleMenuOpen}
                className={`
                    fixed top-0 bottom-0 left-0 right-0 bg-subtext/20 
                    transition-opacity duration-500
                    ${menuOpen ? 'z-1 opacity-100 w-full' : 'w-0 opacity-0'}
                `} />
            <nav className='flex flex-wrap justify-between items-center'>
                <div className='flex gap-4 items-center text-2xl text-main'>
                    <RiMenu3Fill
                        onClick={handleMenuOpen} />
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className='w-20'
                    />
                </div>
                {/* bottom navigation */}
                <div
                    className='
                    flex items-center justify-center bg-bg
                    fixed bottom-0 left-0 right-0 p-3 shadow-[0_-1px_2px_rgba(0,0,0,0.15)]
                    md:relative md:w-auto md:p-0 md:shadow-none
                    '>
                    <ul
                        className='
                        flex gap-8 items-center
                        '>
                        {/* Render navLinks or top nav links here */}
                        {navLinks.slice(0, 6).map((item, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(item.link)}
                                className={`
                                capitalize flex items-center gap-1 text-2xl
                                ${location.pathname === item.link ? 'text-main' : 'text-text hover:text-subtext'}
                                `}>
                                {item.icon}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* top navigation */}
                <div
                    className='flex items-center justify-center gap-4'>
                    <div
                        className={`
                    w-full
                    hidden sm:block
                            ${searchOpen ? 'block' : 'hidden'}
                    `}>
                        <Search setSearchOpen={setSearchOpen} />
                    </div>
                    <div
                        className={`
                            md:hidden
                            ${searchOpen ? 'hidden' : 'block'}
                        `}>
                        <FaSearch
                            onClick={() => setSearchOpen(!searchOpen)}
                            className='text-xl text-text hover:text-subtext' />
                    </div>

                    <ul
                        className='
                        flex gap-4 items-center 
                        '>
                        {/* Render navLinks or top nav links here */}
                        {navLinks.slice(6, 9).map((item, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(item.link)}
                                className={`
                                capitalize flex items-center gap-1 text-2xl
                                ${location.pathname === item.link ? 'text-main' : 'text-text hover:text-subtext'}
                                `}>
                                {
                                    item.name === 'profile'
                                        ?
                                        user.profileImg
                                            ?
                                            <div
                                                className='border-2 border-main p-0.5 rounded'>
                                                <img
                                                    className='max-h-6 max-w-6 rounded'
                                                    src={user.profileImg}
                                                    alt="" />
                                            </div>
                                            :
                                            item.icon
                                        :
                                        item.icon
                                }
                            </li>
                        ))}
                    </ul>
                </div>
                {/* side navigation */}
                <div
                    onClick={handleMenuOpen}
                    className={`
                    absolute top-0 h-dvh left-0 bg-card z-2
                    shadow-[0_0_2px_2px_rgba(0,0,0,0.15)] overflow-hidden
                    transition-max-w duration-200
                    ${menuOpen ? 'max-w-60' : 'max-w-0'}
                    `}>
                    <div className='text-xl flex gap-4 py-8 justify-between p-2'>
                        <img
                            src="/logo.png"
                            alt="Logo"
                            className='w-20'
                        />
                        <MdClose
                            onClick={handleMenuOpen} />
                    </div>
                    <ul
                        className='flex flex-col mt-4 h-[calc(100%-110px)] overflow-y-auto'>
                        {navLinks.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => navigate(item.link)}
                                className={`
                                capitalize flex items-center gap-2 font-semibold py-4 px-6 pr-20 border-b border-border
                                ${location.pathname === item.link ? 'text-main bg-main/20' : 'text-text hover:text-subtext'}
                                `}>
                                <span>{item.icon}</span>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    className={`
                    w-full overflow-hidden
                    sm:hidden
                    ${searchOpen ? 'max-h-20 pt-4 ' : 'max-h-0'}
                    transition-max-h duration-200
                    `}>
                    <Search setSearchOpen={setSearchOpen} />
                </div>
            </nav>
        </header>
    )
}