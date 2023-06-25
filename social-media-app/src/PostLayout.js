import React from 'react'
import { Link, Outlet } from 'react-router-dom'


const PostLayout = () => {
  return (
    <>
        <Link to= '/postpage/1'>post1</Link>
        <br></br>
        <Link to= '/postpage/2'>post2</Link>
        <br></br>
        <Link to= '/postpage/3'>post3</Link>
        <br></br>
        <Link to= '/postpage/newpost'>newpost</Link>
        <br></br>
        <Outlet/>
    </>
  )
}

export default PostLayout