import React from 'react';
import Activites from './components/Activites.jsx';
import './index.css';

//Component final qui affiche les activités
const App = () => {
    return (
        <div className="container">
            <h1>Liste des activités</h1>
            <Activites />
        </div>
    );
};

export default App;
