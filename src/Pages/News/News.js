import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';
import NewsUser from './NewsUser';

const News = () => {
  return (
    <div>
      <Header/>
      <main className='container containerMain'>
        <Routes>
          <Route path="/" element={<NewsUser/>} />
          <Route path="criar" element={<NewsCreate/>} />
          <Route path="editar" element={<NewsEdit/>} />
        </Routes>
      </main>
    </div>
  )
}

export default News
