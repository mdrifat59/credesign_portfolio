import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [subject, setSubject] = useState('')
    const [massage, setMassage] = useState('')
    const [contact, setContact] = useState([])

     
    const handleSendMessage = () => {
        console.log(name, email, phone, subject, massage),
        axios.post('http://localhost:8000/email', { name, email, phone, subject, massage }).then((res) => {
            console.log(res);
            setEmail('')
            setMassage('')
            setName('')
            setPhone('')
            setSubject('')
        }).catch((err) => {
            console.log(err);

        }) 
    }

    useEffect(()=>{
            async function fatchData() {
                const {data} = await axios.get('http://localhost:8000/contactitem')
                setContact(data)  
            }
            fatchData()
        },[])
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="heading">
                        <div className="banner-circal">
                            <div className="banner-circal-1">
                                <div className="banner-circal-2"></div>
                            </div>
                            <h4>My Contact</h4>
                        </div>
                        <h2>I WANT TO HEAR FROM YOU</h2>
                    </div>
                    <div className="contact-content">
                        <div className="contact-left">
                            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Your name" />
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Your email" />
                            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="number" placeholder="Your phone" />
                            <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder="Subject" />
                            <textarea value={massage} onChange={(e) => setMassage(e.target.value)} name="" placeholder="Your masage"></textarea>
                            <button onClick={handleSendMessage} className="nav-button">Send Me Message</button>
                        </div>
                        <div className="contact-right">
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group1.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Address</h3>
                                    <p>{contact.address}</p>
                                </div>
                            </div>
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group2.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Phone</h3>
                                    <p>{contact.phone}</p>
                                </div>
                            </div>
                            <div className="contact-right-content">
                                <div className="contact-right-content-fast">
                                    <img src="./image/Group3.png" alt="" />
                                </div>
                                <div className="contact-right-content-last">
                                    <h3>Email</h3>
                                    <p>{contact.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact