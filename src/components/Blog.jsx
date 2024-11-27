import React from 'react'

const Blog = () => {
    return (
        <section id="blog">
            <div className="container">
                <div className="heading">
                    <div className="banner-circal">
                        <div className="banner-circal-1">
                            <div className="banner-circal-2"></div>
                        </div>
                        <h4> My Blog</h4>
                    </div>
                    <h2>LATEST BLOG</h2>
                </div>
                <div className="blog-content">
                    <div className="blog-box">
                        <img src="./image/blog.png" alt="" />
                        <div className="blog-heading">
                            <p>20 January, 2023</p>
                            <h2>Become a UX/UI Designer With Career Foundry.</h2>
                            <div className="blog-footer">
                                <h4>Read More</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                    fill="#FF6B00">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img src="./image/blog2.png" alt="" />
                        <div className="blog-heading">
                            <p>15 January, 2023</p>
                            <h2>The Best App Development For Your Business Plan.</h2>
                            <div className="blog-footer">
                                <h4>Read More</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                    fill="#FF6B00">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="blog-box">
                        <img src="./image/blog3.png" alt="" />
                        <div className="blog-heading">
                            <p>8 January, 2023</p>
                            <h2>The Best Portfolio For Agency Design Thinking</h2>
                            <div className="blog-footer">
                                <h4>Read More</h4>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                    fill="#FF6B00">
                                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog