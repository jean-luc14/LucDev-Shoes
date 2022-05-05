import React, { useEffect } from 'react'
import tooltipData from '../Assets/data/TooltipData.js'

const Frequently_Questions = () => {
  
  
  useEffect(() => {
    //Catch titles container
    const FrequentlyQuestions = document.querySelector(".frequently_Questions");
    
    //Catch titles (h1)
    const titles = document.querySelectorAll(".frequently_Questions h1");
    
    //Catch tooltip and all questions
    const questions = Array.from( document.querySelectorAll(".question"));
    const tooltip = document.querySelector(".tooltip");
  
    //Add active class to title if he is visible in viewport
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;
      const TopFrequentlyQuestionsToTopViewport =
        FrequentlyQuestions.getBoundingClientRect().top;
      if (
        scrollTop >
        (scrollTop + TopFrequentlyQuestionsToTopViewport).toFixed() -
          clientHeight * 0.8
      ) {
        titles.forEach((title) => {
          title.classList.add("active");
        });
      }
    });

    //Add class to tooltip element to activate him when mouse enter
    let tooltipId;
    questions.forEach((question) => {
      question.addEventListener("mouseenter", (e) => { 
        
        tooltipId = e.target.getAttribute('tooltip-id');

        tooltip.classList.add('fade_in');
        tooltip.style.top = `${e.pageY + 15}px`;
        tooltip.style.left = `${e.pageX - 55}px`;
        tooltip.innerText = tooltipData[tooltipId - 1].txt;
        const triangle = document.createElement('span');
        tooltip.appendChild(triangle);

      })
      question.addEventListener("mouseout", () => { 
          tooltip.classList.remove('fade_in');
      })
    });
    tooltip.addEventListener("mouseenter", () => { 
      tooltip.classList.add('fade_in');
    })
    tooltip.addEventListener("mouseout", () => { 
        tooltip.classList.remove('fade_in');
    })

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
          <div className="question" tooltip-id='1'>Lorem ipsum dolor amet ? </div>
          <div className="question" tooltip-id='2'>cum, accusant doloribus ?</div>
          <div className="question" tooltip-id='3'>adipisicing elit. Repellendus ?</div>
        </div>
        <div className="frequently_Questions_child_item">
          <div className="question" tooltip-id='4'>mollitia quidem quam! Similique ?</div>
          <div className="question" tooltip-id='5'>cum, accusantium doloribus ?</div>
          <div className="question" tooltip-id='6'>Lorem ipsum dolor sit amet ?</div>
        </div>
        <div className="frequently_Questions_child_item">
          <div className="question" tooltip-id='7'>elit. Ipsam officiis deserunt ?</div>
          <div className="question" tooltip-id='8'>Sed delectus ea nemo perspiciatis ?</div>
          <div className="question" tooltip-id='9'>mollitia quidem quam! Similique ?</div>
        </div>
      </div>
      <div className="tooltip">
        
      </div>
    </div>
  );
}

export default Frequently_Questions