import React from "react"
import styled from 'styled-components/macro'
import DafoBlack from "..//images/DafoBlack.jpg"
import { Link } from "react-router-dom"


export const Footer = () => {
    return (
        <FooterContainer>
            <Padding>
                <Box1>
                    <img src={DafoBlack} alt="Dafo Middle East" />
                </Box1>
                <Box2>
                    <Link to="/"> <h1>Dafo-middle-east.com/</h1></Link> <br />
                    <Link to="/contact-us">Contact</Link><br />
                    <Link to="/site-map">Site-map</Link>
                </Box2>
                <Box3>
                    <h1>Follow Dafo</h1>
                    <a href="https://www.facebook.com/dafobrand">Facebook</a>
                    <br />
                    < a href="https://www.youtube.com/user/dafobrand">Youtube</a>
                </Box3>
                <Box4>
                    <h1>Dafo Middle East</h1>
                    <p>
                        Clover bay tower<br />
    Office 1106 <br />
    Business bay <br />
    Dubai, UAE <br />
                    </p>
                    <p>
                        +971 4 new number<br />
                        <a href="mailto:info@dafo-middle-east.com">info@dafo-middle-east.com</a>

                    </p>
                </Box4>
            </Padding>
        </FooterContainer>
    )
}


const FooterContainer = styled.footer`
width:100%;
min-height:250px;
background:black;
font-size:0.8rem;
h1{
    font-size:1.2rem;
    margin-top: 0;
}
a{
    text-decoration:none;
    color:white;
    font-size:0.8rem;
    cursor: pointer;
}
`;
const Padding = styled.div`
padding:10px 5px;
display:flex;
flex-direction:row;
flex-wrap:wrap;
background:black;
color:white;
`
const Box1 = styled.div`
width:100%;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
}
@media only screen and (min-width : 678px) {
    width:24%;
    margin:2%;
}
img{
    width:100%;
    height:auto;
    }
`;
const Box2 = styled.div`
width:90%;
margin:5%;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
}
@media only screen and (min-width : 678px) {
    width:20%;
    margin:2% 1%;
}
`;
const Box3 = styled.div`
width:90%;
margin:5%;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
}
@media only screen and (min-width : 678px) {
    width:20%;
    
}
`;
const Box4 = styled.div`
width:90%;
margin:5%;
@media only screen and (min-width : 480px) {
    width:40%;
    margin:2%;
}
@media only screen and (min-width : 678px) {
    width:20%;
    margin:2%;
}
`;