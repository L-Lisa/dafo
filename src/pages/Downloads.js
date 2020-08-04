import React, { useState } from "react"
import styled from 'styled-components/macro'


export const Downloads = () => {
    const [email, setEmail] = useState("");
    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    return (
        <>
            <div id="mc_embed_signup">
                <form
                    action="https://dafo-middle-east.us4.list-manage.com/subscribe/post-json?u=4fc9766f7a3940cb4177774a4&amp;id=93f2cf16ba"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate"
                    target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>Get news and updates</h2>
                        <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                        <div className="mc-field-group">
                            <label for="mce-EMAIL">Email Address <span className="asterisk">*</span>
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
                            <label for="mce-FNAME">First Name </label>
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
                            <label for="mce-LNAME">Last Name </label>
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
                                value="" />
                        </div>
                        <div className="clear">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe"
                                className="button" />
                        </div>
                    </div>
                </form>
            </div>
            {/*  <script type='text/javascript'
                src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
            </script>
            <script type='text/javascript'
                src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'>
            </script>
            <script
                type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script> */}
        </>
    )
}

const Wrapper = styled.main`
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
`