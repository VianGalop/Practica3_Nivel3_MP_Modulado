import React, { useState } from "react";
import { BotonPorcentaje } from "../BotonPorcentaje";

export const TipPorcentajes = ({tip, setTip})=>{
    

    return(
        <>
          <ul onClick={(e) => setTip((e.target.value))}>
              <BotonPorcentaje tip={tip} value="5"/>
              <BotonPorcentaje tip={tip} value="10"/>
              <BotonPorcentaje tip={tip} value="15"/>
              <BotonPorcentaje tip={tip} value="25"/>
              <BotonPorcentaje tip={tip} value="50"/>      
              <li>
                <input type="number" placeholder="Custom" id="custom-percentage-button" className="percentage-button"
                onChange={(e) => setTip(e.target.value) }
                />
              </li>
          </ul>
        
        
        
        </>
    )
}