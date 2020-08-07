import React, { useState } from "react"
import styled from 'styled-components/macro'
import dafoMEred from "..//images/dafoMEred.jpg"
import { Link, NavLink } from "react-router-dom"
import facebookicon from "..//images/facebookicon.png"
import youtubeicon from "..//images/youtubeicon.png"
import twittericon from "..//images/twittericon.png"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        < HeaderWrapper >
            <TopHeader>
                <SocialMediaBox>
                    < a href="https://www.youtube.com/user/dafobrand"><LogoIcon src={youtubeicon} alt="Dafo youtube link" /></a>
                    <a href="https://www.facebook.com/dafobrand"><LogoIcon src={facebookicon} alt="Dafo Facebook link" /></a>
                    < a href="https://twitter.com/Dafovehicle"><LogoIcon src={twittericon} alt="Dafo twitter link" /></a>
                </SocialMediaBox>

                <MiniNav>
                    <NavLink to="/downloads">Downloads</NavLink>
                    <NavLink to="/contact-us">Contact</NavLink>
                    <NavLink to="/">Home</NavLink>
                </MiniNav>
            </TopHeader>


            <Nav>
                <BurgerBox>
                    <LogoHeader>
                        <Link to="/"><img src={dafoMEred} alt="Dafo Middle East" /></Link>
                    </LogoHeader>

                    <Hamburger>
                        <div className="container" onClick={() => setShowMenu(!showMenu)}>
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>


                        </div>
                    </Hamburger>
                </BurgerBox>
                {showMenu &&
                    <ul>
                        <li>
                            <NavLink to="#">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Archives</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">About Dafo</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">News</NavLink>
                        </li>
                        <li>
                            <NavLink to="/downloads">Downloads</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact-us">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                    </ul>
                }

            </Nav>
            <InlineNav>
                <ul>
                    <li>
                        <NavLink to="#">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Services</NavLink>
                    </li>

                    <li>
                        <NavLink to="#">Archives</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="#"></NavLink>
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
box-sizing:border-box;
background:black;
width:100%;
padding:10px;
height:60px;
display:none;
@media(min-width:676px){
    display:flex; 
    justify-content:space-between;
}
`;

const SocialMediaBox = styled.span`
    width: 35%;
`
const LogoIcon = styled.img`
height:30px;
margin-right:3px;
`
const MiniNav = styled.div`
width:300px;
display:flex;
justify-content: flex-end;
a{
    color:white;
    text-decoration:none;
    margin:6px;
    transition: transform .2s;
    &:hover{
        color:gray;
        transform: scale(1.1);
    }}

`;
const LogoHeader = styled.div`
img{
width: 150px;
padding: 20px;
}
@media(min-width:676px){
    display:none;
}
`;
const BurgerBox = styled.section`
display:flex;
align-items: center;
justify-content:space-between;
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
margin-right: 5px;
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
  background-color: #ed273e;
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

