import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios' 

const Banner = () => {
    const [subHeading, setSubHeading] = useState("")
    const [heading, setHeading] = useState("")
    const [paragraph, setParagrapha] = useState("")
    const [buttonText, setButtonText] = useState("")
    const [buttonShow, setButtonShow] = useState(false)
    const [circuleShow, setCirculeShow] = useState(false) 

    useEffect(() => {
        async function fatchData() {
            const data = await axios.get('http://localhost:8000/banneritem')
            setSubHeading(data.data.subHeading)
            setHeading(data.data.heading)
            setParagrapha(data.data.paragraph)
            setButtonText(data.data.buttonText)
            setButtonShow(data.data.buttonShow)
            setCirculeShow(data.data.circuleShow)  
        }
        fatchData()
    }, [])
    return (
        <section id="banner">
            <div className="container">
                <div className="banner-main">
                    <div className="banner-left">

                        <div className="banner-circal">
                            {
                                circuleShow &&
                                <div className="banner-circal-1">
                                    <div className="banner-circal-2"></div>
                                </div>
                            }
                            <h4>{subHeading}</h4>
                        </div>
                        <h2>{heading}</h2>
                        <p>{paragraph}</p>
                        {
                            buttonShow &&
                            <button className="nav-button">{buttonText}</button>
                        }
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