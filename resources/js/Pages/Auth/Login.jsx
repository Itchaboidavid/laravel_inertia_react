import React from 'react'
import GuestLayout from '../../Layout/GuestLayout'
import { Link, useForm } from '@inertiajs/react';

const Login = () => {
    const {data, setData, post, errors, processing} = useForm({
        email: '',
        password: '',
    });

    function handleLogin(e) {
        e.preventDefault();
        post('/login');
    }
  return (
    <div className='w-1/2 mx-auto mt-20 text-center p-10 border rounded-2xl bg-slate-100'>
        <h1 className='text-3xl text-slate-800'>Welcome to Pesbuk</h1>
        <small className='text-sm text-slate-600'>Sign in to continue</small>
        <form className='space-y-6 mt-10' onSubmit={handleLogin}>
            <input className='block w-full px-3 py-2 border rounded-lg' type="email" name='email' id='email' placeholder='Email' value={data.email} onChange={e => setData('email', e.target.value)}/>
            {errors.email && <div className='text-red-500 text-sm text-start'>{errors.email}</div>}
            <input className='block w-full px-3 py-2 border rounded-lg' type="password" name='password' id='password' placeholder='Password' value={data.password} onChange={e => setData('password', e.target.value)} />
            {errors.password && <div className='text-red-500 text-sm text-start'>{errors.password}</div>}
            <div className='flex justify-end'>
                <Link href='/register' className='text-blue-500 text-sm'>Don't have an account?</Link>
            </div>
            <button type='submit' className='bg-blue-500 rounded-lg py-3 block w-full text-white font-semibold uppercase'>Login</button>
        </form>
    </div>
  )
}

Login.layout = page => <GuestLayout children={page} title="Login"/>
export default Login