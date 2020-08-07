import React, { useState } from "react"
import styled from 'styled-components/macro'


export const Downloads = () => {
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [showInfo, setShowInfo] = useState("false")

    const handleSubmit = event => {
        event.preventDefault();
        setShowInfo(true);
    };
    return (
        <DownloadsWrapper>
            {!showInfo ? (
                <>
                    <IntroDiv>
                        <h1>Get more information</h1> <p>leave your details here to join mailing list and get instant access to downloadable information</p>
                    </IntroDiv>
                    <FormBox>
                        <div id="mc_embed_signup">
                            <Form
                                action="https://dafo-middle-east.us4.list-manage.com/subscribe/post-json?u=4fc9766f7a3940cb4177774a4&amp;id=93f2cf16ba"
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                                target="_blank" noValidate
                                onSubmit={handleSubmit}>
                                <div id="mc_embed_signup_scroll">
                                    <h2>Get news and updates</h2>

                                    <div className="mc-field-group">
                                        <label forHtml="mce-EMAIL">Email Address <span className="asterisk">*</span>
                                        </label>
                                        <input
                                            value={email}
                                            type="email"
                                            name="EMAIL"
                                            className="required email"
                                            id="mce-EMAIL"
                                            onChange={event => setEmail(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label forHtml="mce-FNAME">First Name </label>
                                        <input
                                            type="text"
                                            value={fName}
                                            name="FNAME"
                                            className=""
                                            id="mce-FNAME"
                                            onChange={event => setFName(event.target.value)}
                                        />
                                    </div>
                                    <div className="mc-field-group">
                                        <label forHtml="mce-LNAME">Last Name </label>
                                        <input
                                            type="text"
                                            value={lName}
                                            name="LNAME"
                                            className=""
                                            onChange={event => setLName(event.target.value)}
                                            id="mce-LNAME" />
                                    </div>
                                    <div id="mce-responses" className="clear">
                                        <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                        <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                    </div>
                                    {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                    <div style={{ position: "absolute", left: "-5000px", }} aria-hidden="true">
                                        <input type="text"
                                            name="b_4fc9766f7a3940cb4177774a4_93f2cf16ba"
                                            tabIndex="-1"
                                            value=" " />
                                    </div>
                                    <div className="clear">
                                        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                            className="button"
                                        />
                                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                                    </div>
                                </div>
                            </Form>
                        </div>
                        {/*  <script type='text/javascript'
                src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
            </script>
            <script type='text/javascript'
                src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
            </script>
            <script
                type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>  */}
                    </FormBox>
                </>
            ) : (
                    <DownloadsBox>
                        <p>Thank you, we are please to have you on our mailinglist, we will keep you updated. Find all the downloads here in one place!</p>
                        <a href="https://dafomiddleeast.sharepoint.com/:f:/s/download/Ek7FJm7dMDxEgeDksVp_mnwBVvz-2dNZWNtNqQZsqT3TIg?e=ZujkFD">Continue to Downloads</a>
                    </DownloadsBox>

                )}
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
const DownloadsBox = styled.section`
width:200px;
`
const DownloadsWrapper = styled.main`
min-height:100vh;
height:100px;
`;

const FormBox = styled.section`
width:90%;
margin: 0 auto;
border: 1px solid #1c1c1c0f;
box-shadow: 2px 2px 10px 2px rgb(207 204 204 / 70%);
`;

const IntroDiv = styled.div`
width:90%;
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
`