import React from 'react'

export const Inputs = (  {handleChange , value , title , name }) => {
  return (
    <label className="Slabel" >
        <input type="radio" name={name} value={value} onChange={handleChange} />
        <span className="Sspan" ></span>{title}
    </label>
  )
}
