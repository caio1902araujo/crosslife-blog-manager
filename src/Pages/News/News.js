import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';

const News = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="criar" element={<NewsCreate/>} />
        <Route path="editar" element={<NewsEdit/>} />
      </Routes>
    </div>
  )
}

export default News
