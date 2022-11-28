import React from 'react'
import './style.css'

const Navbar = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ms-2" href="/home">Project Name</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-item nav-link active" href="/home">Home</a>
            <a class="nav-item nav-link" href="/upload">Upload Image</a>
            <a class="nav-item nav-link" href="/about">About Us</a>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;