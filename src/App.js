import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './properties/properties/styles/bootstrap.css';
import './properties/properties/styles/style.css';
 import 'bootstrap/dist/js/bootstrap.bundle.js';

import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import{BrowserRouter, Route,Routes} from 'react-router-dom';
import Doctors from './Pages/Docters';
import CovidUpdate from './Pages/CovidUpdate';
import Services from './Pages/Services';
import VacAppointment from './Pages/VacAppointment';
import OnDemandAppointment from './Pages/OnDemandAppointment';

function App() {
  return (
        <div>
    <BrowserRouter>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about-us" element={<About/>} />
      <Route path="/contact-us" element={<Contact/>} />
      <Route path="/doctors" element={<Doctors/>} />
      <Route path="/covid-updates" element={<CovidUpdate/>} />
      <Route path="/conditions-and-services/anaesthesia" element={<Services/>} />
      <Route path="/conditions-and-services/cardiology" element={<Services/>} />
      <Route path="/vaccination-appointment" element={<VacAppointment/>} />
      <Route path="/schedule-on-demand-appointment" element={<OnDemandAppointment/>} />
      </Routes>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
