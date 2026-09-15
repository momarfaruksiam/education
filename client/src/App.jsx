import React, { useState } from 'react'

import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import router from './routes/Router'
import { authUser } from './contexts/authContext'

export default function App() {
  const [user, setUser] = useState({
    username: 'siam',
    name: 'md omar faruk siam',
    role: 'software engineer',
    authorized: '',
    loggedIn: 'true',
    profileImg: 'https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-1/655698188_1459475625544486_1097185812312146623_n.jpg?stp=dst-jpg_tt6&cstp=mx1469x1469&ctp=s200x200&_nc_cat=110&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeHVz2HwdXF1e9Yh0rxaMgb7bNV3WtboFeJs1Xda1ugV4tSIFl8bk-ZAsB51baOeFePTltJ9yNqNhJSkiCmB_CE3&_nc_ohc=oBP1Wb_dWIIQ7kNvwFuBdM1&_nc_oc=AdqFmrd2Ol4Tf9w2N2R-GMv3ioStrObkHO2Pi_AXMBIrHdoUUxayF7RAid-u85O8mpg&_nc_zt=24&_nc_ht=scontent.fcla7-1.fna&_nc_gid=MwPy17Hjc5D_NGBxhsT-_w&_nc_ss=7d2a8&oh=00_AQLublRK0XePxhXsvucXMTOX87MeBoXiPPV9Y5gGa3t7kg&oe=6AAAFA83',
    bannerImg: 'https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-6/473622848_1127694928722559_2752756051669510607_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x810&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeEx289ePvoG_-ZqSIhdftpOly7x1s1cgRqXLvHWzVyBGl_KQOteBf7UAWFwiBLNXpxhvDdst9wk63XESuPJvp_T&_nc_ohc=ezrg_I8Hg_oQ7kNvwH55Rnp&_nc_oc=AdoBPxnVupNCIeUsaYDmI_y2zMsAFUEX-WaJVDY3OhU-AmzbmPyT-DFFFyTE3aXavXQ&_nc_zt=23&_nc_ht=scontent.fcla7-1.fna&_nc_gid=MwPy17Hjc5D_NGBxhsT-_w&_nc_ss=7d2a8&oh=00_AQLArIXJQuWKOTi7cDxdKKghK92kVAjDurUMcwEpLKG9-w&oe=6AAAECF0',
    sologan: 'we are sparks',
    collections: {
      videos: '500',
      courses: '10',
      followers: '50k',
      connections: '20k',
    },
    about: [
      {
        title: 'Bio',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque saepe ipsa sequi incidunt, repudiandae nam inventore rem optio architecto recusandae dolore reprehenderit amet quas mollitia animi id. Delectus voluptatem'
      },
      {
        title: 'Personal details',
        items: [
          {
            title: 'Hometown',
            description: 'Uttara, Dhaka, Bangladesh',
            subDescription: 'Hometown',
            map: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d228.01289830639487!2d90.38469668472226!3d23.882299624899098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sbd!4v1789131490631!5m2!1sen!2sbd"

          },
          {
            title: 'Birthday',
            description: 'February 20'
          },
          {
            title: 'Status',
            description: 'Single'
          },
          {
            title: 'Gender',
            description: 'Male'
          },
          {
            title: 'Language',
            description: 'Bangla, English, German, Urdu, And Hindi'
          }
        ]
      },
      {
        title: 'Subjects',
        items: [
          {
            title: 'Physics',
            description: 'MSc in Physics',
            subDescription: 'Result: 3.90 out of 4',
            institute: 'Daffodil International University'
          },
          {
            title: 'Computer Science',
            description: 'BSc in Computer Science',
            subDescription: 'Result: 3.75 out of 4',
            institute: 'University of Dhaka'
          }
        ]
      },
      {
        title: 'Skills',
        items: [
          {
            title: 'Physics',
            description: 'MSc in Physics',
            subDescription: 'Result: 3.90 out of 4'
          }
        ]
      },
      {
        title: 'Travel',
        items: [
          {
            title: "Cox's Bazar, Bangladesh",
            description: 'Marine Drive Road',
            subDescription: 'Travel Spot',
            map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29712.15254351465!2d91.9701859!3d21.428495499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc868716d4925%3A0xcd3ada60adda3a3b!2sCox's%20Bazar%20Beach!5e0!3m2!1sen!2sbd!4v1789131073486!5m2!1sen!2sbd"
          },
        ]
      }
    ],
  })
  return (
    <authUser.Provider value={user}>
      <RouterProvider router={router} />
      <ToastContainer />
    </authUser.Provider>
  )
}