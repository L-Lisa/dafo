import React from "react"
import styled from 'styled-components/macro'
import JohanDafo from "..//images/JohanDafo.jpg"
import UnceImage from "..//images/UnceImage.png"
import Shadi from "..//images/Shadi.jpg"
import contactUs from "..//images/contactUs.jpg"

export const Sidebar = () => {
    return (
        <ContactUs>
            <UNCE src={UnceImage} alt="UNCE type-approved" className="largerImg" />
            <h2>For more information</h2>
            <h3>Contact our representative</h3>
            <Person src={JohanDafo} alt="Johan Larsson" />
            <div>
                <ContactList>
                    <li> <h3>Johan Larsson</h3></li>
                    <li>Dafo Middle East</li>
                    <li>General Manager</li>
                    <li>+971 55 143 60 88</li>
                </ContactList>
            </div>
            <Person src={Shadi} alt="Shadi Abdulla" />
            <div>
                <ContactList>
                    <li> <h3>Shadi Abdulla</h3></li>
                    <li>Dafo Middle East</li>
                    <li>Regional Manager</li>
                    <li>+971 55 800 55 09</li>
                </ContactList>
            </div>
            <Person src={contactUs} alt="Dafo Sales team" className="largerImg" />
            <div>
                <ContactList>
                    <li> <h3>Sales team</h3></li>
                    <li>Dafo Middle East</li>
                </ContactList>
            </div>
            <MailLink href="mailto:sales@dafo-middle-east.com">Email: sales@dafo-middle-east.com</MailLink>

        </ContactUs>
    )
}

const MailLink = styled.a`
line-height: normal;
width:140px;
padding-bottom:5px;

`;
const ContactUs = styled.article`
box-sizing:border-box;
width:100%;
display:flex;
flex-direction: column;
align-items: center;
h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 90%;
    text-align: center;
    padding-left: 4px;
    margin-block-start: 0;
    @media (min-width:676px){
        padding-bottom: 5px;
        width: 100%;
        max-width:250px;
    }
}   
li{
    padding: 10px 2px;
}
h3{
    display: inline;
    text-align: center;
}
div{
    padding-bottom: 10px;
}
a{
    text-decoration:none;
    color:#1c1c1c;
}
`;

export const Person = styled.img`
width:100%;
height: auto;
    @media (min-width:676px){
        width:60%;
        max-width:250px;
    }
`
export const UNCE = styled.img`
max-width: 200px;
margin: 20px;
`;

const ContactList = styled.ul`
padding-bottom: 13px;
line-height: 7px;
list-style:none;
display: inline;
padding-bottom:5px;
`;