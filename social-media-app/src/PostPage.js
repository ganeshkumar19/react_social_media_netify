import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const PostPage = () => {
  const {posts, handleDelete} = useContext(DataContext)
  const {id} = useParams()
  const post = posts.find((post)=> (post.id).toString() === id);
  return (
    <main className='postPage'>
      <article className='post'>
        {post && 
        <>
        <h2>{post.title}</h2>
        <p className='postDate'>{post.datetime}</p>
        <p className='postBody'>{post.body}</p>
        <Link to={`/edit/${post.id}`}><button className='editbutton'>Edit post</button></Link>
        <button onClick={()=> 
          handleDelete(post.id)}>deletepost</button>
        </>

        }
        {!post && 
        <>
        <h2>well that is dissapointing</h2>
        <p>please visit any other posts</p>
        <p><Link to='/'>Visit our homepage</Link></p>
        </>

        }

      </article>
       
    </main>
  )
}

export default PostPage