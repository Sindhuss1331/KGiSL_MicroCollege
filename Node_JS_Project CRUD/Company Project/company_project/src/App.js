import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../src/component/Home';
import { AddCustomer } from './component/AddCustomer';
import { ViewDetails } from './component/ViewDetails';
import { UpdateDetails } from './component/UpdateDetails';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/AddCustomer' element={<AddCustomer/>}/>
      <Route path='/Show/:sno' element={<ViewDetails/>}/>
      <Route path='/Edit/:sno' element={<UpdateDetails/>}/>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
