import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";

export default function Search({ setSearchOpen }) {

    const [searchItem, setSearchItem] = useState('')

    const closeButton = () => {
        setSearchOpen(false)
        setSearchItem('')
    }

    const searchButton = (e) => {
        alert(searchItem)
    }

    return (
        <div className='flex rounded-lg overflow-hidden bg-main/20 '>
            <input
                placeholder='Search here...'
                type="text"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
                className='w-full outline-0 p-2'
            />
            <button
                onClick={closeButton}
                className='flex items-center justify-center p-2 text-text'>
                <MdClose />
            </button>
            <button
                onClick={searchButton}
                className='bg-main flex items-center justify-center px-6 p-2 text-bg'>
                <FaSearch />
            </button>
        </div>
    )
}
