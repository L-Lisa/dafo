import React from "react"
import styled from 'styled-components/macro'
import MainImg from "..//images/MainImg.png"
import Buses from "..//images/ProductImg-Buses.png"
import Mining from "..//images/ProductImg-Mining.png"
import PowerGen from "..//images/ProductImg-powerGenerator.png"
import contactUs from "..//images/contactUs.png"
import { Link } from "react-router-dom"


export const MainPage = () => {
    return (
        <Wrapper>
            <FlexDiv>
                <Intro>
                    <img src={MainImg} alt="Dafo logo" />
                    <div>
                        <h1>Fire & rescue systems for your safety</h1>
                        <p>Since its beginnings back in 1919, Dafo Brand has developed into a modern, high-tech company. As the biggest Nordic supplier of fire suppression systems and fire safety equipment we can always provide you with the best solution. Our fire suppression systems are used worldwide and are installed on the assembly line by many of the world’s leading manufacturers. Our goal is to make sure all our customers are safe and secure.</p>
                    </div>
                </Intro>
            </FlexDiv>

            <ProductsDiv>
                <Link>
                    <img src={Buses} alt="link to Dafo product page buses" />
                </Link>
                <Link>
                    <img src={Mining} alt="link to Dafo product page mining" />
                </Link>
                <Link>
                    <img src={PowerGen} alt="link to Dafo product page power generation" />
                </Link>
            </ProductsDiv>
            <News>
                <h2>News</h2>
                <h5>IMPORT FROM TWITTER??</h5>
            </News>
            <ContactUs>
                <h2>Contact Us</h2>
                <img src={contactUs} alt="Contact Dafo here" />
                <p>We are here to help! <br />
                    For questions and technical support:
                    <ul>
                        <li><h3>Telephone: </h3>+971 4 new number </li>
                        <li><h3>E-mail: </h3>info@dafo-middle-east.com</li>
                        <li><h3>Opening hours:</h3><p className="block"> Sun-Thu: 9.00am – 6.00pm</p>
                        </li>
                    </ul>
                </p>
            </ContactUs>

        </Wrapper>
    )
}

const Wrapper = styled.main`
padding: 10px;
display:flex;
flex-direction:column;

`;

const FlexDiv = styled.section`
/* media@media: @; */
margin: 0 auto;
`;

const Intro = styled.div`
width: 100%auto;
display:flex;
flex-direction: column;
align-items: center;
h1{
    font-weight:bold;
}
img{
    max-width: 92%;
    height: auto;
}
div{
    max-width: 92%;
}
`;

const ProductsDiv = styled.section`
width: 100%;
margin-top: 10px;
display:flex;
flex-direction: column;
align-items: center;
img{
    height: 237px;
    width:184;
}
`;
const News = styled.section`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
}
`
const ContactUs = styled.article`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
img{
    width:250px;
    height: 161px;
}
h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
}
ul{
    list-style:none;
    display: inline;
}
li{
    padding: 10px 2px;
}
h3{
    display: inline;
}
.block{
    display:block;
    margin-block-start:0;
}
`