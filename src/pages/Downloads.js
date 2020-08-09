import React, { useState } from "react"
import styled from 'styled-components/macro'
import { Mailinglist } from "../components/Mailinglist"

export const Downloads = () => {
    /*   /*  const [email, setEmail] = useState("");
       const [fName, setFName] = useState("");
       const [lName, setLName] = useState(""); */
    const [showInfo, setShowInfo] = useState(false)

    /*  const handleSubmit = event => {
         event.preventDefault();
         setShowInfo(true);
     }; */
    return (
        <DownloadsWrapper>
            {/*   {!showInfo ? ( */}
            <>
                <IntroDiv>
                    <h1>Get more information</h1> <p>leave your details here to join mailing list and get instant access to all our downloadable information</p>
                </IntroDiv>
                <FormBox>

                    <Mailinglist />

                </FormBox>
            </>
            {/* ) : ( */}
            {/*  {showInfo && */}
            <DownloadsBox>
                <p>Thank you, we are please to have you on our mailinglist, we will keep you updated. Find all the downloads here below.</p>
                <a href="https://dafomiddleeast.sharepoint.com/:f:/s/download/Ek7FJm7dMDxEgeDksVp_mnwBVvz-2dNZWNtNqQZsqT3TIg?e=ZujkFD">Continue to Downloads</a>
                <Filesdiv>

                </Filesdiv>

            </DownloadsBox>
            {/*       } */}

            {/*       )} */}
        </DownloadsWrapper>
    )
}

/* const Wrapper = styled.main`
width: 100%;
height:100wh;
background:#1c1c1c;
background-color: #dcd8d8;
padding: 20px;
box-sizing: border-box;
div{
                    background:#ffff;
    padding:40px;
}
` */

const DownloadsWrapper = styled.main`
margin-bottom: 40px;
margin: 0 auto;
width:90%;
max-width: 800px;
display:flex;
flex-direction: column;
align-content:center;
@media only screen and (min-width : 450px) {
  width:80%;
}
`;

const FormBox = styled.section`
width:100%;
display:flex;
align-items:center;
margin: 0 auto;
border: 1px solid #1c1c1c0f;
box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
`;

const IntroDiv = styled.div`

margin:0 auto;
`;

const Form = styled.form`
width:100%;
div{
    display: flex;
    flex-wrap: wrap;
    line-height:1rem;
    flex-direction: column;
}
label{
    display:flex;
    width: 110px;
    margin-bottom: 15px;
}
input{
    margin: 4px;
}
`;
const DownloadsBox = styled.section`

`;