import React from "react";

export const TipPerson = ({nameClass, titulo, id,label2}) =>{
    return(
        <>
            <div className={nameClass}>
              <div>
                <h2>{titulo}</h2>
                <p>/ person</p>
              </div>
              <h3>$<span id={id}>{parseFloat(label2).toFixed(2)}</span></h3>
            </div>       
        </>
    )
}