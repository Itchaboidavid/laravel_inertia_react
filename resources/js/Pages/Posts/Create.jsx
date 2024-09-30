import { Head, useForm } from '@inertiajs/react'
import React from 'react'

const Create = () => {

    const {data, setData, post, errors, processing} = useForm({
        body: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/posts')
    }

  return (
    <div>
        <Head title='Create Post'/>
        <div className='w-1/2 mx-auto'>
        <h1 className='text-center text-3xl font-bold text-slate-800 mb-10'>Create a new Post</h1>
            <form className='border p-10' onSubmit={handleSubmit}>
                <div className='flex flex-col'>
                    <textarea name="body" id="body" rows={6} placeholder='Enter your post here...' 
                    className={`border rounded-lg p-5 ${errors.body ? 'ring-2 ring-red-500' : ''}`} value={data.body} onChange={e => setData('body', e.target.value)}>

                    </textarea>
                    {errors.body && <div className='text-sm text-red-500 mt-1'>{errors.body}</div>}
                </div>
                <button type='submit' className='block w-full rounded-lg bg-blue-600 mt-4 py-2 text-white font-bold' disabled={processing}>
                    Submit
                </button>
            </form>
        </div>
    </div>
  )
}

export default Create