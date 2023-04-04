import React, { useState } from "react";
import Button from "../components/button/Button";
import { Link } from "react-router-dom";
import { footerVideo } from "../data/video";
import "../styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__video">
        <div className="footer__video-wrapper">
          <video
            src={footerVideo[Math.floor(Math.random() * footerVideo.length)]}
            autoPlay
            muted
            loop
          ></video>
          <div className="footer__btn">
            <Button name={"Play for free"} />
          </div>
        </div>
      </div>
      <div className="footer__container__bottom">
        <div className="footer__container__bottom1">
          <span>TAKE LEAGUE WITH YOU</span>
          <p>
            Download the League app to stay connected to friends and the latest
            game and esports news.
          </p>
          <img src={process.env.PUBLIC_URL + "/Logo/logochplay.png"} alt="" />
        </div>
        <div className="footer__container__bottom2">
          <Link to="/" className="btn">
            ABOUT LEAGUE OF LEGENDS
          </Link>
          <Link to="/" className="btn">
            HELP US IMPROVE
          </Link>
          <Link to="/" className="btn">
            SERVER STATUS
          </Link>
          <Link to="/" className="btn">
            SUPPORTS
          </Link>
          <Link to="/" className="btn">
            ESPORTS PRO SITE
          </Link>
          <Link to="/" className="btn">
            DOWNLOAD RIOT MOBILE COMPANION APP
          </Link>
        </div>
        <div className="footer__container__bottom3">
          <div className="logo">
            <img src={process.env.PUBLIC_URL + "/Logo/logo2.png"} alt="" />
          </div>
          <div className="actor">
            Create by Nguyen Diep. Clone Inc. League of Legends and all related
            logos, characters, names and distintive marks are trademarks or
            registered trademarks of Riot Game, Inc. All Rights Reserved.
          </div>

          <div className="btn__end">
            <Link to="/" className="btn--End">
              PRIVACY NOTICE
            </Link>
            <Link to="/" className="btn--End">
              TEARMS OF SERVICE
            </Link>
            <Link to="/" className="btn--End">
              COOKIE PREFERENCES
            </Link>
          </div>
          <img src={process.env.PUBLIC_URL + "/BG/esrb.png"} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
