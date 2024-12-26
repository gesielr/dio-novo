import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Feed from './pages/feed'; // Certifique-se de que a página "Feed" está importada
import Register from './pages/register'; // Adiciona a importação da página de cadastro

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} /> {/* Adiciona a rota do Feed */}
        <Route path="/register" element={<Register />} /> {/* Nova rota para a página de cadastro */}
      </Routes>
    </Router>
  );
}

export default App;
