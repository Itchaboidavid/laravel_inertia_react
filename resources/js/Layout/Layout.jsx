import { Link, useForm, usePage } from '@inertiajs/react'
import React from 'react'

const Layout = ({children}) => {
  const {flash} = usePage().props;

  const {post} = useForm();

  function logout(e) {
    e.preventDefault();
    post('/logout');
  }

  return (
    <div>
        <header>
            <nav className='shadow-lg'>
                <div className='max-w-screen-lg mx-auto flex justify-between items-center py-3'>
                <Link href="/" className='px-3 py-2 text-lg'>Home</Link>
                <div className='flex items-center space-x-4'>
                  <div>
                  <Link href="/posts" className='px-3 py-2 text-lg'>Posts</Link>
                  <Link href="/posts/create" className='px-3 py-2 text-lg'>Create</Link>
                  </div>
                  <form onSubmit={logout}>
                    <button type='submit' className='px-3 py-2 text-lg'>Logout</button>
                  </form>
                </div>
                </div>
            </nav>
        </header>

        <main className='p-10'>
            {flash.message && (
              <div className='text-white bg-green-500 rounded-lg px-3 py-2 text-center border-none font-semibold uppercase mb-10'>
              {flash.message}
              </div>)}
            {children}
        </main>
    </div>
  )
}

export default Layout