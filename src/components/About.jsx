import React, { useState, useEffect } from 'react'
import axios from 'axios'

const About = () => {
    const [subHeading, setSubHeading] = useState('');
    const [heading, setHeading] = useState('');
    const [buttonText, setButtonText] = useState('');
    const [paragraph, setParagraph] = useState('');
    const [buttonShow, setButtonShow] = useState(false);
    const [circuleShow, setCirculeShow] = useState(false);
    const [title_1, setTitle_1] = useState('')
    const [title_2, setTitle_2] = useState('')
    const [bagTitle_1, setBagTitle_1] = useState('')
    const [bagTitle_2, setBagTitle_2] = useState('')
    const [bagNumber_1, setBagNumber_1] = useState('')
    const [bagNumber_2, setBagNumber_2] = useState('')

    useEffect(() => {
        async function fatchData() {
            const data = await axios.get('http://localhost:8000/aboutitem')
            setSubHeading(data.data.subHeading)
            setHeading(data.data.heading)
            setButtonText(data.data.buttonText)
            setButtonShow(data.data.buttonShow)
            setParagraph(data.data.paragraph)
            setCirculeShow(data.data.circuleShow)
            setTitle_1(data.data.title_1)
            setTitle_2(data.data.title_2)
            setBagNumber_1(data.data.bagNumber_1)
            setBagNumber_2(data.data.bagNumber_2)
            setBagTitle_1(data.data.bagTitle_1)
            setBagTitle_2(data.data.bagTitle_2)
        }
        fatchData()
    }, [])
    return (
        <section id="about">
            <div className="container">
                <div className="about-main">
                    <div className="about-left">
                        <img src="./image/about.png" alt="" />
                    </div>
                    <div className="about-right">
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
                        <div className="project">
                            <div className="project-left">
                                <img src="./image/right.png" alt="" />
                                <div className="project-common">
                                    <h5>{bagNumber_1}</h5>
                                    <p>{bagTitle_1}</p>
                                </div>
                            </div>
                            <div className="project-right">
                                <img src="./image/clock.png" alt="" />
                                <div className="project-common">
                                    <h5>{bagNumber_2}</h5>
                                    <p>{bagTitle_2}</p>
                                </div>
                            </div>
                        </div>
                        <div className="check">
                            <div className="check-main">
                                <img src="./image/check.png" alt="" />
                                <h4>{title_1}</h4>
                            </div>
                            <div className="check-main">
                                <img src="./image/check.png" alt="" />
                                <h4>{title_2}</h4>
                            </div>
                        </div>
                        {
                            buttonShow &&
                            <button className="nav-button">{buttonText}</button>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About