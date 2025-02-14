import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import {TitlesPage} from './pages/TitlesPage';
import { TitleFormPage } from './pages/TitleFormPage';
import { Navigation } from './components/Navigation';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigate to='/titles' />} />
        <Route path="/titles" element={<TitlesPage />} />
        <Route path="/titles-create" element={<TitleFormPage />} />
        <Route path="/titles/:id" element={<TitleFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;