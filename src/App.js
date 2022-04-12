import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Characters from './components/Characters/Characters';
import Location from './components/Location/Location';
import Episodes from './components/Episodes/Episodes';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/Location" element={<Location />} />
      <Route path="/Episodes" element={<Episodes />} />
    </Routes>

  </BrowserRouter>
);

export default App;
