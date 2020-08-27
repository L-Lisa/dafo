import React, { useState } from "react"
import styled from 'styled-components/macro'
import dafoMEred from "..//images/dafoMEred.jpg"
import { Link, NavLink } from "react-router-dom"
import facebookicon from "..//images/facebookicon.png"
import youtubeicon from "..//images/youtubeicon.png"
import twittericon from "..//images/twittericon.png"
import Linkedin from "..//images/Linkedin.png"

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProducts, setShowProducts] = useState(false)
    return (
        < HeaderWrapper >
            <TopHeader>
                <SocialMediaBox>

                    <a href="https://www.facebook.com/dafobrand"><LogoIcon src={facebookicon} alt="Dafo Facebook link" /></a>
                    < a href="https://www.linkedin.com/company/dafo-middle-east"><LogoIcon src={Linkedin} alt="Dafo youtube link" /></a>
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
                            <NavLink to="#" >Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="#">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/certifications">Certificates</NavLink>
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
                        <NavLink to="#" onClick={() => setShowProducts(!showProducts)}>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">Services</NavLink>
                    </li>

                    <li>
                        <NavLink to="/certifications">Certificates</NavLink>
                    </li>
                    <li>
                        <NavLink to="#">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="#"></NavLink>
                    </li>
                </ul>
            </InlineNav>
            {showProducts &&
                <InlineNav2 id="close" >
                    <Li2>
                        <NavLink to="/bus">Buses</NavLink>
                    </Li2>
                    <Li2>
                        <NavLink to="/powergenerators">Powergenerators</NavLink>
                    </Li2>
                    <Li2>
                        <NavLink to="/mining-constructon">Mining & Construction</NavLink>
                    </Li2>
                </InlineNav2>
            }
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
    display: flex;
    align-items: center;
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
    align-self: center;
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
flex-direction:column;
align-items: center;
justify-content:space-between;
@media(min-width:319px){
    flex-direction:row;
}
`;

const Nav = styled.nav`
background:white;
ul{
    list-style:none;
    text-decoration:none;
    width: auto;
    margin-left: 50%;
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
@media(min-width:319px){
    margin-right:18px;
}
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
box-sizing: border-box;
ul{
    list-style:none;
    display:flex;
    justify-content: center;
    padding:20px 10px;
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
const InlineNav2 = styled.ul`
box-sizing: border-box;
    list-style: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 20px 10px;
    margin-top:-25px;
a{
text-decoration:none;
transition: transform .2s;
padding:0 16px 0 0 ;
color:#626262a3;
&:hover{
        color:black;
}}
`;

const Li2 = styled.li`
list-style:none;
    text-decoration:none;
    transition: transform .2s;
    &:hover{
        border-radius:5%;
        transform: scale(1.1);
    }
`;

