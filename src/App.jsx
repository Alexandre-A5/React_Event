import React from 'react';
import Activites from './components/Activites.jsx';
import './index.css';

//Component final qui affiche les activités
const App = () => {
    return (
        <div>
        <div className="head-title">
            <h1>Liste activités</h1>
        </div>
        <div className="container">
            
            <Activites title="Match"/>
            <Activites title="Festival"/>
            <Activites title="Vote"/>
        </div>
        </div>
    );
};

export default App;
