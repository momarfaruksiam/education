import banner from '../assets/banner.jpg'
import profile from '../assets/profile-image.jfif'



import { TiTick } from "react-icons/ti";
import About from '../components/profile/About';
import Body from '../components/profile/Body';
import { useParams } from 'react-router';
import { useAuthUser } from '../contexts/authContext';
import { useEffect, useState } from 'react';
import AddContent from '../components/profile/AddContent';

export default function Profile() {

    const { username } = useParams()
    const savedUser = useAuthUser()

    const [user, setUser] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        if (username === savedUser.username) {
            setUser(savedUser)
        }
        setLoading(false)
    }, [username, savedUser])

    if (loading)
        return <>Loading</>

    if (!user)
        return <>Error page</>

    return (
        <main className='p2'>
            <section className='container mx-auto'>
                <div
                    className='
                    flex flex-col gap-2 items-center py-2
                    sm:items-baseline
                '>
                    <div className='w-full'>
                        <img
                            src={user.bannerImg}
                            alt=""
                            className='rounded-lg max-h-80 w-full'
                        />
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='border-main border-2 rounded-lg p-0.5'>
                            <div className='border-warning border-2 rounded-lg p-0.5'>
                                <img
                                    src={user.profileImg}
                                    alt=""
                                    className='
                                    max-w-40 max-h-50
                                    md:max-w-50 md:max-h-50 rounded-lg
                                    ' />
                            </div>
                        </div>
                        <div className='flex flex-col justify-between gap-4'>
                            <div className='capitalize space-y-1'>
                                <div className='flex gap-2 items-center'>
                                    <h1
                                        className='
                                        font-bold capitalize
                                        md:text-2xl
                                '>
                                        {user.name}
                                    </h1>
                                    {user.authorized &&
                                        <span className='bg-main p-0.5 text-bg rounded'>
                                            <TiTick />
                                        </span>}
                                </div>
                                <p
                                    className='
                                    font-medium text-subtext text-sm line-clamp-1
                                    md:text-lg
                                '>
                                    {user.role}
                                </p>
                                {user.collections &&
                                    <div className='capitalize text-xs text-subtext font-bold flex flex-wrap gap-1'>
                                        <p><span>{user.collections.videos}</span> videos</p>
                                        -
                                        <p><span>{user.collections.courses}</span> courses</p>
                                        -
                                        <p><span>{user.collections.connections}</span> connections</p>
                                        -
                                        <p><span>{user.collections.followers}</span> followers</p>
                                    </div>
                                }
                            </div>
                            {
                                user.loggedIn
                                    ?
                                    <div className='flex justify-between gap-2'>
                                        <button className='p-2 text-bg font-semibold bg-main rounded w-full'>
                                            Dashboard
                                        </button>
                                        <button className='p-2 text-text font-semibold bg-main/20 rounded w-full'>
                                            Edit
                                        </button>
                                    </div>
                                    :
                                    <div className='flex justify-between gap-2'>
                                        <button className='p-2 text-text font-semibold bg-main/20 rounded w-full'>
                                            Connect
                                        </button>
                                        <button className='p-2 text-bg font-semibold bg-main rounded w-full'>
                                            Message
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className='text-text font-medium capitalize'>
                        "{user.sologan}"
                    </div>
                    <About about={user.about} />
                </div>
            </section>
            {user.loggedIn && <AddContent />}
            <Body />
        </main>
    )
}