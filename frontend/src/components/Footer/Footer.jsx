import React from 'react';
import './Footer.css'
import logo from '../../assets/logo.png';
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import linkedin from '../../assets/linkedin.svg'
import youtube from '../../assets/youtube.svg'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    
    <div id="footercontainer">
        <div id="footeraboutus">
            <div className="footerhead-div">
                <img src={logo}/>
                <h1 className="footerhead">FriendQuest</h1>
            </div>
            <p className="footerpara1">About Friend Quest:</p>
            <p className="footerpara2">
                Welcome to Friend Quest, introducing our innovative platform to find companions for various social 
                activities. Our mission is to connect like-minded people, making it easy for users to arrange 
                meetups for shopping trips, movie nights, or social gatherings. By fostering these connections, 
                we aim to enhance social interactions, reduce loneliness, and build a community where everyone 
                can find a friend to share their experiences with.
            </p>
        </div>
        <div id="footerquicklinks">
            <p>Quick Links</p>
            <ul>
                <li><a href="">FAQs</a></li>
                <Link to='/about'><li>About Us</li></Link>
                <Link to='/investor'><li>Privacy Policy</li></Link>
                <Link to='/startup'><li>Terms & Conditions</li></Link>
                <Link to='/contact'><li>Contact Us</li></Link>
            </ul>
        </div>
        <div id="footerfollowus">
            <p>Follow us on:</p>
            <div className="footerfollowus-div">
                <a href=""><img src={facebook} alt="facebook"/></a>
                <a href=""><img src={instagram} alt="instagram"/></a>
                <a href=""><img src={linkedin} alt="linkdin"/></a>
                <a href=""><img src={youtube} alt="linkdin"/></a>
            </div>
        </div>
        <div id="footercontactus">
            <p>Contact Us:</p>
            <ul>
                <li>Phone : 9325544679</li>
                <li>Email : friendquest@gmail.com</li>
            </ul>
                
            
        </div>
    </div>

  )
}

export default Footer