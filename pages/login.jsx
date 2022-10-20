import { useReducer } from 'react'
import { useRouter } from 'next/router'

import { loginReducer, FETCH } from '@/store/reducer'

import Input from '@/components/Input'

export default function LoginPage() {

  const router = useRouter()

  const [state, dispatch] = useReducer(loginReducer,{loading: false, error: {type: false}})

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({type: FETCH.START})
    await fetch('https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json'
    ).then((res) => res.json()
    ).then((data) => {
      const user = data.filter((item)=> item.username === e.target[0].value && item.password === e.target[1].value)
      if(user.length == 0) 
        dispatch({type: FETCH.ERROR, payload: "Invalid username or password" })
      else {
        dispatch({type: FETCH.SUCCESS, payload: {id: user[0].id, name: user[0].username} })
        router.push('/')
      }
    }).catch((err)=>  dispatch({type: FETCH.ERROR, payload: "Network error"}))
  }


  return (
    <div className='flex justify-center items-center min-h-screen'>

        <div className='flex flex-col justify-center items-center bg-white w-96 py-8 rounded-lg shadow-lg 
          space-y-2'>
            <h3 className='text-3xl font-bold'>Login</h3>
            <form className='flex flex-col items-center' onSubmit={handleSubmit}>
              <Input type='text' name='name' label='Name'/>
              <Input type='password' name='password' label='Password'/>
              {state.error.type && <p className='text-red-600 pt-2'>{state.error.message}</p> }
              <button className='mt-4 bg-zinc-700 w-72 h-10 text-white rounded-lg border border-transparent hover:bg-transparent hover:border-zinc-900
                hover:text-black'>
                Login
              </button>
            </form>
        </div>

    </div>
  )
}
