import React from 'react'

export default function Footer() {
    return (
        <div>
            <div className=' backgroundColer2 text-white py-5'>
                <div className=' container pt-5'>
                    <div className=' row text-center '>

                        <div className=' col-md-4'>
                            <h4>LOCATION</h4>
                            <p className=' mb-0 mt-3'>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>

                        <div className=' col-md-4'>
                            <h4>AROUND THE WEB</h4>
                            <div className=' d-flex justify-content-center mt-3'>

                                <a class="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!">
                                    <i class="fab fa-fw fa-facebook-f fs-5"></i>
                                </a>

                                <a class="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!">
                                    <i class="fab fa-fw fa-twitter fs-5"></i>
                                </a>

                                <a class="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!">
                                    <i class="fab fa-fw fa-linkedin fs-5"></i>
                                </a>

                                <a class="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!">
                                    <i class="fab fa-fw fa-dribbble fs-5"></i>
                                </a>

                            </div>
                        </div>

                        <div className=' col-md-4'>
                            <h4>ABOUT FREELANCER</h4>
                            <p className=' mb-0 mt-3'>Freelance is a free to use, MIT</p>
                            <p className=' px-5'>licensed Bootstrap theme created by Route</p>
                        </div>

                    </div>

                </div>
            </div>

            <div className='end text-center pt-4 pb-2'>
                <p className=' text-white fontEnd'>Copyright © Your Website 2021</p>

            </div>

        </div>
    )
}
