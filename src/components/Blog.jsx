import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = () => {
    const [blog, setBlog] = useState([])
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/blogitem')
            setBlog(data)
        }
        fatchData()
    }, [])
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
                    {
                        blog.map((item, index) => (
                            <div key={index} className="blog-box">
                                <img src={`http://localhost:8000/${item.image}`} alt="" />
                                <div className="blog-heading">
                                    <p>{item.date}</p>
                                    <h2>{item.description}</h2>
                                    <div className="blog-footer">
                                        <h4>Read More</h4>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                                            fill="#FF6B00">
                                            <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog