import React from 'react';
import logo from "./avataaars.svg"


export default function Home() {
    return (
        <div className=' vh-100 d-flex justify-content-center align-items-center' id='Home'>

            <div className=' text-center text-white'>
                <img src={logo} alt="Logo" className=' w-50' />
                <h1 className=' fw-bold h1-home '>START REACT</h1>
                <div className='star position-relative py-3'>
                    <i class=" fa-solid fa-star fs-2 "></i>
                </div>
                <p className=' fs-4 pt-2'>Graphic Artist - Web Designer - Illustrator</p>
            </div>
        </div>
    )
}
