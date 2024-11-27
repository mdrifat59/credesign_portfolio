import React from 'react'

const Testimonial = () => {
    return (
        <section id="testimonial">
            <div className="container">
                <div className="heading">
                    <div className="banner-circal">
                        <div className="banner-circal-1">
                            <div className="banner-circal-2"></div>
                        </div>
                        <h4>Testimonial</h4>
                    </div>
                    <h2>Client Feedback</h2>
                </div>
                <div className="testimonial-content">
                    <div className="testimonial-box">
                        <div className="testimonial-heading">
                            <img src="./image/testimonial.png" alt="" />
                            <div>
                                <h4>Siam Talukder</h4>
                                <h5>CTO, Xyz Group</h5>
                            </div>
                        </div>
                        <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>
                    <div className="testimonial-box">
                        <div className="testimonial-heading">
                            <img src="./image/testimonial2.png" alt="" />
                            <div>
                                <h4>ABM Shawon Islam</h4>
                                <h5>CEO, Abc Agency</h5>
                            </div>
                        </div>
                        <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>
                    <div className="testimonial-box">
                        <div className="testimonial-heading">
                            <img src="./image/testimonial3.png" alt="" />
                            <div>
                                <h4>Azmir Uddin Alif</h4>
                                <h5>Director, Techso</h5>
                            </div>
                        </div>
                        <p>“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                            classNameical Latin literature fr45 BC, mak it over 2000 years old.</p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Testimonial