import React, { useState } from "react"
import styled from 'styled-components/macro'
import { Mailinglist } from "../components/Mailinglist"
import foldericon from "../images/foldericon.png"

export const Certifications = () => {
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [showInfo, setShowInfo] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        /*   setShowInfo("true"); */
    };

    return (
        <DownloadsWrapper>
            {!showInfo ? (
                <Main>
                    <IntroDiv>
                        <h2>Certificates</h2> <p>Enter your details here to proceed to the Certifications document.</p>
                    </IntroDiv>
                    <FormBox>
                        <div id="mc_embed_signup">
                            <Form
                                action="https://gmail.us17.list-manage.com/subscribe/post?u=ddf4337f8aa288503ec5cf4fb&amp;id=2b430cfaa9"
                                /* "https://dafo-middle-east.us4.list-manage.com/subscribe/post-json?u=4fc9766f7a3940cb4177774a4&amp;id=93f2cf16ba&c=?" */
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                                target="hiddenFrame" novalidate
                            >
                                <div id="mc_embed_signup_scroll">
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-EMAIL">Email Address
                                    </label>
                                        <input
                                            value={email}
                                            type="email"
                                            required
                                            name="EMAIL"
                                            className="required email"
                                            id="mce-EMAIL"
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-FNAME">First Name </label>
                                        <input
                                            type="text"
                                            required
                                            value={fName}
                                            name="FNAME"
                                            className=""
                                            id="mce-FNAME"
                                            onChange={event => setFName(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label htmlFor="mce-LNAME">Last Name </label>
                                        <input
                                            type="text"
                                            value={lName}
                                            name="LNAME"
                                            className=""
                                            id="mce-LNAME"
                                            onChange={event => setLName(event.target.value)} />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>

                                    <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                        <input type="text"
                                            name="b_4fc9766f7a3940cb4177774a4_93f2cf16ba"
                                            tabIndex="-1"
                                            value=" " />
                                    </div>
                                    <div>
                                        <div className="clear" >
                                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                                className="button"
                                            />
                                            {/*  <div className="indicates-required"><span className="asterisk">*</span> indicates required</div> */}
                                            {/*  <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
                                        <script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
                                        </div></div>
                                </div>
                            </Form>
                            <iframe onLoad={() => setShowInfo(true)} name="hiddenFrame" src="about:blank" style={{ display: 'none' }}></iframe>
                        </div>
                    </FormBox>
                </Main>

            ) : (
                    <DownloadsBox>
                        <FolderBox href="https://dafomiddleeast.sharepoint.com/sites/download/Shared%20Documents/Forms/AllItems.aspx?originalPath=aHR0cHM6Ly9kYWZvbWlkZGxlZWFzdC5zaGFyZXBvaW50LmNvbS86Zjovcy9kb3dubG9hZC9FazdGSm03ZE1EeEVnZURrc1ZwX21ud0JWdnotMmROWldOdE5xUVpzcVQzVElnP3J0aW1lPTJ3Vjczd1pKMkVn&viewid=893a2d4f%2D1a2b%2D41c8%2D909a%2Ddfc7245a2d53&id=%2Fsites%2Fdownload%2FShared%20Documents%2FDafo%20files%2FCertifications">
                            <Thanks>Thank you, please follow this link to download the Certifications document<AccessButton><img src={foldericon} alt="Dafo downloads" />Certificates</AccessButton></Thanks>

                        </FolderBox>
                    </DownloadsBox>
                )}

        </DownloadsWrapper >
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
const Main = styled.div`
display:flex;
margin: 0 auto;
flex-direction: column;
padding: 30px;
align-items: center;
@media only screen and (min-width : 676px) {
  flex-direction: row;
}
`
const FormBox = styled.section`
padding: 10px;
display:flex;
justify-content: center;
border: 1px solid #1c1c1c0f;
box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
@media only screen and (min-width : 400px) {
    width: 80%;
}
@media only screen and (min-width : 990px) {
    width: 35%;
  max-width: 550px;
}
`;

const IntroDiv = styled.div`

p{
    width:90%;
    max-width:250px;
    margin: 10px 10px 40px 15px;
}
h2{
    margin: 0 auto;
    color: white;
    font-weight:bold;
    background:black;
    width: max-content;
    width: 90%;
    text-align: center;
    margin-block-start: 0;
    @media (min-width:676px){
        padding-bottom: 5px;
        max-width:250px;
}}
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
    margin-top: 15px;
}
input{
    margin: 4px;
}
`
const DownloadsBox = styled.section`
width:auto;
margin: 30px;
`;
const FolderBox = styled.a`
background-image: url(${foldericon});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
text-decoration:none;
color:#1c1c1c;
`;

const AccessButton = styled.button`
width: 6.2rem;
height:5.5rem;
margin:15px;
img{
    height: 30px;
}
`;
const Thanks = styled.h2`
padding: 30px;
margin: 0 auto;
    border: 1px solid #1c1c1c0f;
    box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    flex-direction:column;
    align-items: center;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 50px 0;
    height:300px;
    width: 70%;
    max-width: 500px;
    margin: 0 auto;
    @media(min-width:676px){
    flex-direction:row;
    height:200px;
}
`;