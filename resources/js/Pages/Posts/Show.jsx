import React from 'react'

const Show = ({post}) => {
  return (
    <div>
        <div className='w-1/2 mx-auto bg-slate-100 p-10'>
            <p>{post.body}</p>
        </div>
    </div>
  )
}

export default Show