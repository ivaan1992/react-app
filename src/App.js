import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Details from './components/Characters/Details';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/:id" element={<Details />} />
      <Route path="/Episodes" element={<Episodes />} />
      <Route path="/Episodes/:id" element={<Details />} />
    </Routes>
  </BrowserRouter>
);

export default App;
