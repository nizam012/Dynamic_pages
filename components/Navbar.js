import {BiNavigation} from 'react-icons/bi'

function Navbar() {
    return (
        <div className="nav-bar1 ">
            <div className="container">
                <ul className="nav-items d-flex  ">
                    <li className="items">Bootcamps <BiNavigation size={13} /> </li>
                    <li className="items">Courses</li>
                    <li className="items">Enterprise</li>
                    <li className="items">Resources</li>
                    <li className="items">More</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
