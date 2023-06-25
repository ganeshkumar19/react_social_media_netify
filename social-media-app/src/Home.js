import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from './context/DataContext';

const Home = () => {
  const { searchResults, fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='mainname'>
      {isLoading && <p className='mainname'>loading posts</p>}
      {!isLoading && fetchError && <p className='mainname' style={{ color: 'red' }}>{fetchError}</p>}
      {!isLoading && !fetchError && searchResults.length ?  <Feed posts={searchResults} />
      : (
        <p style={{ marginTop: '2rem' }}>No posts to display</p>
      )
      }
    </main>
  );
};

export default Home;