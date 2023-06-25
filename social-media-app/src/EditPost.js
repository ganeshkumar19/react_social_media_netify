import React, { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext from './context/DataContext';

const EditPost = () => {
  const { posts, editTitle, editBody, setEditTitle, setEditBody, handleEdit} =useContext(DataContext)
  const {id} = useParams();
  const post = posts.find(post => (post.id).toString() === id );

useEffect(()=> {
  if(post){
    setEditTitle(post.title);
    setEditBody(post.body);
  }
}, [posts, setEditTitle, setEditBody])

  return (
    <main className='NewPost'>
      {editTitle && 
      <>
      <h2>Edit post</h2>
      <form onSubmit={(e)=> e.preventDefault()} className='newPostForm'>
        <label htmlFor='editTitle'>Edit Title</label>
          <input type='text'
          id='textTitle'
           required
           value={editTitle}
           onChange={(e)=> {
            setEditTitle(e.target.value)
           }}/>

        <label htmlFor='editBody'>Edit Body</label>
          <textarea type='text'
          id='textTitle'
           required
           value={editBody}
           onChange={(e)=> {
            setEditBody(e.target.value)
           }}/>
      <button type='submit' onClick={()=> handleEdit(post.id)}>submit</button>
      </form>
      </>
      }
      {!editTitle &&
       <>
        <h2>Post not found</h2>      
        <p> well that's dissapointing</p> 
        <p><Link to= '/'>Visit Our Homepage 
        </Link></p>
        </>
      }

    </main>
  )
}

export default EditPost