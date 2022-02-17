import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css';
import Container from './components/Container';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import SearchMoviePage from './pages/SearchMoviePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Container>
      <Navigation />
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<SearchMoviePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Container>
  );
}

export default App;