import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Footer = () => {
    const [description, setDescription] = useState('')
    const [email, setEmail] = useState('')
    const [explore, setExplore] = useState([])
    const [service, setService] = useState([])
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    useEffect(() => {
        async function fatchData() {
            const { data } = await axios.get('http://localhost:8000/footeritem')
            setAddress(data.address)
            setDescription(data.description)
            setEmail(data.email)
            setPhone(data.phone)
            setExplore(data.explore.split(","))
            setService(data.service.split(','))
        }
        fatchData()
    }, [])
    return (
        <section id="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-fast">
                        <img src="./image/footer.png" alt="" />
                        <p>{description}</p>
                        <h4>{email}</h4>
                    </div>
                    <div className="footer-second">
                        <h2>Explore Link</h2>
                        <ul>
                            {
                                explore.map((item, index) => (
                                    <li key={index}><a href="#">{item}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="footer-second">
                        <h2>My Services</h2>
                        <ul>
                            {
                                service.map((item, index) => (
                                    <li key={index}><a href="#">{item}</a></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="footer-second">
                        <h2>Follow me</h2>
                        <ul>
                            <li className="li">
                                <button>
                                    <img src="./image/Facebook.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/twitter.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/Dribbble.png" alt="" />
                                </button>
                                <button>
                                    <img src="./image/behance.png" alt="" />
                                </button>
                            </li>
                            <li className="address">
                                <div>
                                    <img src="./image/footerimg.png" alt="" />
                                </div>
                                <p>{address}</p>
                            </li>
                            <li className="address">
                                <div>
                                    <img src="./image/footerimg2.png" alt="" />
                                </div>
                                <p>{phone}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="subfooter">
                    <div className="subfooter-left">
                        <h4>All rights reserved</h4>
                        <div>
                            <img src="./image/subfooter.png" alt="" />
                        </div>
                        <h4>2023 Credesign</h4>
                    </div>
                    <div className="subfooter-right">
                        <h5>Terms & Condition</h5>
                        <h5>Privacy policy</h5>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer