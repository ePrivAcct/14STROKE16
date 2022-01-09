import React from 'react';
//import { Routes, Route } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './components/NavBar.jsx';
import Footer from './components/Footer';
import Home from './components/Home';
import ArticlesData from './components/ArticlesData';
// import Advertisement from './components/Advertisement';
import Advertisement from './components/Advertisements';
import News from './components/News';
import Collaborate from './components/Collaborate';
import NewsData from './components/NewsData';
import About from './components/About';



function App() {

  const articleInfo = ArticlesData.map((article) => {
    return <Home
      key={article.id}
      {...article}
    />
  })


  const newsInfo = NewsData.map((news) => {
    return <News
      key={news.id}
      {...news}
    />
  })


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={articleInfo} />
        <Route path="/News" element={newsInfo} />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/About" element={<About />} />
      </Routes>
      
      {/* <Advertisement /> */}
      <Footer />
    </div>
  );
}

export default App;
