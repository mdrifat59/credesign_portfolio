import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Testimonial = () => {
    const [testimonial, setTestimonial] = useState([])
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/testimonialitem')
            setTestimonial(data)
        }
        fatchData()
    }, [])
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
                    {
                        testimonial.map((item, index) => (

                            <div key={index} className="testimonial-box">
                                <div className="testimonial-heading">
                                    <img src={`http://localhost:8000/${item.image}`} alt="" />
                                    <div>
                                        <h4>{item.heading}</h4>
                                        <h5>{item.title}</h5>
                                    </div>
                                </div>
                                <p>{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Testimonial