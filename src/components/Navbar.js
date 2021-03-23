import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <h1>ANKI<span> Apprendo</span></h1>
            </div>
            <nav>
                <a href="/">Home</a>
                <a href="/my-cards">View My Cards</a>
                <a href="/about-us">About</a>
            </nav>
        </div>
    )
}

export default Navbar