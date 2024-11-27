import React from 'react'

const Banner = () => {
    return (
        <section id="banner">
            <div className="container">
                <div className="banner-main">
                    <div className="banner-left">
                        <div className="banner-circal">
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                            <h4>I AM DESIGNER</h4>
                        </div>
                        <h2>Creative Design and Web Solutions</h2>
                        <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod
                            maxime
                            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
                            quibusdam et.</p>
                        <button className="nav-button">Download My CV</button>
                    </div>
                    <div className="banner-right">
                        <img src="./image/banner.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner