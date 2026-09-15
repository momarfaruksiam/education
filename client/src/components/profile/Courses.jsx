import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";

import thumbnail from '../../assets/thumbnail.jpg'
import Thumbnail from '../../utils/Thumbnail'

export default function Courses() {
    return (
        <div className='grid sm:grid-cols-2 xl:grid-cols-4 gap-4'>
            <div className='bg-card rounded-lg overflow-hidden relative -z-10'>
                <div className='absolute top-2 right-2 flex gap-2'>
                    <div className='bg-warning rounded text-bg border-bg border-2 shadow-2xl p-1'>
                        <FaRegStar />
                    </div>
                    <div className='bg-bg rounded text-subtext border-card border-2 shadow-2xl p-1'>
                        <BsThreeDots />
                    </div>
                </div>
                <Thumbnail imgSrc={thumbnail} />
                <div className='p-2'>
                    <h1 className='text-lg font-bold line-clamp-2 capitalize'>Software engineering design capstone project</h1>
                    <p className='text-sm p-2 rounded font-bold text-info'>Enrolled: 20</p>
                    <div className='flex justify-between items-start'>
                        <button className='text-sm my-2 p-2 bg-danger border-bg border-2 rounded font-bold text-bg'>Pay: 200tk</button>
                        {/* <button className='text-sm my-2 p-2 rounded font-bold text-success'>- Free</button> */}
                        <button className='text-sm my-2 p-2 border-main border-2 rounded font-bold text-main'>View Course</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
