import React from 'react'
import { useHistory } from "react-router-dom";

function ButtonMitra() {
    let history = useHistory();

  function handleClick() {
    history.push("./shops/Shop");
  }
  return (
    <button onClick={handleClick} className='btn-primary'>Mitra Produksi</button>
  )
}

export default ButtonMitra