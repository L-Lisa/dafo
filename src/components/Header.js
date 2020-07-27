import React, { useState } from "react"
import styled from 'styled-components/macro'
import DafoBlack from "..//images/DafoBlack.jpg"
import { Link, NavLink } from "react-router-dom"
import facebookicon from "..//images/facebookicon.png"
import youtubeicon from "..//images/youtubeicon.png"


export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (


        < HeaderWrapper >
            <TopHeader>
                <div className="social-media">
                    <span className="facebook-box">
                        <a href="https://www.facebook.com/dafobrand"><img src={facebookicon} alt="Dafo Facebook link" /></a>
                    </span>
                    <span>
                        < a href="https://www.youtube.com/user/dafobrand"><img src={youtubeicon} alt="Dafo youtube link" /></a>
                    </span>
                </div>
                <div className="mini-nav">
                    <Link to="/downloads">Downloads</Link>
                    <Link to="/contact-us">Contact</Link>
                    <Link to="/">Home</Link>
                </div>
            </TopHeader>

            <LogoHeader>
                <span className="logo-box">
                    <Link to="/"><img src={DafoBlack} alt="Dafo Middle East" /></Link>
                </span>
            </LogoHeader>
            <Nav>
                <>
                    <Hamburger>
                        <div class="container" onClick={() => setShowMenu(!showMenu)}>
                            <div class="bar1"></div>
                            <div class="bar2"></div>
                            <div class="bar3"></div>
                        </div>
                    </Hamburger>
                    {showMenu &&
                        <ul>
                            <li>
                                <NavLink to="#products">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="#services">Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="#archives">Archives</NavLink>
                            </li>
                            <li>
                                <NavLink to="#about">About Dafo</NavLink>
                            </li>
                            <li>
                                <NavLink to="#news">News</NavLink>
                            </li>
                        </ul>
                    }
                </>
            </Nav>
            <InlineNav>
                <ul>
                    <li>
                        <NavLink to="#products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="#services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="#archives">Archives</NavLink>
                    </li>
                    <li>
                        <NavLink to="#about">About Dafo</NavLink>
                    </li>
                    <li>
                        <NavLink to="#news">News</NavLink>
                    </li>
                </ul>
            </InlineNav>
        </HeaderWrapper >

    )
}

const HeaderWrapper = styled.main`
background:white;
box-sizing:border-box;
width:100%;
position: -webkit-sticky;
position: sticky;
top: 0;
`;

const TopHeader = styled.section`
background:black;
padding:10px;
height:50px;
display:flex;
justify-content:space-between;
div{
    width:auto;
    display:flex;
    align-items: center;
}
span img{
    width: auto;
    max-height: 30px;
    margin: 4px;
}
.mini-nav a{
    color:white;
    text-decoration:none;
    margin:6px;
}
`;

const LogoHeader = styled.div`
background:white;
min-height:40px;
width:auto;
display:none;
@media(min-width:676px){
    display:inline;
}
`;

const Nav = styled.nav`
background:white;
ul{
    list-style:none;
    text-decoration:none;
}
li{
    
}
a{
    text-decoration:none;
    color: #1c1c1c;
}
`;
const Hamburger = styled.div`
.container {
  display: inline-block;
  cursor: pointer;
  @media(min-width:676px){
    display:none;
}
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}
`;
const InlineNav = styled.ul`
width:100%;
display:none;
background:white;
@media(min-width:676px){
    display:inline;
    ul{
    list-style:none;
    display:flex;
    justify-content: space-evenly;
} a{
text-decoration:none;
color:#626262;
}
}
`;