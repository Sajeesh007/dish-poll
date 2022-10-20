

export default function Input({name, label, type}) {

    return (
        <div className='flex flex-col'>
            <label htmlFor={name} className=''>
                {label}
            </label>
            <input type={type} className='' name={name}/>
        </div>
    )
}
