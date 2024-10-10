
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import PsychologistsPage from './pages/PsychologistsPage/PsychologistsPage';
import ModalPage from './pages/ModalPage/ModalPage';

function App() {
 

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/modal" element={<ModalPage />} />
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
    </Layout>
  );
}

export default App
