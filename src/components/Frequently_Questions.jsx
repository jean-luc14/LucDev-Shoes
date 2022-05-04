import React, { useEffect } from 'react'

const Frequently_Questions = () => {
  useEffect(() => {
    //Catch titles container
    const FrequentlyQuestions = document.querySelector(".frequently_Questions");
  
    //Catch titles
    const titles = document.querySelectorAll(".frequently_Questions h1");
  
    //Add active class to title if he is visible in viewport
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const TopFrequentlyQuestionsToTopViewport =
        FrequentlyQuestions.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopFrequentlyQuestionsToTopViewport).toFixed() -
          clientHeight * 0.85
      ) {
        titles.forEach((title) => {
          title.classList.add("active");
        });
      }
    });
  },[])
  return (
    <div className="frequently_Questions">
      <h3>Have A Questions ?</h3>
      <div className="frequently_Questions_title">
        <h1 className="first">Frequently Asked</h1>
      </div>
      <div className="frequently_Questions_title">
        <h1 className="last">Questions</h1>
      </div>
      <div className="frequently_Questions_child">
        <div className="frequently_Questions_child_item">
          <div>Lorem ipsum dolor amet.</div>
          <div>cum, accusant doloribus</div>
          <div>adipisicing elit. Repellendus</div>
        </div>
        <div className="frequently_Questions_child_item">
          <div>mollitia quidem quam! Similique</div>
          <div>cum, accusantium doloribus</div>
          <div>Lorem ipsum dolor sit amet</div>
        </div>
        <div className="frequently_Questions_child_item">
          <div>elit. Ipsam officiis deserunt</div>
          <div>Sed delectus ea nemo perspiciatis</div>
          <div>mollitia quidem quam! Similique</div>
        </div>
      </div>
    </div>
  );
}

export default Frequently_Questions