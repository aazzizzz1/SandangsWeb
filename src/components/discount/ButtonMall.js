import React from 'react'
import { useHistory } from "react-router-dom";

function ButtonMall() {
    let history = useHistory();

  function handleClick() {
    history.push("TopDesigner");
  }
  return (
    <button onClick={handleClick} className='btn-primary'>Mall</button>
  )
}

export default ButtonMall