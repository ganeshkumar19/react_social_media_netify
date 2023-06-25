import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import DataContext from './context/DataContext';

const Nav = () => {
  const {search, setSearch} = useContext(DataContext)
  return (
    <nav className='nav'>
      <form className='searchForm' onSubmit={(e)=> {
        e.preventDefault();
      }}>
        <label htmlFor='search'>search posts</label>
        <input id='search' type='text' placeholder='search posts' value={search} onChange={(e)=> 
          setSearch(e.target.value)}/>

      </form>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to= '/post'>post</Link></li>
      </ul>
      
    </nav>
  )
}

export default Nav