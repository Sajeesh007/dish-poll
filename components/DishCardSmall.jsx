
export default function DishCard({id, image, name, point, dishDispatch, index}) {

    return (
        <div className={`flex items-center justify-between rounded-3xl py-2 px-4 w-96 shadow-lg bg-indigo-300`}>
            <div className="flex space-x-4 justify-center items-center" >
                <h5 className="text-xl font-bold">{index}.</h5>
                <img src={image+ '?random=' + id} className='w-14 h-14 rounded-full'/>
                <p className="text-lg">{name}</p>
            </div>
            <p className="text-base text-center font-bold ">{point} pts.</p>
        </div>
    )
}
