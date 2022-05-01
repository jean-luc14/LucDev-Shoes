import React from 'react'
import {Link} from 'react-router-dom'
import facebook from '../Assets/icons/facebook_icon.png'
import youtube from "../Assets/icons/youtube_icon.png";
import instagram from "../Assets/icons/instagram_icon.png";
import twitter from "../Assets/icons/twitter_icon.png";
import linkedin from "../Assets/icons/linkedin_icon.png";
const Footer = ()=>{

    return (
      <footer>
        <div className="footer_child">
          <ul className="footer_child_item">
            <li>Gift Card</li>
            <li>LookBook 2022</li>
            <li>Privacy Policy</li>
            <li>Shipping \ refund</li>
          </ul>
          <ul className="footer_child_item ">
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>Pricing plan</li>
            <li>
              <Link to="/contact">Contact us</Link>
            </li>
            <li>Knowledge base</li>
          </ul>
        </div>
        <div className="footer_child ">
          <ul className="footer_child_item ">
            <li>Gift Card</li>
            <li>LookBook 2022</li>
            <li>Privacy Policy</li>
            <li>Shipping \ refund</li>
          </ul>
          <div className="footer_child_item newsLetter_wrapper">
            <h3>56 Bay Meadows Ave,Vineland,NJ 08360 </h3>
            <div>
              <input type="email" name="email" placeholder='Email'></input>
              <input type="button" value="Subscribe"></input>
            </div>
            <ul className="socials_network">
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook " />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="Socials Network" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="twitter " />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram " />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={youtube} alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
}
export default Footer;