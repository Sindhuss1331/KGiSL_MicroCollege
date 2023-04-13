import './App.css';

import Hello from './component/task1/helloworld';
import CongMessage from './component/task2/congrats';
import { SuperLeague } from './component/task3/super_league';
import { Socialbtn } from './component/task4/Socialbtn';
import {Notify} from './component/task5/Notification';
import {Login} from './component/task6/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Portmenu } from './component/Portfolio/Portmenu';
import PortHome from './component/Portfolio/HomePage/Homepage';
import { About } from './component/Portfolio/About/About';
import { Education } from './component/Portfolio/Education/Education';
import { Skills} from './component/Portfolio/Skill/Skills';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Menu } from './component/Menu/menu';
import { Counter } from './component/Hooks/Counter';
import { Technology } from './component/task7/Technology';
import { Fruitscounter } from './component/Hooks/Fruitscounter';
import { Feedback } from './component/Hooks/Feedback';
import { Thank } from './component/Hooks/Thank';
import { DateComponent } from './component/Hooks/Date';
import { Products } from './component/json_Assesment/Products';
import { Certification } from './component/Portfolio/Certification/Certification';
import { Contact } from './component/Portfolio/Contact/Contact';

function App() {
  
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<Portmenu/>,<PortHome/>,<About/>,<Education/>,<Skills/>,<Certification/>,<Contact/>]}/>
          <Route path='/Portfolio' element={[<Portmenu/>,<PortHome/>,<About/>,<Education/>,<Skills/>,<Certification/>,<Contact/>]}/>
          <Route path='/Portfolio/Port-Home' element={[<Portmenu/>,<PortHome/>]}/>
          <Route path='/Portfolio/About' element={[<Portmenu/>,<About/>]}/>
          <Route path='/Portfolio/Education' element={[<Portmenu/>,<Education/>]}/>
          <Route path='/Portfolio/Skills' element={[<Portmenu/>,<Skills/>]}/>
          <Route path='/Portfolio/Certification' element={[<Portmenu/>,<Certification/>]}/>
          <Route path='/Portfolio/Work' element={[<Menu/>,<Hello/>]}/>
          <Route path='/Portfolio/Contact' element={[<Portmenu/>,<Contact/>]}/>
          <Route path='/Hello' element={[<Menu/>,<Hello/>]} />
          <Route path='/congrats'element={[<Menu/>,<CongMessage/>]}/>
          <Route path='/SuperLeague'element={[<Menu/>,<SuperLeague/>]}/>
          <Route path='/Socialbtn'element={[<Menu/>,<Socialbtn/>]}/>
          <Route path='/Notify'element={[<Menu/>,<Notify/>]}/>
          <Route path='/Login'element={[<Menu/>,<Login/>]}/>
          <Route path='/Technology'element={[<Menu/>,<Technology/>]}/>
          <Route path='/Counter'element={[<Menu/>,<Counter/>]}/>
          <Route path='/Fruitscounter'element={[<Menu/>,<Fruitscounter/>]}/>
          <Route path='/Feedback'element={[<Menu/>,<Feedback/>]}/>
          <Route path='/Thank'element={[<Menu/>,<Thank/>]}/>
          <Route path='/Date'element={[<Menu/>,<DateComponent/>]}/>
          <Route path='/products'element={[<Menu/>,<Products/>]}/>
        </Routes>
      </BrowserRouter> 
    </>
    
    );
}

export default App;
