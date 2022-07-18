import React from 'react'
import {Link} from 'react-router-dom';

export default function navbar() {
    return (
        <div>
            <div className='navbarFixed'>
                <nav className="navbar navbar-expand-lg backgroundColer2 fw-bold ">
                    <div className="container-fluid "> 
                        <div className=" navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                            <Link className="navbar-brand fw-bold fs-3 text-white" to='Home'>START REACT</Link>
                            <div className="navbar-nav ">
                                <Link className="nav-link active text-white" aria-current="page" to='portfolio'>PORTFOLIO</Link>
                                <Link className="nav-link active text-white" aria-current="page" to='about'>ABOUT</Link>
                                <Link className="nav-link active text-white" aria-current="page" to='contact'>CONTACT</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
