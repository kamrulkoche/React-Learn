import React from 'react'
import "../App.css"

export default function Footer() {
    return (
        <>
            <div className='bg-light p-4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-8'>
                            <h3>Newsletter Subscription.</h3>
                            <p className='widthSmall'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis sit adipisci exercitationem assumenda</p>
                        </div>
                        <div className='col-md-4'>
                            <div className='input-group '>
                                <input type='text' className='form-control' placeholder='Enter your Email' />
                                <p className=''><img src="img/send.svg" alt="" className='input-group-text mt-3' /></p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center mt-3'>copyright all </p>
            </div>

        </>
    )
}
