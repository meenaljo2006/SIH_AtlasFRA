import { Routes, Route } from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import LoginPage from './Pages/LoginPage';
import MainLayout from './Components/MainLayout'; // <-- Import the layout
import AtlasView from './Pages/AtlasView';


const RecordsView = () => <h1 style={{padding: '20px'}}>Records View Page</h1>;

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<MainLayout />}>
        <Route path="/atlasView" element={<AtlasView />} />
        <Route path="/records" element={<RecordsView />} /> {/* <-- Add this new route */}
      </Route>
    </Routes>
  );
}

export default App;