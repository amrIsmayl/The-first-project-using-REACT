import React from 'react'

export default function Contact() {
    return (
        <div className=' py-5'>
            <div className=' text-center'>
                <h1 className=' fw-bold'>CONTACT ME</h1>
                <div className='lineTitle position-relative py-3 w-25 m-auto'>
                    <i class=" fa-solid fa-star fs-2"></i>
                </div>
            </div>

            <div className=' container py-5'>
                <div className=' row'>
                    <div className=' col-md-7 m-auto'>

                        <div className=' inp py-4'>
                            <input type="text" placeholder='Name' className=' w-100 p-2 border-0' required="required" />
                        </div>

                        <div className=' inp py-4'>
                            <input type="email" placeholder='Email Address' className=' w-100 p-2 border-0' required="required" />
                        </div>

                        <div className=' inp py-4'>
                            <input type="text" placeholder='Phone Number' className=' w-100 p-2 border-0' required="required" />
                        </div>

                        <div className=' inp pt-4 pb-5 mb-5'>
                            <input type="text" placeholder='message' className=' w-100 p-2 border-0' required="required" />
                        </div>

                        <div className="form-group pt-5" >
                            <button class="btn btn-success btn-xl py-3 px-4 mt-5" id="sendMessageButton" type="submit">Send</button>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}
