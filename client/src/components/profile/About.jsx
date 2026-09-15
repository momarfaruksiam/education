import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function About({ about }) {
    const [active, setActive] = useState(about[0].title)



    const activeAbout = about.find(item => item.title === active)

    const [sectionOpen, setSectionOpen] = useState(true)

    return (
        <div className='w-full'>
            <div className='flex flex-col gap-2 border-2 border-border rounded-lg my-2 select-none'>
                <div
                    onClick={() => setSectionOpen(!sectionOpen)}
                    className='flex justify-between text-xl font-bold p-2'>
                    <h1>About</h1>
                    <button >
                        {sectionOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    </button>
                </div>

                <div className={`
                    flex flex-col md:flex-row gap-2 
                    ${sectionOpen && 'hidden'}
                    `}>
                    <div className='md:w-1/3'>
                        <ul
                            className='
                            flex md:flex-col overflow-x-auto border-b-2 border-subtext/50
                            md:border-0
                            '>
                            {about.map((item) => (
                                <li
                                    key={item.title}
                                    onClick={() => setActive(item.title)}
                                    className={` 
                                        cursor-pointer whitespace-nowrap p-3 font-semibold text-sm
                                    ${active === item.title
                                            ? 'text-main bg-main/20'
                                            : 'text-text hover:bg-card'
                                        }
                                        `}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='flex-1'>
                        <div className='flex justify-between items-center p-2'>
                            <h2 className='text-lg font-semibold'>
                                {activeAbout.title}
                            </h2>
                        </div>

                        <div className='p-4'>
                            {activeAbout.description && (
                                <p className='text-sm'>
                                    {activeAbout.description}
                                </p>
                            )}

                            {activeAbout.items && (
                                <div className='flex flex-col gap-4'>
                                    {activeAbout.items.map((item) => (
                                        <div
                                            key={item.title}
                                            className='border-b border-border pb-3 last:border-0'
                                        >
                                            <h3 className='font-semibold'>
                                                {item.title}
                                            </h3>

                                            <p className='text-sm text-subtext'>
                                                {item.description}
                                            </p>

                                            {item.subDescription && (
                                                <p className='text-xs text-subtext/70 mt-1'>
                                                    {item.subDescription}
                                                </p>
                                            )}
                                            {item.institute && (
                                                <p className='text-sm text-subtext mt-1'>
                                                    {item.institute}
                                                </p>
                                            )}
                                            {item.map && (
                                                <div className='mt-3 overflow-hidden rounded-lg'>
                                                    <iframe
                                                        src={item.map}
                                                        title={item.title}
                                                        className='w-full h-64 border-0'
                                                        loading='lazy'
                                                        allowFullScreen
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
