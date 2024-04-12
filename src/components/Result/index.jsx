import React from "react";
import { TipPerson } from "../TipPerson";

export const Resultado = ({tipTotal, tipAmount})=>{
    
    return(
      <div className="result-txt">
        <TipPerson
          nameClass="text-amount"
          titulo="Tip Amount"
          id="tip-amount"
          label2={tipTotal}            
        />
        <TipPerson
          nameClass="total-amount"
          titulo="Total"
          id="total"
          label2={tipAmount}         
        />
      </div>
    )
}