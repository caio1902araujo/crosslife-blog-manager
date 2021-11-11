import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Hooks/useAuth';
import ProtectedRoute from './Helper/ProtectedRoute';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            
            <ProtectedRoute path="noticias" element={<News/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
