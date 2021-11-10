import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import { AuthProvider } from './Hooks/useAuth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
