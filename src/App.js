import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Hooks/useAuth';
import Login from './Pages/Login/Login';
import News from './Pages/News/News';
import ProtectedRoute from './Helper/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            
            <Route path="noticias" element={<ProtectedRoute/>}>
              <Route element={<News/>} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
