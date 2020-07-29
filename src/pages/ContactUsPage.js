import React from "react"
import styled from 'styled-components/macro'
import contactUs from "..//images/contactUs.jpg"
import DafoBlack from "..//images/DafoBlack.jpg"

export const ContactUsPage = () => {
    return (
        <ContactContainer>
            <Box1>

                <h1>Contact Us</h1>

                <img src={contactUs} alt="Contact Dafo Middle East" />
                <div>
                    <h3>Office</h3>
                    <p>Clover bay tower</p>
                    <p>Office 1106, Business Bay</p>
                    <p>Dafo Middle East</p>
                    <p>Dubai, UAE</p>
                    <h3>Warehouse and delivery address</h3>
                    <p>Dafo Middle East</p>
                    <p>Dry dock world</p>
                    <p>Warehouse no 118 </p>
                    <p>Jadaf, near Creek metro station</p>
                    <p>Dubai, UAE	</p>
                </div>
            </Box1>
            <Box2>
                <h2>Contact us</h2>
                <Contacts>
                    <img src={DafoBlack} alt="Dafo Middle East" />
                    <p>+971 4 new number???</p>
                    <p><a href="mailto:infos@dafo-middle-east.com">info@dafo-middle-east.com</a></p>
                </Contacts>
                <h2>Opening hours</h2>
                <div>
                    <h4>Sunday - Thursday</h4>
                    <p>9.00 am - 18.00</p>
                    <h4>Warehouse and receiving</h4>
                    <h4>Sunday - Thursday</h4>
                    <p>8.00 am - 18.00</p>
                    <p>Lunchbreak 1.00 pm - 2.00 pm</p>
                </div>
            </Box2>
        </ContactContainer>
    )
}

const ContactContainer = styled.main`
display:flex;
flex-direction:column-reverse;
width:100%;
height:auto;
@media only screen and (min-width : 480px) {
flex-direction:row;
justify-content:space-between;
margin-top: 5px;
} 
@media only screen and (min-width : 678px) {
    width:80%;
    margin: 0 auto; 
    margin-top: 15px;
    justify-content:space-around;
}
@media only screen and (min-width : 992px){
    margin-top: 25px;
    width:60%;
}
@media only screen and (min-width : 1200px){
    justify-content:center;
}
`;
const Box1 = styled.section`
display:flex;
flex-direction:column;
div{
    width: 100%;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
}
h1{
    margin-bottom:0;
    @media only screen and (min-width : 480px){
        margin:0;
    }
}
p{
    margin-top: 4px;
    margin-bottom: 2px;
}
h4{
    margin-bottom: 0;
}
`;

const Box2 = styled.section`
display:flex;
flex-direction:column;
width:100%;
div{
    width: 100%;
    padding: 0 5px 0 5px;
    box-sizing: border-box;
}
a{
    text-decoration:none;
    color:#1c1c1c;
}
p{
    margin-top: 4px;
}
h4{
    margin-bottom: 0;
}
@media only screen and (min-width : 480px) {
    width: 38%;
    padding: 0 5px 0 15px;
    justify-content:space-between;
}
h2{
     color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
    @media (min-width:676px){
        padding-bottom: 5px;
    }
}  `;
const Contacts = styled.div`
img{
    margin:0;
    padding:0;
    width: 100%;
    height: auto;
}
p{
text-align:center;
margin-top:1.2rem;
}
`
