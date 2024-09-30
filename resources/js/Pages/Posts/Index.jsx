import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

const Index = ({posts}) => {

    const {delete: destroy} = useForm();

    function handleDelete(e, postId) {
        e.preventDefault();
        destroy(`/posts/${postId}`);
    }

  return (
    <div>
            <Head title='Posts' />
        <h1 className='text-center text-3xl font-bold mb-10'>Latest Posts</h1>
        <div>
            {posts.data.map(post => (
                <div key={post.id} className='mb-10 w-1/2 mx-auto border p-5'>
                    <div className='text-slate-600 mb-5'>
                        <span>Posted on &nbsp; <small>{new Date(post.created_at).toLocaleTimeString()}</small></span> <br />
                        <small>Created by: {post.user.name}</small>
                    </div>
                    <p className='mb-3'>{post.body.length > 100 ? `${post.body.slice(0, 100)}...` : post.body}</p>
                    <div>
                        <Link href={`posts/${post.id}`} className='text-blue-500 text-sm hover:underline'>Read more...</Link>
                    </div>
                    <div className='flex justify-end items-center space-x-4'>
                        <Link href={`/posts/${post.id}/edit`} className='px-3 py-1 bg-blue-500 text-white rounded-lg border-none'>EDIT</Link>
                        <form onSubmit={(e) => handleDelete(e, post.id)}>
                            <button className='px-2 py-1 bg-red-500 text-white rounded-lg border-none'>DELETE</button>
                        </form>
                    </div>
                </div>
            ))}
        </div>

        <div className='w-1/2 mx-auto p-5 text-center'>

            {posts.links.map((link, index) => (
                link.url ?
                <Link key={index} href={link.url} className={`p-1 mx-2 ${link.active ? "text-blue-500" : ""}`} dangerouslySetInnerHTML={{__html: link.label}}/>
                : <span key={index} className='p-1 mx-2 text-slate-600' dangerouslySetInnerHTML={{__html: link.label}}>

                </span>
            ))}
        </div>
    </div>
  )
}

export default Index