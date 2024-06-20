import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateSidebarCourses } from '../../actions';
import Sidebar from '../sidebar';
import Navbar from '../navbar';
import MainSpace from '../mainSpace';
import Footer from '../footer';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const user_str = localStorage.getItem('user');
    const token_str = localStorage.getItem('token');
    if(user_str && token_str){
      const user = JSON.parse(user_str);
      const token = JSON.parse(token_str);
      dispatch(updateSidebarCourses(user,token));
    }
  }, [dispatch]);


  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="main-layout">
        <Navbar />
        <MainSpace/>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
