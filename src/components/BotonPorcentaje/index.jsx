import React from "react";

export const BotonPorcentaje = ({tip, value})=>{
    return(
        <li id='percentage-button ${value}'>
            <button type="button" className={`percentage-button ${tip === value && 'active'}`} value={value}> {value}% </button>
        </li>     
    )
}

