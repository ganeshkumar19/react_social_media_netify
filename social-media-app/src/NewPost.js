import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const {handleSubmit, postTitle, setPostTitle, postBody, setpostBody} = useContext(DataContext)
  return (
    <main className='NewPost'>
      <h1>newpost</h1>
      <form className='newPostForm' onSubmit={handleSubmit}>
        <label htmlFor='postTitle'>Title:</label>
        <input id='postTitle' type='text' required value={postTitle} onChange={(e)=> setPostTitle(e.target.value)}/>
        <label htmlFor='postBody'>Post:</label>
        <textarea id='postBody' type='text' required value={postBody} onChange={(e)=> setpostBody(e.target.value)}/>
        <button type='submit'>submit</button>

      </form>
    </main>
  )
}

export default NewPost