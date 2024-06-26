import React, { useState } from 'react';
import '../index.css';
import Increment from './Increment.jsx';

//component activités qui comporte tous les autres components d'activités//
const Activites = ({title}) => {
    const [count, setCount] = useState(0);
    return (
        <div className="activite-container">
            <h2>{title}</h2>
            <h2>{count}</h2>
            <Increment count={count} setCount={setCount}/>
        </div>
    );
};


export default Activites;
