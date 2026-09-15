import React from 'react'
import { FaRegImage, FaVideo } from "react-icons/fa";

export default function AddContent() {
    const filesType = [
        { name: 'image', icon: <FaRegImage /> },
        { name: 'video', icon: <FaVideo /> },
    ]
    return (
        <section className='container mx-auto my-2'>
            <div className='p-4 bg-card rounded-lg flex flex-col gap-4 max-w-200'>
                <input
                    type="text"
                    placeholder='Add title here'
                    className='font-medium text-subtext capitalize border border-border w-full rounded-lg p-2 outline-main/20'
                />
                <textarea
                    placeholder='Add title here'
                    className='font-medium text-subtext capitalize border border-border w-full rounded-lg p-2 outline-main/20'
                />
                <div>
                    <ul className='flex flex-wrap gap-2'>
                        {filesType.map((item, index) => (
                            <li
                                className='font-medium text-subtext capitalize border border-border rounded-lg p-2 flex gap-2 items-center'>
                                {item.icon}{item.name}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className='font-bold text-bg capitalize border border-border bg-main/80 w-full rounded-lg p-2'>Post</button>
            </div>
        </section>
    )
}
