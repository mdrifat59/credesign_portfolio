import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        async function fatchData() {
            const data = await
                axios.get('http://localhost:8000/serviceitem').then((res) => {
                    setServices(res.data)
                })

        }
        fatchData()
    }, [])
    return (
        <section id="service">
            <div className="container">
                <div className="service-contant">
                    <div className="heading">
                        <div className="banner-circal">
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                            <h4>My Service</h4>
                        </div>
                        <h2>Services I offer</h2>
                    </div>
                    <div className="service-offer">
                        {
                            services.map((item) => (

                                <div className="service-box">
                                    {
                                        item.showImage &&
                                        <img src={`http://localhost:8000/${item.image}`} alt="logo" />
                                    }
                                    <h4>{item.title}</h4>
                                    <p>{item.subTitle}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service