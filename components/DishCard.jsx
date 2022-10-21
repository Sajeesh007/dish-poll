import { DISH } from "@/store/reducer";
import VoteButton from "./VoteButton";

export default function DishCard({id, image, name, desc, rank, dishDispatch}) {

    const handleClick = (rank) => {
        if(rank == 1) dishDispatch({type: DISH.VOTE.FIRST, payload: id})
        else if(rank == 2) dishDispatch({type: DISH.VOTE.SECOND, payload: id})
        else if(rank == 3) dishDispatch({type: DISH.VOTE.THIRD, payload: id})
    }

    return (
        <div className={`flex flex-col items-center justify-between rounded-xl p-8 w-96 shadow-lg
            ${rank !== 1000 ? 'bg-zinc-800 text-white' : 'bg-indigo-300' } `}>
            <div className="flex flex-col">
                <img src={image+ '?random=' + id} className='w-full h-72'/>
                <h5 className="text-xl font-bold pt-2">{name}</h5>
                <p>{desc}</p>
            </div>
            <div className="flex items-center space-x-4 pt-2">
                <VoteButton rank="1" active={rank == 1} handleClick={handleClick}/>
                <VoteButton rank="2" active={rank == 2} handleClick={handleClick}/>
                <VoteButton rank="3" active={rank == 3} handleClick={handleClick}/>
            </div>
        </div>
    )
}
