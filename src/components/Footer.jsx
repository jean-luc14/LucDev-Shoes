import React from 'react'
import facebook from '../iconAndImages/facebook_icon.png'
import youtube from '../iconAndImages/youtube_icon.png'
import instagram from '../iconAndImages/instagram_icon.png'
import twitter from '../iconAndImages/twitter_icon.png'
import linkedin from '../iconAndImages/linkedin_icon.png'
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