import  { useRouter } from 'next/router'
import React from 'react'

export default function Header() {

    const router = useRouter()

    const handleLogout = () => {
        localStorage.removeItem("user")
        router.push('/login')
    }

    return (
        <div className=' flex justify-between items-center h-20 w-screen bg-indigo-300 px-8'>
            <h5 className='text-3xl font-bold'>Dish Poll</h5>
            <button className='px-8 py-3 bg-indigo-400 shadow-lg rounded-xl text-white font-bold' onClick={handleLogout}>
                Logout
            </button>
        </div>
    )
}
