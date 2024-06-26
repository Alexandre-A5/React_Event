import React, { useState } from 'react';
import '../index.css';
import Increment from './Increment.jsx';

//component activités qui comporte tous les autres components d'activités//
const Activites = () => {
    return (
        <div className="activite-container">
            <Match />
            <Festival />
            <Vote />
        </div>
    );
};

const Match = () => {
    //Props du component d'incrémentation//
    const [count, setCount] = useState(0);
    return (
        <div className="match-container">
            <h1>Participants au Match :</h1>
            <h2>{count}</h2>
            <Increment count={count} setCount={setCount} />
        </div>
    );
};

const Festival = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="festival-container">
            <h1>Participants au Festival :</h1>
            <h2>{count}</h2>
            <Increment count={count} setCount={setCount} />
        </div>
    );
};

const Vote = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="vote-container">
            <h1>Participants au Vote :</h1>
            <h2>{count}</h2>
            <Increment count={count} setCount={setCount} />
        </div>
    );
};

export default Activites;
