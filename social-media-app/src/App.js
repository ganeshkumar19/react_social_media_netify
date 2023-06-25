import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import Footer from './Footer';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Post from './Post';
import PostLayout from './PostLayout';
import { useEffect, useState } from 'react';
import {format} from "date-fns"
import api from "./api/posts"
import EditPost from './EditPost';
import useScreenSize from './hooks/useScreenSize';
import useAxiosFetch from './hooks/useAxiosFetch';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className='App'>
    <DataProvider>
      <Header title = "Ganesh social media"/>
      <Nav/>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/post'>
        <Route index element={<NewPost />} />
        <Route path=':id' element={<PostPage />} />
      </Route>
      <Route path='edit/:id' element= {<EditPost/>}/>
      <Route path='/about' element={<About />} />
      <Route path='*' element={<Missing />} />
      </Routes>
      <Footer/>
    </DataProvider>

    </div>
  );
}

export default App;
