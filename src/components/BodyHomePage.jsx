import React,{useEffect} from 'react'
import CatalogList from "./CatalogList";
import ImgD from '../Shoes_image/Oxford/D.jpg';

const BodyLayOut = props => {

    const Numbers = [1, 2, 3, 4, 5, 6, 7];
    const Title = [
      { title: "Best Prices" },
      { title: "New Shoes" },
      { title: "Livraison gratuite" },
    ];

    useEffect(() => {
      const sliderCtn = document.querySelectorAll(".slideshow-container");
      let holding = false;
      let firstClickX;
      let alreadyScrl;
      let velocity;
      let rafID;

      sliderCtn.forEach((Ctn) => {
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

        const startTransition = () => {
          stopTransition();
          rafID = requestAnimationFrame(decreasingTransition);
        };

        const stopTransition = () => {
          cancelAnimationFrame(rafID);
        };

        const decreasingTransition = () => {
          Ctn.scrollLeft += velocity;
          velocity *= 0.95;
          if (Math.abs(velocity) > 0.5) {
            rafID = requestAnimationFrame(decreasingTransition);
          }
        };

        Ctn.addEventListener("touchstart", (e) => {
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
    }, []);

  return (
    <div className="body_home_page">
      <div className="layout-catalogList">
        <CatalogList navbar={false} />
      </div>
        <div className="swiper_top_and_new_shoes">
          {Title.map((e, i) => (
            <section key={i} className="slideshow-container">
              <h2>{e.Title}</h2>
              <div className="slideshow">
                {Numbers.map((e, i) => {
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
                            {/* <Link className="nav-link">View more</Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
    </div>
  );
}


export default BodyLayOut