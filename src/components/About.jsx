import React from 'react'

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-left">
                        <img src="./image/about.png" alt="" />
                    </div>
                    <div className="about-right">
                        <div className="banner-circal">
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                            <h4>About Me</h4>
                        </div>
                        <h2>I Can Design Anything You Want</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime
                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et aut officiis. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit.</p>
                        <div className="project">
                            <div className="project-left">
                                <img src="./image/right.png" alt="" />
                                <div className="project-common">
                                    <h5>350+</h5>
                                    <p>Complete Project</p>
                                </div>
                            </div>
                            <div className="project-right">
                                <img src="./image/clock.png" alt="" />
                                <div className="project-common">
                                    <h5>350+</h5>
                                    <p>Complete Project</p>
                                </div>
                            </div>
                        </div>
                        <div className="check">
                            <div className="check-main">
                                <img src="./image/check.png" alt="" />
                                <h4>Work simple and cline desi gn</h4>
                            </div>
                            <div className="check-main">
                                <img src="./image/check.png" alt="" />
                                <h4>New idea and user friendly design</h4>
                            </div>
                        </div>
                        <button className="nav-button">Download My CV</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About