import React from "react"
import styled from 'styled-components/macro'
import { Link } from "react-router-dom"



export const SiteMap = () => {
    return (
        <Wrapper>
            <SiteMapContainer>
                <LI>
                    <Link to="/"><h1>Dafo Home Page</h1></Link>
                </LI>
                <LI>
                    <Link to="/bus"> <h2>Fire Suppression Systems - Buses & vehicles</h2></Link></LI>
                <LI>
                    <Link to="/powergenerators"> <h2>Power Generators</h2></Link>
                </LI>
                <LI>
                    <Link to="/mining-constructon"> <h2>Mining & Contstruction</h2></Link></LI>
                <LI>
                    <Link to="/contact-us"> <h2>Contact Us</h2></Link>
                </LI>
            </SiteMapContainer>
        </Wrapper>
    )
}
const Wrapper = styled.main`
width: 100%;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
`;
const SiteMapContainer = styled.ul`
text-align:left;
margin:auto 0;
list-style: none;
`;
const LI = styled.li`
a{
    text-decoration:none;
    color: #1c1c1c;
    cursor: pointer;
}
`
