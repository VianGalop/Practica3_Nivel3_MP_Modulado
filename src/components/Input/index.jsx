import React from "react";

export const Input = ({ label, value, min, onChange})=>{
    return(
        <>
        <label htmlFor={'input-${label}'}>
            <input type="number" className={'input-${label}'} id={'input-${label}'}  value={value} min={min} onChange={onChange} ></input>
        </label>
        </>
    )
}