import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Hooks/useAuth';
import ProtectedRoute from './Helper/ProtectedRoute';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import NewsCreate from './Pages/News/NewsCreate';
import NewsEdit from './Pages/News/NewsEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            
            <Route path="noticias" element={<ProtectedRoute/>}>
              <Route element={<News/>} />
              <Route path="criar" element={<NewsCreate/>} />
              <Route path="editar" element={<NewsEdit/>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
