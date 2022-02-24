import React,{useRef,useEffect} from 'react';
//import {gsap} from 'gsap';
import HightOrderComponent from '../../HightOrderComponent';
import ImgE from '../../Shoes_image/Oxford/E.jpg';
import ImgG from '../../Shoes_image/Oxford/G.jpg';
import ImgH from '../../Shoes_image/Oxford/H.jpg';
import ImgI from '../../Shoes_image/Oxford/I.jpg';
import ImgJ from '../../Shoes_image/Oxford/J.jpg';
import './A.scss';

const A = () => {

  const Img = document.querySelectorAll("shoes_img");
  const remove_opacity_class = () => {
    Img.forEach((e) => {
      //if (e) {
      //e.classList.remove("opacity_img");
      console.log(e);
      //}
    });
  }

  const imgRef_1 = useRef(null);
  const imgRef_2 = useRef(null);
  const imgRef_3 = useRef(null);
  const imgRef_4 = useRef(null);
  const imgRef_5 = useRef(null);

  const add_opacity_1 = () => {
    remove_opacity_class();
    imgRef_1.current.classList.add('opacity_img');
  }
  const add_opacity_2 = () => {
    remove_opacity_class();
    imgRef_2.current.classList.add('opacity_img');
  }
  const add_opacity_3 = () => {
    remove_opacity_class();
    imgRef_3.current.classList.add('opacity_img');
  }
  const add_opacity_4 = () => {
    remove_opacity_class();
    imgRef_4.current.classList.add('opacity_img');
  }
  const add_opacity_5 = () => {
    remove_opacity_class();
    imgRef_5.current.classList.add('opacity_img');
  }

  return (
    <>
      <div className="shoes_wrapper">
        <div className="back"></div>
        <div className="shoes">
          <div className="shoes_img_wrapper">
            <img ref={imgRef_1} className="shoes_img 1" src={ImgH} />
            <img ref={imgRef_2} className="shoes_img 2" src={ImgE} />
            <img ref={imgRef_3} className="shoes_img 3" src={ImgG} />
            <img ref={imgRef_4} className="shoes_img 4" src={ImgI} />
            <img ref={imgRef_5} className="shoes_img 5" src={ImgJ} />
          </div>
          <div className="shoes_property">
            <h3>Nom et caracteristiques</h3>
            <p>
              description et autres loremlorem hjbdfjhjf vsshfnjvsdhvsjvnsp
              ovssn kvnmlqsk nnifdfnhifhl jk jjujuiik hjkjdgokjjh ihbjzzieuru
              kkoo
            </p>
            <h4>Etoiles et avis</h4>
            <div className="other_img">
              <img className="shoes_img 1" src={ImgH} onClick={add_opacity_1} />
              <img className="shoes_img 2" src={ImgE} onClick={add_opacity_2} />
              <img className="shoes_img 3" src={ImgG} onClick={add_opacity_3} />
              <img className="shoes_img 4" src={ImgI} onClick={add_opacity_4} />
              <img className="shoes_img 5" src={ImgJ} onClick={add_opacity_5} />
            </div>
          </div>
        </div>
      </div>
      <div className="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>
    </>
  );
}
export default HightOrderComponent(A);