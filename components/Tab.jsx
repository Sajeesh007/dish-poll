import { useRouter } from 'next/router'

export default function Tab() {

    const router = useRouter()
    
    const handleTabChange = (type) => {
        if(type == 'vote') router.push('/')
        else  router.push('/result')
    }

    return (
        <div className='w-60 h-10 flex justify-center items-center bg-indigo-400 rounded-xl '>
            <button className={`${router.asPath  == '/' ? 'bg-white ' : "text-white "} font-semibold w-full rounded-xl h-full`} onClick={()=>handleTabChange('vote')}>
                Vote
            </button>
            <button className={`${router.asPath == '/result' ? 'bg-white' : 'text-white '}  font-semibold w-full rounded-xl h-full`} onClick={()=>handleTabChange('result')}>
                Result
            </button>
        </div>
    )
}
