import React from 'react'

const Footer = () => {
    return (
        <section id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-fast">
                        <img src="./image/footer.png" alt="" />
                        <p>At vero eos et accusamus et iusto odio dign ducimus qui blanditiis praesentium volup deleniti
                            atque corrupti quos dolores et molestias excepturi sint occaecati </p>
                        <h4>credesign@gmail.com</h4>
                    </div>
                    <div className="footer-second">
                        <h2>Explore Link</h2>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Resume</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div className="footer-second">
                        <h2>My Services</h2>
                        <ul>
                            <li><a href="#">UI/UX Design</a></li>
                            <li><a href="#">Mobile App</a></li>
                            <li><a href="#">Graphics Design</a></li>
                            <li><a href="#">Web Developer</a></li>
                        </ul>
                    </div>
                    <div className="footer-second">
                        <h2>Follow me</h2>
                        <ul>
                            <li className="li">
                                <button>
                                    <img src="./image/Facebook.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/twitter.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/Dribbble.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/behance.png" alt="" />
                                </button>
                            </li>
                            <li className="address">
                                <div>
                                    <img src="./image/footerimg.png" alt="" />
                                </div>
                                <p>202 Dog Hill Lane Beloit, KS 67420</p>
                            </li>
                            <li className="address">
                                <div>
                                    <img src="./image/footerimg2.png" alt="" />
                                </div>
                                <p>1-800-915-6270</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="subfooter">
                    <div className="subfooter-left">
                        <h4>All rights reserved</h4>
                        <div>
                            <img src="./image/subfooter.png" alt="" />
                        </div>
                        <h4>2023 Credesign</h4>
                    </div>
                    <div className="subfooter-right">
                        <h5>Terms & Condition</h5>
                        <h5>Privacy policy</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer