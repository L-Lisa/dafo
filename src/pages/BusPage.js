import React from "react"
import styled from 'styled-components/macro'
import BusPageMainImage from "..//images/BusPageMainImage.jpg"
import ReactPlayer from 'react-player/youtube'
import { Sidebar } from "components/Sidebar"

export const BusPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={BusPageMainImage} alt="Dafo Buses" />
                    <MainText>
                        <h1>Buses</h1>
                        <p>Dafo is a market leader in extinguishing systems for vehicles and our Fire Suppression Systems for buses are approved according to the new regulation UNECE R107. Engines, hydraulics, fuel and electrical installations pose the greatest fire risks on buses. These fires often take hold very quickly and leave little time for evacuating the bus. Our systems are thoroughly EMC, vibration and temperature tested according to vehicle standards to ensure it will perform in any situation. <br />Many of the world’s leading bus manufacturers install Dafo systems in their assembly line. Our engineers understand the importance of modern lean production and find solutions that integrates our system in your manufacturing process. A low total cost of ownership is an important key factor for every bus operator. Dafo Fire Suppression Systems, with its superior maintenance intervals and reliability, contributes to increased profitability for manufacturers and operators. In the video below, you can see the effectiveness of an UNECE R107 approved Dafo Forrex Fire Suppression System.
                        </p>
                        <a href="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s"><Button>Live demo link..</Button> </a>

                    </MainText>
                </Intro>
                <PlayerContainer>
                    <EmbedPlayer>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=yFrJz5tydMQ&t=50s" width='auto'
                            height='100%'
                        />
                    </EmbedPlayer>
                </PlayerContainer>
            </FlexDiv1>
            <FlexDiv2>
                <Sidebar />
            </FlexDiv2>
        </Wrapper>
    )
}


const Button = styled.button`
color:red;
margin:10px;
`

const Wrapper = styled.main`
display:flex;
flex-direction:column;
margin: 0;
padding: 0;
box-sizing: border-box;
@media (min-width: 676px) {
    padding-top: 45px;
    flex-direction:row;
    flex-wrap:wrap;
    width: 90%;
    margin: 0 auto;
    }
`;

const FlexDiv1 = styled.section`
margin: 0 auto;
@media(min-width: 676px){
    margin-right: 20px;
    width:65%;
}
`;
const FlexDiv2 = styled.section`
margin: 0 auto;
@media(min-width:676px){
    min-width:unset;
    width:30%;
}
@media(min-width:1200px){
    min-width:unset;
    width:25%;
    margin-left:5px;
}
@media(min-width:1500px){
    min-width:unset;
    width:20%;
    margin-left:10px;
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
    width:100%;
    height: auto;
}
`;

const MainText = styled.div`
padding: 0 30px;
p{
    font-size:1rem;
}
@media(min-width:676px){
    padding:0px;
    width:100%;
}
`;



const EmbedPlayer = styled.div`
display:none;
@media(min-width:676px){
display:inline-block;
margin:0 auto;
height: 400px;
}
`;
const PlayerContainer = styled.div`
width: max-content;
height:auto;
margin: 0 auto;
margin-top: 40px;
`;




