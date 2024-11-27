import React from 'react'

const Contact = () => {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="heading">
                        <div className="banner-circal">
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                            <h4>My Contact</h4>
                        </div>
                        <h2>I WANT TO HEAR FROM YOU</h2>
                    </div>
                    <div className="contact-content">
                        <div className="contact-left">
                            <input type="text" placeholder="Your name" />
                            <input type="email" placeholder="Your email" />
                            <input type="number" placeholder="Your phone" />
                            <input type="text" placeholder="Subject" />
                            <textarea name="" placeholder="Your masage"></textarea>
                            <button className="nav-button">Send Me Message</button>
                        </div>
                        <div className="contact-right">
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group1.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Address</h3>
                                    <p>202 Dog Hill Lane Beloit, KS 67420</p>
                                </div>
                            </div>
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group2.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Phone</h3>
                                    <p>+01589634755</p>
                                </div>
                            </div>
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group3.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Email</h3>
                                    <p>credesign@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact