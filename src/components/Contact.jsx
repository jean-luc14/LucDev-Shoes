import React, { useEffect, useState } from "react";
import Frequently_Questions from './Frequently_Questions'
import Oxfords from "../Assets/images/oxfords/1/coffee.jpg";
import Loafers from "../Assets/images/loafers/4/gray.jpg";
import Derby from "../Assets/images/H.jpg";
import Moccasins from "../Assets/images/moccasins/7/gray.jpg";
import facebook from "../Assets/icons/facebook_icon.png";
import youtube from "../Assets/icons/youtube_icon.png";
import instagram from "../Assets/icons/instagram_icon.png";
import twitter from "../Assets/icons/twitter_icon.png";
import linkedin from "../Assets/icons/linkedin_icon.png";


const Contact = () => {
  //state to catch active/not active to animate about us titles
  const [activeContactTitle, setActiveContactTitle] = useState(false);
  const [activeLetsTalkTitle, setActiveLetsTalkTitle] = useState(false);

  useEffect(() => {
    setActiveContactTitle(true);
    setActiveLetsTalkTitle(true);
  }, []);
  return (
    <div className="contact">
      <div className="contact_header">
        <img src={Loafers} alt="loafers" />
        <div className="contact_title">
          <div className="contact_title_child ">
            <h1 className={`${activeContactTitle ? "active first" : ""}`}>
              Contact
            </h1>
          </div>
          <div className="contact_title_child last">
            <h1 className={`${activeContactTitle ? "active last" : ""}`}>
              Momo Shoes
            </h1>
          </div>
        </div>
      </div>
      <div className="contact_body">
        <LetsTalk activeLetsTalkTitle={activeLetsTalkTitle} />
        <ContactForm/>
        <Frequently_Questions />
      </div>
    </div>
  );
};

// the syle of LetsTalk component is in Let's_talk.scss
const LetsTalk = ({ activeLetsTalkTitle }) => {
 return (
   <div className="lets_talk">
     <div className={`moccasins ${activeLetsTalkTitle ? "active" : ""}`}>
       <img src={Moccasins} alt="moccasins" />
       <div>
         <h2>Hello Guys </h2>
       </div>
     </div>
     <div className="lets_talk_child">
       <div className="lets_talk_child_title ">
         <h1 className={`${activeLetsTalkTitle ? "active first" : ""}`}>
           Let's Talk
         </h1>
       </div>
       <div className="lets_talk_child_title">
         <h1 className={`${activeLetsTalkTitle ? "active second" : ""}`}>
           Or Just Schedule
         </h1>
       </div>
       <div className="lets_talk_child_title">
         <h1 className={`${activeLetsTalkTitle ? "active last" : ""}`}>
           For A Coffee
         </h1>
       </div>
       <div className="lets_talk_child_info">
         <div className="lets_talk_child_info_item">
           <div>
             <h3>Address</h3>
             <p>81 Sherman Avenue</p>
             <p>Merrick, NY 11566</p>
           </div>
           <div>
             <h3>Contact</h3>
             <p>T +1.872.123.8889</p>
             <p>JL.hello@momoshoes.com</p>
           </div>
         </div>
         <div className="lets_talk_child_info_item">
           <div>
             <h3>Follow Us</h3>
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
           <div>
             <h3> Custom Suits</h3>
             <h4>385</h4>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

//The Style of ContactForm is in ContactForm.jsx
const ContactForm = () => {

    useEffect(() => {
      //Catch titles container
      const ContactForm = document.querySelector(".contactForm");

      //Catch titles (h1)
      const title = document.querySelector(".contactForm h1");

      //Add active class to title if he is visible in viewport
      window.addEventListener("scroll", () => {
        const { scrollTop, clientHeight } = document.documentElement;
        const TopContactFormToTopViewport =
          ContactForm.getBoundingClientRect().top;
        if (
          scrollTop >
          (scrollTop + TopContactFormToTopViewport).toFixed() -
            clientHeight * 0.8
        ) {
          title.classList.add("active");
        }
      });
    }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="contactForm">
      <div className="contactForm_info">
        <h3>Contact us</h3>
        <div>
          <h1>Send Inquiry</h1>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Modi eius sapiente facere accusamus, a fuga itaque velit delectus tempora
          ad ut unde fugiat suscipit illo, pariatur magnam ex dolor et.
        </div>
      </div>
      <form onSubmit={handleSubmit} className="contactForm_child">
        <input type='name' placeholder='Name'></input>
        <input type='Email' placeholder='Email'></input>
        <textarea placeholder='Message'></textarea>
        <input type='submit' value='Send' id='submit'></input>
      </form>
    </div>
  );
}

export default Contact;