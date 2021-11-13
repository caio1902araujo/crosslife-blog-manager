import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewsCreate from './NewsCreate';
import NewsEdit from './NewsEdit';

const News = () => {
  return (
    <div>
      noticias
      <Routes>
        <Route path="criar" element={<NewsCreate/>} />
        <Route path="criar" element={<NewsEdit/>} />
      </Routes>
    </div>
  )
}

export default News
