import React from 'react'

function sayHello() {
    alert('You clicked me!');
  }

function Button() {
  return (
    <button onClick={sayHello} className='btn-primary'>View</button>
  )
}

export default Button