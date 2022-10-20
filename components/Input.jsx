

export default function Input({name, label, type}) {

    return (
        <div className='flex flex-col rounded-lg my-1'>
            <label htmlFor={name} className='py-1 text-zinc-700'>
                {label}
            </label>
            <input type={type}  name={name}
                className=' w-72 h-10 outline-none px-2 border border-zinc-300 rounded-md'/>
        </div>
    )
}
