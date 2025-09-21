// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage'; // We will create this next

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