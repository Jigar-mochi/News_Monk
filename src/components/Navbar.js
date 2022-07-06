// import PropTypes from 'prop-types'
import React from 'react'
import logo from './logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src={logo} alt="logo" style={{ width: '50px', marginRight: '10px' }} />
                    <a className="navbar-brand" href="/">NewsMonk</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><a className="nav-link" aria-current="page" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/business">Business</a></li>
                            <li className="nav-item"><a className="nav-link" href="/entertainment">Entertainment</a></li>
                            <li className="nav-item"><a className="nav-link" href="/health">Health</a></li>
                            <li className="nav-item"><a className="nav-link" href="/science">Science</a></li>
                            <li className="nav-item"><a className="nav-link" href="/sports">Sports</a></li>
                            <li className="nav-item"><a className="nav-link" href="/technology">Technology</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
