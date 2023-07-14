
import './App.css';
import { HomeIndustry } from './component/Home/HomeIndustry';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeIndustry/>} />
      </Routes>
    </BrowserRouter>
    </>
      
  );
}

export default App;
