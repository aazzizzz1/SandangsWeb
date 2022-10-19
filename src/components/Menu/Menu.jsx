import React from "react"
import './Mmenu.css'
// import {Link} from "react-router-dom"

function Menu({title,imageUrl,body}) {
    return (
        <div className='card-container'>
            <div className="image-container">
                <img src={imageUrl} alt='' />
            </div>
            <div className="card-content">
                <div className="card-tittle">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{body}</p>
                </div>
            </div>

            <div className="btn">
                <button>
                    <a>
                        Fitting Room
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Menu