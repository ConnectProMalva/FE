import React from 'react'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  return (
    <form className='max-w-sm mx-auto'>
      <div className='mb-2'>
        <label htmlFor='email' className='font-bold block mb-2'>Email address</label>
        <input
          type='email'
          id='email'
          placeholder='johndoe@gmail.com'
          className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm bg-white text-neutral py-[11px] px-[11px]'
          autoComplete='off'
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='password' className='font-bold block mb-2'>Create password</label>
        <input
          type='password'
          id='password'
          placeholder='Create password'
          className='font-normal w-full border border-borderColor outline-password rounded-md shadow-sm text-neutral py-[11px] px-[11px]'
          autoComplete='new-password'
        />
      </div>
      <div className='flex flex-row justify-between'>
        <label> <input type="checkbox" id="remember-password" name="remember-password" className='outline-password' /> Remember me</label>
        <span className='font-bold text-password'><Link to="/ForgotPassword">Forgot password?</Link></span>
      </div>
      <Link to="/ArtisanDashboard" className="mt-5 block">
        <button
          type='submit'
          className='bg-buttonBackground border border-borderColor outline-password hover:bg-white w-full text-buttonColor shadow-sm font-bold py-2 px-4 rounded'
        >
          Login
        </button>
        <p className="text-center text-haveAnAccount font-normal mt-3">Don't have an account? <a href='/SignUp' className='text-password font-bold'>Create Account</a></p>
      </Link>

    </form>
  )
}

export default LoginForm