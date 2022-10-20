
export default function DishCard({id, image, name, desc}) {
  return (
    <div className="flex flex-col items-center justify-between bg-indigo-300 rounded-xl p-8 w-96 shadow-lg">
        <div className="flex flex-col">
            <img src={image+ '?random=' + id} className='w-full h-72'/>
            <h5 className="text-xl font-bold pt-2">{name}</h5>
            <p>{desc}</p>
        </div>
        <div className="flex items-center space-x-4 pt-2">
            <button className="rounded-xl bg-white w-10 h-10 text-black font-bold shadow-lg hover:bg-indigo-400 hover:text-white " >
                1
            </button>
            <button className="rounded-xl bg-white w-10 h-10 text-black font-bold  shadow-lg hover:bg-indigo-400 hover:text-white">
                2
            </button><button className="rounded-xl bg-white w-10 h-10 text-black font-bold  shadow-lg hover:bg-indigo-400 hover:text-white">
                3
            </button>
        </div>
    </div>
  )
}
