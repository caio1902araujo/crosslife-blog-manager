import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './Hooks/useAuth';

import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import ProfileAuthor from './Pages/ProfileAuthor/ProfileAuthor';
import ProtectedRoute from './Helper/ProtectedRoute/ProtectedRoute';

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Login/>}/>
            
            <Route path='noticias/*' element={<ProtectedRoute component={<News/>}/>}/>

            <Route path='autor' element={<ProtectedRoute component={<ProfileAuthor/>}/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
