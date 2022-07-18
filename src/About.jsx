import React from 'react'

export default function About() {
    return (
        <div className=' py-5 backgroundColer'>
            <div className=' text-center'>
                <h1 className=' text-white'>ABOUT</h1>
                <div className='starAbout position-relative py-3 w-25 m-auto'>
                    <i class=" fa-solid fa-star fs-2 text-white"></i>
                </div>
            </div>

            <div>
                <div className=' container py-4'>
                    <div className=' row text-white'>
                        <div className=' col-md-4 offset-2 px-5'>
                            <p>
                            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>

                        <div className=' col-md-4 px-5'>
                            <p>
                            You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                            </p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
