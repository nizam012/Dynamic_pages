import React from 'react'
import { IoIosContact } from 'react-icons/io'
import { PiEyeClosedBold } from 'react-icons/pi'
import { GrDocumentTime } from 'react-icons/gr'

function Banner({ data }) {
    return (
        <div className="body1">
            <div className="container  ">
                <h4 className='body1-h4' >{data.slug}</h4>
                <div className="box d-flex justify-content-around">
                <h4 className='body1-h4' >{data.heading}</h4>
                </div>
            </div>
        </div>
    )
}

export default Banner
