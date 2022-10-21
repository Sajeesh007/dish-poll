import React from 'react'

export default function VoteButton({rank, active, handleClick}) {
  return (
    <button className={`rounded-xl bg-white w-10 h-10 font-bold shadow-lg text-black hover:bg-indigo-400 hover:text-white 
        ${active && 'bg-indigo-400 text-white'}`} 
        onClick={()=>handleClick(parseInt(rank))}>
        {rank}
    </button>
  )
}
