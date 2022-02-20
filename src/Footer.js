import React from 'react'
import './Footer.scss'
import facebook from './Icon_and_images/facebook_icon.png'
import youtube from './Icon_and_images/youtube_icon.png'
import instagram from './Icon_and_images/instagram_icon.png'
import twitter from './Icon_and_images/twitter_icon.png'
import linkedin from './Icon_and_images/linkedin_icon.png'
const Footer = ()=>{

    return (

        <div className='footer_parent'> 
            <footer>
            <h2>Nos reseaux</h2> <br/><br/><br/>
            <ul className='footer_list'>
                <li><a href='#'><img src= {facebook} alt='icones reseaux sociaux '/> facebook</a></li>
                <li><a href='#'><img src= {twitter} alt='icones reseaux sociaux '/> twitter</a></li>
                <li><a href='#'><img src= {linkedin} alt='icones reseaux sociaux '/> linkedin</a></li>
                <li><a href='#'><img src= {instagram} alt='icones reseaux sociaux '/> instagram</a></li>
                <li><a href='#'><img src= {youtube} alt='icones reseaux sociaux '/> youtube</a></li>
            </ul>
            </footer>

        </div>

    )
}
export default Footer;