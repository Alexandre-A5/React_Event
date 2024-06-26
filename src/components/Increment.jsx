import React from 'react';
import '../index.css';


//Component de plus ou moins//
//Définition de count pour le compteur et setCount pour implémenter un chiffre dans le count//
const Increment = ({ count, setCount }) => {
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => {
                if (count > 0) {        //Si le count est au dessus de 0 alors il peut faire -1 sinon non//
                    setCount(count - 1);
                }
            }}>-</button>
            <button id="reset" onClick={() => (setCount(0))}>↺</button>
        </div>
    );
};

export default Increment;
