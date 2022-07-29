import Accueil from './Accueil/Accueil';
import Header from './Header/Header.js';
import Home from './Main/Home.js';
import About from './Main/About.js';
import Services from './Main/Services.js';
import { useState } from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Formulaire from './Account/Formulaire'
import MyCalendar from './Calendar/Calendar'
import Inscription from './Account/Inscription';
import Abs from './Main/Services/Abs';
import Cahier from './Main/Services/Cahier';
import Checkpoint from './Main/Services/Checkpoint';
import Paiement from './Main/Paiement';
import Matieres from './Main/Services/Matieres';




function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Formulaire />} />

        <Route path="/accueil" element={<Accueil />} />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/calendar" element={<MyCalendar />} />

        <Route path="/absences/retards" element={<Abs />} />

        <Route path="/sign" element={<Inscription />} />

        <Route path="/Cahier2texte" element={<Cahier />} />

        <Route path="/checkpoint" element={<Checkpoint />} />

        <Route path="/paiements" element={<Paiement />} />

        <Route path="/matieres" element={<Matieres />} />


      </Routes>
    </div>
  );
}

export default App;
