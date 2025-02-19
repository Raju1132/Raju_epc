
import '../Css/My404Component.css'
import { Link } from 'react-router-dom'
function My404Component() {
  return (
    <div className='flex justify-center items-center w-full min-h-[100dvh] flex-col gap-6'>
        <div className='text-9xl text-[#c31c00] mt-12'>404</div>
        <div className="text">Oops... Page not found</div>
        <Link className='button' to={'/'} >HOME</Link>
    </div>
  )
}

export default My404Component