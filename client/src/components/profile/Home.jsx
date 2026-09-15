import React from 'react'
import Thumbnail from '../../utils/Thumbnail'

import thumbnail from '../../assets/thumbnail.jpg'

export default function Home() {
    return (
        <div
            className='
            grid grid-cols-1 gap-4
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
        '>
            <div className='grid grid-cols-12 gap-2 md:grid-cols-1'>
                <Thumbnail
                    className='
                    col-span-5 rounded-xl
                    sm:col-span-4 
                    md:col-span-1'
                    imgSrc={thumbnail}
                />

                <div
                    className='
                    flex flex-col gap-2 col-span-7 overflow-hidden text-sm 
                    sm:col-span-8 
                    md:col-span-1 md:text-[16px]
                '>
                    <h2 className='line-clamp-3 font-semibold px-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta at libero reprehenderit cum, quaerat quia placeat mollitia explicabo saepe!
                    </h2>

                    <div className='flex flex-wrap gap-2 font-semibold text-xs text-subtext px-2'>
                        <p><span>20k</span> views</p>
                        -
                        <p><span>20k</span> views</p>
                    </div>
                </div>
            </div>
        </div>
    )
}