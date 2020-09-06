import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import MainImgSml from "..//images/MainImgSml.jpg";
import Buses from "..//images/ProductImg-Buses.jpg";
import UnceImage from "..//images/UnceImage.png";
import Mining from "..//images/ProductImg-Mining.jpg";
import PowerGen from "..//images/ProductImg-powerGenerator.jpeg";
import contactUs from "..//images/contactUs.jpg";
import DafoDubaiME from "..//images/DafoDubaiM-E.jpg";
import DafoDubaiLrgLogo from "images/DafoDubaiLrgLogo.png";
import DafoDubaiFull from "images/DafoDubaiLrgFullColr.jpg";
import { Link } from "react-router-dom";
import { Timeline } from "react-twitter-widgets";
// import style from "../index.css" ;
export const MainPage = () => {
  const [twitterLoaded, settwitterLoaded] = useState(false);
  useEffect(() => {
    if (twitterLoaded) {
      var iframe = document.getElementById("twitter-widget-0");
      var innerDoc = iframe.contentDocument || iframe.contentWindow.document;
      var cssStyle = document.createElement("style");
      cssStyle.innerText =
        " div.timeline-Viewport {overflow: hidden;} div.timeline-Viewport ol {position:relative; top:0;animation: scroll 120s linear 0.5s infinite;} @keyframes scroll {95% { top: -1000%; } 100%{top:0;}}";
      innerDoc.head.appendChild(cssStyle);
    }
  }, [twitterLoaded]);

  return (
    <Wrapper>
      <FlexDiv1>
        <Intro>
          {/*  <video controls autoPlay>
                        <source src=" {DafoVid}"></source>
                    </video> */}
          <img src={DafoDubaiFull} alt="Dafo" />
          <MainText>
            <h1>Fire & rescue systems for your safety</h1>
            <p>
              Since its beginnings back in 1919, Dafo Brand has developed into a
              modern, high-tech company. As the biggest Nordic supplier of fire
              suppression systems and fire safety equipment we can always
              provide you with the best solution. Our fire suppression systems
              are used worldwide and are installed on the assembly line by many
              of the world’s leading manufacturers. Our goal is to make sure all
              our customers are safe and secure.
            </p>
          </MainText>
        </Intro>

        <ProductsDiv>
          <Link to="/powergenerators">
            <PowerGeneratorImg className="product-block ">
              <h4>Power Generator</h4>
            </PowerGeneratorImg>
          </Link>
          <Link to="/bus">
            <BusBlockImg className="product-block">
              <h4>Buses</h4>
            </BusBlockImg>
          </Link>
          <Link to="/mining-constructon">
            <MiningConstructionImg className="product-block">
              <h4>Mining & Construction</h4>
            </MiningConstructionImg>
          </Link>
        </ProductsDiv>
      </FlexDiv1>
      <FlexDiv2>
        <ContactUs>
          <h2>Contact Us</h2>
          <ContactImg src={contactUs} alt="Contact Dafo here" />
          <div>
            <p>
              We are here to help!
              <br />
              For questions and technical support:
            </p>
            <ul>
              <li>
                Telephone:
                <h3>
                  <br />
                  +971 4 232 3957
                </h3>
              </li>

              <li>
                E-mail:
                <br /> <h3>info@dafo-middle-east.com</h3>
              </li>
              <li>
                Opening hours:
                <p className="block">
                  {" "}
                  <h3>Sun-Thu: 9.00am – 6.00pm</h3>
                </p>
              </li>
            </ul>
          </div>
          {/*  <h2>News</h2> */}
          <TwitterBox>
            <Timeline
              renderError={(_err) => <p>Could not load Twitter</p>}
              dataSource={{
                sourceType: "profile",
                screenName: "Dafovehicle",
                width: "100%",
              }}
              options={{
                height: "700",
              }}
              onLoad={() => settwitterLoaded(true)}
            />
          </TwitterBox>
        </ContactUs>
      </FlexDiv2>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  @media (min-width: 676px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  h2 {
    color: white;
    font-weight: bold;
    background: black;
    width: max-content;
    width: 100%;
    max-width: 316px;
    text-align: center;
    margin-block-start: 0;
    @media (min-width: 676px) {
      padding-bottom: 5px;
    }
  }
`;

const FlexDiv1 = styled.section`
  margin: 0 auto;
  max-width: 1299px;
  @media (min-width: 676px) {
    margin-right: 10px;
    width: 65%;
  }
  @media (min-width: 790px) {
    width: 70%;
  }
`;
const FlexDiv2 = styled.section`
  margin: 0 auto;
  @media (min-width: 676px) {
    width: 25%;
  }
  @media (min-width: 790px) {
    width: 19%;
    margin-left: 10px;
  }
`;

const ContactImg = styled.img`
  max-width: 250px;
`;
const Intro = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 676px) {
    align-items: unset;
  }
  h1 {
    font-weight: bold;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
const MainText = styled.div`
  padding: 0 30px;
  @media (min-width: 676px) {
    padding: 0px;
  }
`;
const ProductsDiv = styled.section`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media (min-width: 676px) {
    flex-direction: row;
    justify-content: space-around;
    margin-top: -30px;
  }
  @media (min-width: 1000px) {
    margin-top: unset;
  }
  @media (min-width: 1700px) {
    flex-direction: row;
    justify-content: center;
  }
  h4 {
    font-size: 1rem;
    color: black;
    background-color: #fffffab0;
    width: auto;
    max-width: max-content;
    padding: 10px 20px;
    margin: 0 auto;
    margin-top: 90px;
    text-align: center;
    font-weight: 700;
  }
  a {
    width: 100%;
    margin: 5px 0;
    text-decoration: none;
    @media (min-width: 676px) {
      width: 28%;
      text-decoration: none;
    }
    img {
      width: 100%;
    }
  }
`;
const PowerGeneratorImg = styled.div`
  background-image: url(${PowerGen});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;
const BusBlockImg = styled.div`
  background-image: url(${Buses});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;
const MiningConstructionImg = styled.div`
  background-image: url(${Mining});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 310px;
  padding: 4px;
  @media (min-width: 676px) {
    width: 100%;
  }
`;

const ContactUs = styled.article`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  margin-top: 25px;
  flex-direction: column;
  align-items: center;
  img {
    width: 250px;
    height: auto;
  }
  div {
    padding: 10px 2px;
  }
  ul {
    list-style: none;
    display: inline;
    margin: 0;
  }
  li {
    padding: 6px 2px;
  }
  h3 {
    display: inline;
    font-size: 1rem;
  }
  p {
    margin: 0;
  }
  .block {
    display: block;
    margin-block-start: 0;
  }
  @media (min-width: 676px) {
    margin-top: 0;
    align-items: start;
    img {
      width: 100%;
    }
  }
`;
const TwitterBox = styled.div`
  height: 400px;
  overflow: scroll;
  height: auto;
  @media (min-width: 676px) {
    height: 190px;
  }
  @media (min-width: 800px) {
    height: 350px;
  }
  @media (min-width: 900px) {
    height: 380px;
  }
  @media (min-width: 1000px) {
    height: 410px;
  }
  @media (min-width: 1100px) {
    height: 480px;
  }
  @media (min-width: 1200px) {
    height: 520px;
  }
`;
