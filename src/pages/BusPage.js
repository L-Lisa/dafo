import React from "react"
import styled from 'styled-components/macro'
import BusPageMainImage from "..//images/BusPageMainImage.png"
import JohanImage from "..//images/JohanImage.png"
import UnceImage from "..//images/UnceImage.png"

export const BusPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={BusPageMainImage} alt="Dafo Buses" />
                    <div>
                        <h1>Buses</h1>
                        <p>Dafo is a market leader in extinguishing systems for vehicles and our Fire Suppression Systems for buses are approved according to the new regulation UNECE R107. Engines, hydraulics, fuel and electrical installations pose the greatest fire risks on buses. These fires often take hold very quickly and leave little time for evacuating the bus. Our systems are thoroughly EMC, vibration and temperature tested according to vehicle standards to ensure it will perform in any situation. Many of the world’s leading bus manufacturers install Dafo systems in their assembly line. Our engineers understand the importance of modern lean production and find solutions that integrates our system in your manufacturing process. A low total cost of ownership is an important key factor for every bus operator. Dafo Fire Suppression Systems, with its superior maintenance intervals and reliability, contributes to increased profitability for manufacturers and operators. In the video below, you can see the effectiveness of an UNECE R107 approved Dafo Forrex Fire Suppression System.
                        </p>
                        <button>https://youtu.be/pzBvZsKDHlE</button>
                    </div>
                </Intro>
            </FlexDiv1>
            <FlexDiv2>

                <ContactUs>
                    <h2>Data Sheet</h2>
                    <img src={UnceImage} alt="UNCE type-approved" />
                    <h2>For more information</h2>
                    <h3>Contact our representative</h3>
                    <img src={JohanImage} alt="Johan Larsson" className="johan" />
                    <p>

                        <ul>
                            <li> <h3>Johan Larsson</h3></li>
                            <li>Dafo Middle East</li>
                            <li>General Manager</li>
                            <li>+971 55 143 60 88</li>
                        </ul>
                    </p>
                </ContactUs>
            </FlexDiv2>
        </Wrapper>
    )
}


const Wrapper = styled.main`
padding: 10px;
display:flex;
flex-direction:column;
@media (min-width: 676px) {
    flex-direction:row;
    padding: 30px;
    }
    h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    padding: 5px 8px;
    text-align: center;
@media (min-width: 676px) {
        margin-block-start: 0;
    }}
`;

const FlexDiv1 = styled.section`
margin: 0 auto;
`;
const FlexDiv2 = styled.section`
margin: 0 auto;
margin: 0 auto;
min-width: 305px;
img{
    height: 237px;
    width:184;
}
`;
const Intro = styled.div`
width: 100%;
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

const ContactUs = styled.article`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
img{
    width:250px;
    height: auto;
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
}`;