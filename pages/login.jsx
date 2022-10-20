import Input from '@/components/Input'

export default function LoginPage() {
  return (
    <div className='flex justify-center items-center min-h-screen'>

        <div className='bg-zinc-900 '>
            <Input type='text' name='name' label='Name'/>
            <Input type='password' name='name' label='Name'/>
        </div>

    </div>
  )
}
