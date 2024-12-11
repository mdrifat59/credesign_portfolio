import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Experience = () => {
    const [title, setTitle] = useState('')
    const [heading, setHeading] = useState('')
    const [showCircule, setShowCircule] = useState('')
    const [education, setEducation] = useState([])
    const [soft, setSoft] = useState([])
    const [experiance, setExperiance] = useState([])
    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/resumeitem')
            setTitle(data.title)
            setHeading(data.heading)
            setShowCircule(data.showCircule)
        }
        async function fatchEduData() {
            const { data } = await axios.get('http://localhost:8000/resumeeducationitem')
            setEducation(data)
        }
        async function fatchsoftData() {
            const { data } = await axios.get('http://localhost:8000/resumesoftitem')
            setSoft(data)

        }
        async function fatchexperianceData() {
            const { data } = await axios.get('http://localhost:8000/resumeexperianceitem')
            setExperiance(data)

        }
        fatchexperianceData()
        fatchsoftData()
        fatchEduData()
        fatchData()
    }, [])
    return (
        <section id="experience">
            <div className="container">
                <div className="heading">
                    <div className="banner-circal">
                        {
                            showCircule &&
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                        }
                        <h4>{title}</h4>
                    </div>
                    <h2>{heading}</h2>
                </div>
                <div className="exparience-content">
                    <h4>Education</h4>
                    <div className="exparience-subcontent">
                        {
                            education.map((item) => (
                                <div className="exparience-box">
                                    <div className="exparience-box-content">
                                        <h4>{item.eduHeading}</h4>
                                        <h5>{item.eduTitle}</h5>
                                        <p>{item.eduDes}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="exparience-content">
                    <h4>Software Skills</h4>
                    <div className="exparience-subcontent">
                        {
                            soft.map((item) => (

                                <div className="exparience-box">
                                    <div className="exparience-box-content">
                                        <h4>{item.sofHeading}</h4>
                                        <h5>{item.sofTitle}</h5>
                                        <p>{item.sofDes}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="exparience-content">
                    <h4>Experience</h4>
                    <div className="exparience-subcontent">
                        {
                            experiance.map((item) => (
                                <div className="exparience-box">
                                    <div className="exparience-box-content">
                                        <h4>{item.expHeading}</h4>
                                        <h5>{item.expTitle}</h5>
                                        <p>{item.expDes}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience