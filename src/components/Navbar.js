import React, { useState } from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const [linkItem, setLinkItem] = useState('description')

    const sttClick = () => {
        setLinkItem('speechtotext');
    }
    const homeClick = () => {
        setLinkItem('home');
    }
    const desc = () => {
        setLinkItem('');
    }
    return (
        <>
            <nav class={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
                <div class="container-fluid">
                    <Link className='navbar-brand' to="/" onClick={desc}>
                        {props.title}
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${linkItem === 'home' ? 'active' : ''}`} aria-current="page" to="/home" onClick={homeClick}>
                                    TextAnalysis
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">

                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${linkItem === 'speechtotext' ? 'active' : ''}`} aria-current="page" to="/speechtotext" onClick={sttClick}>
                                    SpeechToText
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                 <Link className="nav-link" to="/">
                                    {props.aboutText}
                                 </Link>
                            </li> */}
                        </ul>
                        <form class="d-flex" role="search">
                            <button class="btn btn-primary mx-2" type="submit"> <a href="https://644cd721ac9d3670a844a982--samurai007.netlify.app/" className="nav-link" rel="noreferrer" target="_blank" >AI Text Summarizer</a></button>
                            <div className="form-check form-switch mt-1">

                                <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" />
                                <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">Dark mode</label>

                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

Navbar.prototype = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
Navbar.defaultProps = {
    title: "Title text",
    aboutText: "About"
}





