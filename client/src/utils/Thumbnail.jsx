import React from 'react'

export default function Thumbnail({ imgSrc, className }) {
    return (
        <div className={`
            w-full aspect-video overflow-hidden
            ${className || ''}
        `}>
            <img
                className='w-full h-full object-cover'
                src={imgSrc}
                alt=''
            />
        </div>
    )
}