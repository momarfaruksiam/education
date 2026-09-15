import React from 'react'
import { useNavigate, useParams } from 'react-router'
import Home from './Home'
import Courses from './Courses'

export default function Body() {
    const items = [
        { name: 'home' },
        { name: 'courses' },
        { name: 'institutions' },
        { name: 'live' },
        { name: 'post' },
    ]

    const navigate = useNavigate()
    const { username, body } = useParams()

    const activeBody = items.some(item => item.name === body) ? body : 'home'

    const sections = {
        home: <Home />,
        courses: <Courses />,
        institutions: <>institutions</>,
        live: <>live</>,
        post: <>post</>,
    }

    return (
        <section className='p-2 container m-auto'>
            <div>
                <ul className='flex gap-4 items-center overflow-x-auto'>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => navigate(`/${username}/${item.name}`)}
                            className={`
                                capitalize font-semibold text-subtext select-none
                                border-b-3 cursor-pointer
                                ${activeBody === item.name ? 'border-subtext/50' : 'border-transparent'}
                            `}
                        >
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className='py-4'>
                {sections[activeBody] || <>section not found</>}
            </div>
        </section>
    )
}