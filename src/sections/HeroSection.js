import React from 'react'
import logo from "../static/images/logos/logo.svg";
import { Link } from "react-router-dom";
import Layout from "../components/layout";

function HeroSection() {
    return (
        <>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Elizabeth | Design System</h1>
                <p>Welcome to your new site.</p>
                <Link to="/page-2/">Go to page 2</Link> <br />
            </header>
        </>
    )
}
export default HeroSection
