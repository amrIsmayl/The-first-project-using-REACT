import React from 'react'
import cabin2 from "./image2vector (2).svg"
import cabin1 from "./image2vector (1).svg"
import cabin3 from "./image2vector (3).svg"
import cabin4 from "./image2vector (4).svg"
import cabin5 from "./image2vector (5).svg"
import cabin6 from "./image2vector.svg"

export default function () {
    return (
        <div className=' py-5'>
            <div className=' text-center'>
                <h1 className=' fw-bold'>PORTFOLIO</h1>
                <div className='lineTitle position-relative py-3 w-25 m-auto'>
                    <i class=" fa-solid fa-star fs-2"></i>
                </div>
            </div>

            <div className=' container'>
                <div className=' row g-5'>
                    <div className=' col-md-4  '>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin6} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-4'>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin1} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-4'>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin2} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-4'>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin3} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-4'>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin4} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                    <div className=' col-md-4'>
                        <div className=' position-relative overflow-hidden'>
                            <img src={cabin5} className=' w-100 rounded-3 ' />
                            <div className='overImg d-flex align-items-center justify-content-center w-100 h-100 position-absolute top-0 start-0 end-0 bottom-0'>
                                <span className=' plus'>+</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
