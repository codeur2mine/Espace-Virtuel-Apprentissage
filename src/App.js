import Accueil from './Accueil/Accueil';
import Header from './Header/Header.js';
import Home from './Main/Home.js';
import About from './Main/About.js';
import Services from './Main/Services.js';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Formulaire from './Account/Formulaire'
import MyCalendar from './Calendar/Calendar'
import Inscription from './Account/Inscription';
import Abs from './Main/Services/Abs';
import Cahier from './Main/Services/Cahier2texte/Cahier';
import Checkpoint from './Main/Services/Checkpoint';
import Matieres from './Main/Services/Matieres';
import Add from './Main/Services/Cahier2texte/Add';
import Actualité from './Main/Actualité';
import Mot from './Main/Mot';
import Communaute from './Main/Communaute';
import AddTransaction from './Main/Finances/AddTransaction';






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

        <Route path="/add" element={<Add />} />

        <Route path="/signup" element={<Inscription />} />

        <Route path="/Cahier2texte" element={<Cahier />} />

        <Route path="/checkpoint" element={<Checkpoint />} />

        <Route path="/addTransaction" element={<AddTransaction />} />

        <Route path="/matieres" element={<Matieres />} />

        <Route path="/actualite" element={<Actualité />} />

        <Route path="/motdujour" element={<Mot />} />

        <Route path="/communaute" element={<Communaute />} />
      

      </Routes>

    </div>
  );
}

export default App;
