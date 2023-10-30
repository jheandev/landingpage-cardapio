import React from "react";


// MY IMPORTS
import './styles.css';

export default function Elips({size, opacity, styles}){

    //OBJETO DE ESTILO 
    const circleStyle = {
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        
    }
    return(
        
          <div className={`circle ${styles}`} style={circleStyle}></div>
        
    );
}