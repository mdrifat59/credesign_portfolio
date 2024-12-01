import React, { useEffect, useState } from 'react'
import axios from "axios"

const Navbar = () => {
    const [list, setList] = useState([])
    const [buttonText, setButtonText] = useState('')
    const [buttonShow, setButtonShow] = useState(false)
    useEffect(() => {
        async function fetchData() {
            const data = await axios.get("http://localhost:8000/navbaritem")
            setList(data.data.menuItem.split(","))
            setButtonText(data.data.buttonText)
            setButtonShow(data.data.buttonShow)
        }
        fetchData()

    }, [])
    return (
        <nav id="nav">
            <div className="container">
                <div className="nav-main">
                    <div>
                        <img src="./image/Logo.png" alt="" />
                    </div>
                    <div className="nav-list">
                        <ul>
                            {list.map((item) => (
                                <li><a href="#">{item}</a> </li>
                            ))}
                        </ul>
                    </div>
                    {
                        buttonShow &&
                        <div>
                            <button className="nav-button">{buttonText}</button>
                        </div>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar