import React from 'react'
import { useHistory } from "react-router-dom";

function ButtonPre() {
    let history = useHistory();

  function handleClick() {
    history.push("TopMitra");
  }
  return (
    <button onClick={handleClick} className='btn-primary'>Pre Order</button>
  )
}

export default ButtonPre