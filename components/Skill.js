import React from 'react'
    import {CgMenuGridO} from 'react-icons/cg'

function Skill() {
  return (
    <div className="container">
        <div className="nav-bar d-flex justify-content-between ">
            <p className="logo">Skilldots</p>
            <div className="nav-right  d-flex ">
                <button className='categoty-bt' > <CgMenuGridO/> Categories </button>
                <input className='search1 p-2' type="text" placeholder="Search For Courses" />
            </div>
        </div>
    </div>
  )
}

export default Skill
