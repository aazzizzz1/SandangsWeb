import React from 'react'
import { useHistory } from "react-router-dom";

function Button() {
    let history = useHistory();

  function handleClick() {
    history.push("./shops/Shop");
  }
  return (
    <button onClick={handleClick} className='btn-primary'>Desainer</button>
  )
}

export default Button