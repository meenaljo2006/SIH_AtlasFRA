// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage';
import AtlasView from './Pages/AtlasView';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/atlasView" element={<AtlasView/>}/>
    </Routes>
  );
}

export default App;