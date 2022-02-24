import React,{useState,useEffect} from 'react';
import './NavHeader.scss';
import { Link,useLocation} from 'react-router-dom';
import Sign_up from './Components/Sign_up';
import Log_in from './Components/Log_in';

  const navHeader = [
    {
      display: 'Home',
      path: '/'
    },
    {
      display: 'Contact',
      path: '/Contact'
    },
    {
      display: 'About us',
      path:'/About_us'
    }
  ]

const NavHeader = () => {
  
  const add_class = () => {
    const cat = document.getElementById('category_ul');
    cat.classList.add('category_ul');
  }
   
  const remove_class = () => {
    const cat = document.getElementById('category_ul');
    cat.classList.remove('category_ul');
  }
   
  const [reverse_sign, setreverse_sign] = useState(false);
  const toogle_sign = () => {
    setreverse_sign(!reverse_sign);
    setreverse_log(false)
  }
  
  const [reverse_log, setreverse_log] = useState(false);
  const toogle_log = () => {
    setreverse_log(!reverse_log)
    setreverse_sign(false)
  }
     
  const { pathname } = useLocation();
  const active = navHeader.findIndex(e => e.path === pathname);
  
  const hamburgerAnim_and_navResponAnim = ()=>{ 
    const hamburger_anim = document.querySelector(".hamburger_menu");
    const navResponAnim = document.querySelector('.link_child');
    hamburger_anim.classList.toggle("active");
    navResponAnim.classList.toggle("active");
  }
  useEffect(
    () => {
      const navbar = document.getElementById("navbar");
      const cats_li = document.querySelectorAll('.catLi');
      cats_li.forEach( cat_li => {
        cat_li.addEventListener("click", e => {
          let x = e.clientX - e.offsetLeft;
          let y = e.clientY - e.offsetTop;
          const span = document.createElement("div");
          span.style.left = x + "px";
          span.style.top = y + "px";
          cat_li.appendChild(span);
          setTimeout(() => {
            span.remove();
          }, 1000);
        });
      })

    //     window.addEventListener("scroll", (scrollY) => {
    //       if ((pathname === "/")&(scrollY>=550)) {
    //         navbar.classList.add("navbar");
    //       } 
    //       else {
    //         navbar.classList.remove("navbar");
    //     window.addEventListener("scroll", () => {
    //       navbar.classList.add("navbar");
    //     });
    //   }
    // });
    },
  []);
   

  return (
    <>
      <nav id="navbar">
        <div className="link">
          <ul className="link_child">
            {navHeader.map((e, i) => (
              <li key={i} className={`${i === active ? "active" : ""}`}>
                <Link to={e.path} className="nav-link">
                  {e.display}
                </Link>
              </li>
            ))}
            <li>
              <button className="btn log_in" onClick={toogle_log}>
                Log in
              </button>
            </li>
          </ul>
          <div
            className="style_link_category"
            onMouseOver={add_class}
            onMouseOut={remove_class}
          >
            <div className="li_category">Category</div>
            <div id="category_ul">
              <ul>
                <li className="catLi">
                  <Link className="nav-link">Richelieu</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Derby</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Chaussures à boucles</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Brogues</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Mocassins</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">bateaux</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Deserts boots</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Chukka boots</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Chelsea boots</Link>
                </li>
                <li className="catLi">
                  <Link className="nav-link">Boots</Link>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn sign_up" onClick={toogle_sign}>
            Sign up
          </button>
          <button className="btn log_in" onClick={toogle_log}>
            Log in
          </button>
          <div className="hamburger_menu" onClick={hamburgerAnim_and_navResponAnim}>
            <div className="slice"></div>
            <div className="slice"></div>
            <div className="slice"></div>
          </div>
        </div>
      </nav>

      <Sign_up reverse_sign={reverse_sign} toogle_sign={toogle_sign} />
      <Log_in reverse_log={reverse_log} toogle_log={toogle_log} />
    </>
  );
}
export default NavHeader;