import React from 'react'

export default function navbar() {
    return (
        <div className='navbarFixed position-fixed top-0 start-0 end-0 '>
            <nav className="navbar navbar-expand-lg backgroundColer2 fw-bold ">
                <div className="container-fluid "> 
                    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavAltMarkup">
                        <a className="navbar-brand fw-bold fs-3 text-white" href="#">START REACT</a>
                        <div className="navbar-nav ">
                            <a className="nav-link active text-white" aria-current="page" href="#">PORTFOLIO</a>
                            <a className="nav-link active ps-4 text-white" aria-current="page" href="#">ABOUT</a>
                            <a className="nav-link active ps-4 text-white" aria-current="page" href="#">CONTACT</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
