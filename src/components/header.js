import React from 'react'
import d20 from '../assets/icons/trans_d20.png';

function Header() {
    return (
        <div class="header">
            <a href="" class="logo">
                <img height={50} width={50} src={d20}/>
            </a>
            <div class="header-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>
    )
}

export default Header