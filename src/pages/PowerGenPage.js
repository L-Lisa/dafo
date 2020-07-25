import React from "react"
import styled from 'styled-components/macro'
import PowerGenMainImage from "..//images/Kompressor.JPG"
import JohanImage from "..//images/JohanImage.jpg"
import UnceImage from "..//images/UnceImage.png"
import Shadi from "..//images/Shadi.jpg"
import contactUs from "..//images/contactUs.jpg"

export const PowerGenPage = () => {
    return (
        <Wrapper>
            <FlexDiv1>
                <Intro>
                    <img src={PowerGenMainImage} alt="Dafo power-generator" />
                    <MainText>
                        <h1>Buses</h1>
                        <p>Many business operations rely on emergency generators to secure critical functions within their organization. 					It is easy to ignore the fact that, as these units are driven by combustible engines,
                        they also constitute a significant fire hazard. Dafo Forrex Fire Suppression Systems response
                        rapidly to any increase in temperature. The Dafo system is developed to use worldwide in both cold and hot climate.
                        It ensures maximum protection while being much more economical than previously available
solutions like water sprinkler, dry chemical or CO2-systems.</p>
                    </MainText>
                </Intro>
            </FlexDiv1>
            <FlexDiv2>
                <ContactUs>
                    <h2>Data Sheet</h2>
                    <img src={UnceImage} alt="UNCE type-approved" />
                    <h2>For more information</h2>
                    <h3>Contact our representative</h3>
                    <img src={JohanImage} alt="Johan Larsson" />
                    <div>
                        <ul>
                            <li> <h3>Johan Larsson</h3></li>
                            <li>Dafo Middle East</li>
                            <li>General Manager</li>
                            <li>+971 55 143 60 88</li>
                        </ul>
                    </div>
                    <img src={Shadi} alt="Shadi Abdulla" />
                    <div>
                        <ul>
                            <li> <h3>Shadi Abdulla</h3></li>
                            <li>Dafo Middle East</li>
                            <li>Sales Manager</li>
                            <li>+971 55 800 55 09</li>
                        </ul>
                    </div>
                    <img src={contactUs} alt="Dafo Sales team" />
                    <div>
                        <ul>
                            <li> <h3>Sales team</h3></li>
                            <li>Dafo Middle East</li>

                            <li><a href="mailto:sales@dafo-middle-east.com">sales@dafo-middle-east.com</a></li>
                        </ul>
                    </div>
                </ContactUs>
            </FlexDiv2>
        </Wrapper>
    )
}



const Wrapper = styled.main`
display:flex;
flex-direction:column;
margin: 0;
  padding: 0;
  box-sizing: border-box;
@media (min-width: 676px) {
        flex-direction:row;
        flex-wrap:wrap;
    }
    h2{
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 100%;
    text-align: center;
    margin-block-start: 0;
@media (min-width: 676px) {
    padding-bottom: 5px;
    }}
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
min-width: 300px;
@media(min-width:676px){
    min-width:unset;
    width:30%;
}
img{
    width:300px;
    height:auto;
    @media(min-width:676px){
    min-width:unset;
    width:100%;
}
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
const ContactUs = styled.article`
width:100%;
display:flex;
flex-direction: column;
align-items: center;
img{
    min-width:100%;
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
}
div{
    padding-bottom: 10px;
}
`;

