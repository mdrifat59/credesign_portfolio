import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Portfolio = () => {
    const [portfolio, setPortfolio] = useState([])
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/portfolioitem')
            setPortfolio(data)
        }
        fatchData()
    }, [])
    return (
        <section id="portfolio">
            <div className="container">
                <div className="heading">
                    <div className="banner-circal">
                        <div className="banner-circal-1">
                            <div className="banner-circal-2"></div>
                        </div>
                        <h4>My Portfolio</h4>
                    </div>
                    <h2>VISIT MY PORTFOLIO</h2>
                </div>
                <div className="portfolio-content">
                    {
                        portfolio.map((item) => ( 
                            <div className="portfolio-box">
                                <img src={`http://localhost:8000/${item.image}`} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Portfolio