import React, { useState } from "react"
import styled from 'styled-components/macro'
import dafoMEred from "..//images/dafoMEred.jpg"
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
                <MiniNav>
                    <NavLink to="/downloads">Downloads</NavLink>
                    <NavLink to="/contact-us">Contact</NavLink>
                    <NavLink to="/">Home</NavLink>
                </MiniNav>
            </TopHeader>

            <LogoHeader>

                <Link to="/"><img src={dafoMEred} alt="Dafo Middle East" /></Link>

            </LogoHeader>
            <Nav>
                <>
                    <Hamburger>
                        <div className="container" onClick={() => setShowMenu(!showMenu)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </Hamburger>
                    {showMenu &&
                        <ul>
                            <li>
                                <NavLink to="/bus">Buses</NavLink>
                            </li>
                            <li>
                                <NavLink to="/powergenerators">Power Generators</NavLink>
                            </li>
                            <li>
                                <NavLink to="/mining-constructon">Mining & Construction</NavLink>
                            </li>
                            <li>
                                <NavLink to="/downloads">Info</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact-us">Contant</NavLink>
                            </li>
                        </ul>
                    }
                </>
            </Nav>
            <InlineNav>
                <ul>
                    <li>
                        <NavLink to="/powergenerators">Power Generators</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bus">Buses</NavLink>
                    </li>

                    <li>
                        <NavLink to="/mining-constructon">Mining & Construction</NavLink>
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
`;
const MiniNav = styled.div`
a{
    display:none;
    color:white;
    text-decoration:none;
    margin:6px;
    transition: transform .2s;
    &:hover{
        color:gray;
        transform: scale(1.1);
    }
@media(min-width:320px){
    display:inline; 
}}

`;
const LogoHeader = styled.div`
display:none;
img{
width: 150px;
padding: 20px;
}
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
  border-radius:2px;
}
`;
const InlineNav = styled.ul`
display:none;
background:white;
ul{
    width: 100%;
    list-style:none;
    display:flex;
    justify-content: center;
    padding:20px 10px;
    background:#a5a4a61c;
}
a{
text-decoration:none;
transition: transform .2s;
padding:0 16px 0 0 ;
color:#626262;
&:hover{
        color:black;
}}
li{
    transition: transform .2s;
    &:hover{
        border-radius:5%;
        transform: scale(1.1);
    }}
@media(min-width:676px){
    display:inline;
    }
`;