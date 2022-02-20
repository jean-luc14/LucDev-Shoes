import React, {useEffect} from 'react';
import Header from './Header';
//import { Swiper, SwiperSlide } from 'swiper/react';
import './Home.scss';
import { Link } from 'react-router-dom';
import ImgD from './Shoes_image/Oxford/D.jpg';
/*import ImgA from './Image-de-chaussures/Oxford/A.webp';
import ImgB from './Image-de-chaussures/Oxford/B.webp'; 
import Img from './Image-de-chaussures/Oxford/C.jpg';
import ImgE from './Image-de-chaussures/Oxford/E.jpg';
import ImgF from './Image-de-chaussures/Oxford/F.jpg';
import ImgG from './Image-de-chaussures/Oxford/G.jpg';
import ImgH from './Image-de-chaussures/Oxford/H.jpg';
import ImgI from './Image-de-chaussures/Oxford/I.jpg';
import ImgJ from './Image-de-chaussures/Oxford/J.jpg';*/

const Home = () => {

  const Numbers = [1, 2, 3, 4, 5, 6, 7];
  const Title = [
    {title:'Best Prices'},
    {title:'New Shoes'},
    {title:'Livraison gratuite'}
  ]

  //let [ swipe, setSwipe ] = useState(1);
  
  useEffect(() => {

    const sliderCtn = document.querySelectorAll(".slideshow-container");
    let holding = false;
    let firstClickX; 
    let alreadyScrl;
    let velocity;
    let rafID;
    
    sliderCtn.forEach( Ctn => {
      Ctn.addEventListener("mousedown", (e) => {
        holding = true;
        firstClickX = e.pageX - Ctn.offsetLeft;
        alreadyScrl = Ctn.scrollLeft;
        stopTransition();
      });
      
      Ctn.addEventListener("mousemove", (e) => {
        if (!holding) return;
        const x = e.pageX - Ctn.offsetLeft;
        const scrolled = x - firstClickX;
        const prevScrollLeft = Ctn.scrollLeft;
        Ctn.scrollLeft = alreadyScrl - scrolled;
        velocity = Ctn.scrollLeft - prevScrollLeft;
      });

      Ctn.addEventListener("mouseup", () => {
        holding = false;
        startTransition();
      });

      Ctn.addEventListener("mouseleave", () => {
        holding = false;
      });

      const startTransition = () =>   {
        stopTransition();
        rafID = requestAnimationFrame(decreasingTransition);
      }

      const stopTransition = () => {
       cancelAnimationFrame(rafID)
      }

      const decreasingTransition = () => {
        Ctn.scrollLeft += velocity;
        velocity *= 0.95;
        if (Math.abs(velocity) > 0.5) {
          rafID = requestAnimationFrame(decreasingTransition);
        }
      }
      
      Ctn.addEventListener("touchstart", e => {
        holding = true;
        firstClickX = e.targetTouches[0].pageX - Ctn.offsetLeft;
        alreadyScrl = Ctn.scrollLeft;
        stopTransition();
      });
    
      Ctn.addEventListener("touchend", () => {
        holding = false;
        startTransition();
      });

      Ctn.addEventListener("touchmove", (e) => {
        if (!holding) return;
        const x = e.targetTouches[0].pageX - Ctn.offsetLeft;
        const scrolled = (x - firstClickX) * 1.5;
        const prevScrollLeft = Ctn.scrollLeft;
        Ctn.scrollLeft = alreadyScrl - scrolled;
        velocity = Ctn.scrollLeft - prevScrollLeft;
      });
    });
  },[])


  return (
    <>
      <Header />
      <div className="main-content">
        <br />
        <h1>Bienvenue sur notre App</h1>
        <br />
        <h2>Oxford</h2>
          {
            Title.map((e,i) => {
              return (
                <section key={i} className="slideshow-container">
                  <h2>{e.Title}</h2>
                  <div className="slideshow">
                    {Numbers.map((e,i) => {
                      return (
                        <div key={i} className="slideWrapper">
                          <div className="slide">
                            <div className="slideImg">
                              <img src={ImgD} />
                              <div className="overlay">
                                <h3>Richelieu{e}</h3>
                                <h2>
                                  Etoiles<span>Avis</span>
                                </h2>
                              </div>
                            </div>
                            <div className="price_shoes">
                              <h4>200$</h4>
                              <p>Nom et carateristiques </p>
                              <div className="slide_link">
                                <Link className="nav-link">View more</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })

                    }
                  </div>
                </section>
              );
            })
          }
      </div>
      <>
        {/* <Header />
      <br/>
      <br/>
      <h1>Bonjour Darling ...</h1>
      {
        Title.map((e, i) => (
        <section key={i} className='section_class' >
          <div className='title_section' > <h1>{e.title}</h1> </div> 
          <Swiper
            grabCursor={true}
            spacesBetween={2}
            slidesPerView={'auto'} 
          >
            {
              Numbers.map((e,i) => (
                <SwiperSlide key={i} className='slide'>
                  <div className='slide_child'>
                    <div className='slide_child_child'>
                      <div className='slideImg'>
                        <img src={ImgD}/>
                        <div className='type_and_other'>
                          <p>Richelieu</p>
                          <h4>Etoiles {e} <span>Avis</span> </h4>
                        </div>
                      </div>
                      <div className= 'price_shoes'>
                        <h4>200$</h4>
                        <p>Nom et carateristiques </p>
                        <div className='slide_link'><Link className='nav-link'>View more</Link></div> 
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          
          </Swiper>
           <div className='swiper_link'><Link className='nav-link'>View more</Link></div> 
        </section> 
         
      ))}
       */}
      </>
    </>
  );
}

export default Home;