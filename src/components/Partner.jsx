import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Partner = () => {
    const [partner, setPartner] = useState([])
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/partneritem')
            setPartner(data)
        }
        fatchData()
    }, [])
    return (
        <section id="partner">
            <div className="container">
                <div className="heading">
                    <div className="banner-circal">
                        <div className="banner-circal-1">
                            <div className="banner-circal-2"></div>
                        </div>
                        <h4>Partners</h4>
                    </div>
                    <h2>REPUTED PARTNER</h2>
                </div>
                <div className="patner-content">
                    {
                        partner.map((item, index) => ( 
                            <div key={index} className="patner-box">
                                <img src={`http://localhost:8000/${item.image}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Partner