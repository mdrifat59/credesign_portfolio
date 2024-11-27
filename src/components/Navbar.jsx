import React from 'react'

const Navbar = () => {
    return (
        <nav id="nav">
            <div className="container">
                <div className="nav-main">
                    <div>
                        <img src="./image/Logo.png" alt="" />
                    </div>
                    <div className="nav-list">
                        <ul>
                            <li><a href="#">Home</a> </li>
                            <li><a href="#">About</a> </li>
                            <li><a href="#">Services</a> </li>
                            <li><a href="#">Resume</a> </li>
                            <li><a href="#">Portfolio</a> </li>
                            <li><a href="#">Testimonial</a> </li>
                            <li><a href="#">Blog</a> </li>
                        </ul>
                    </div>
                    <div>
                        <button className="nav-button">Contact Us</button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar