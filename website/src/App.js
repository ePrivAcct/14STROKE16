import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import ArticlesData from './components/ArticlesData';
import Advertisement from './components/Advertisement';
import News from './components/News';
import Collaborate from './components/Collaborate';
import NewsData from './components/NewsData';



function App() {

  const articleInfo = ArticlesData.map((article) => {
    return <Body
      key={article.id}
      {...article}
    />
  })


  const NewsInfo = NewsData.map((news) => {
    return <NewsData
      key={news.id}
      {...news}
    />
  })


  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={articleInfo} />
        <Route path="/News" element={<News />} />
        <Route path="/Collaborate" element={<Collaborate />} />
      </Routes>
      <Advertisement />
      <Footer />
    </div>
  );
}

export default App;
