import { useRouter } from "next/router"
import { useState } from "react"

export default function DishCard({id, image, name, point, index, rank}) {

    const router = useRouter()

    const [hover, sethover] = useState(false)

    return (
        <div className={`flex items-center justify-between rounded-3xl py-2 px-4 w-96 shadow-lg 
            ${rank !== 1000 ? 'bg-zinc-800 text-white' : 'bg-indigo-300 '}`}
            onMouseOver={()=> rank !== 1000 && sethover(true)} onMouseOut={()=> rank !== 1000 && sethover(false)}>
            <div className="flex space-x-4 justify-center items-center" >
                <h5 className="text-xl font-bold">{index}.</h5>
                <img src={image+ '?random=' + id} className='w-14 h-14 rounded-full'/>
                <p className="text-lg">{name}</p>
            </div>
            {hover ? 
                <button className="text-base text-center font-bold hover:cursor-pointer bg-indigo-400 shadow-lg px-4 py-1 rounded-xl"
                onClick={()=>router.push('/')}>
                    Edit
                </button> :  
                <p className="text-base text-center font-bold ">{point} pts.</p>
            }
        </div>
    )
}
