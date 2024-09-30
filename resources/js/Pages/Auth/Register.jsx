import React from 'react'
import GuestLayout from '../../Layout/GuestLayout'
import { Link, useForm } from '@inertiajs/react'

const Register = () => {

    const {data, setData, post, errors, processing} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });

    function handleRegister(e) {
        e.preventDefault();
        post('/register');
    }

  return (
    <div className='w-1/2 mx-auto mt-20 text-center border rounded-2xl p-10 bg-slate-100'>
        <h1 className='text-3xl text-slate-800'>Welcome to Pesbuk</h1>
        <small className='text-sm text-slate-600'>Register to continue</small>
        <form className='space-y-6 mt-10' onSubmit={handleRegister}>
            <input className='block w-full px-3 py-2 border rounded-lg' type="text" name='name' id='name' placeholder='Name' value={data.name} onChange={e => setData('name', e.target.value)}/>
            {errors.name && <div className='text-red-500 text-sm text-start'>{errors.name}</div>}
            <input className='block w-full px-3 py-2 border rounded-lg' type="email" name='email' id='email' placeholder='Email' value={data.email} onChange={e => setData('email', e.target.value)}/>
            {errors.email && <div className='text-red-500 text-sm text-start'>{errors.email}</div>}
            <input className='block w-full px-3 py-2 border rounded-lg' type="password" name='password' id='password' placeholder='Password' value={data.password} onChange={e => setData('password', e.target.value)} />
            {errors.password && <div className='text-red-500 text-sm text-start'>{errors.password}</div>}
            <input className='block w-full px-3 py-2 border rounded-lg' type="password" name='password_confirmation' id='password_confirmation' placeholder='Confirm Password' value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)}/>
            <div className='flex justify-end'>
                <Link href='/login' className='text-blue-500 text-sm'>Already have an account?</Link>
            </div>
            <button type='submit' className='bg-blue-500 rounded-lg py-3 block w-full text-white font-semibold uppercase'>Register</button>
        </form>
    </div>
  )
}

Register.layout = (page) => <GuestLayout children={page} title="Register"/>

export default Register