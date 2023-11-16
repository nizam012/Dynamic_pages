import React from 'react'
import { BsTelephoneFill, BsFacebook } from 'react-icons/bs'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { AiFillLinkedin, AiOutlineYoutube } from 'react-icons/ai'

function Blog() {
    return (
        <div>
            <div className="  blue">
                <div className="  topnav ">
                    <div className="container number1 d-flex justify-content-between">

                        <div className="top d-flex  ">
                            <a className='top-1 m-2' href="#"><BsTelephoneFill />+3848791282</a>
                            <a className='top-1 m-2' href="#"> +0000000000</a>
                            <a className='top-1 m-2' href="#"> +0000000000</a>
                        </div>
                        <div className="social-icons d-flex ">
                            <BsFacebook className='top-icons' />
                            <FaSquareXTwitter className='top-icons' />
                            <AiFillLinkedin className='top-icons' />
                            <AiOutlineYoutube className='top-icons' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
