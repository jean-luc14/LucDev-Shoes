import React from "react";
import "swiper/css";
import "./App.scss";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routing from "./routes/Routing";
import Footer from "./components/Footer";
import ProductViewModal from "./components/ProductViewModal";

  /* Update-React-in-GitHub-Pages
    npm run deploy
    git add .
    git commit -m "update build for gh-pages"
    git push -u origin main 
  */

  /*Voici la liste des sites indépendants de développement web

    Topal. Topal.
    Upwork. …
    Gourou. …
    Freelance. …
    Fiverr. …
    Staff.com. …
    Élance. …
    Craigslist.
  */

  //raccourcis emmet prefices vendeur (-wmso)

  /*React et Node js Exemplaire de Programme
  00:00 Introduction
00:02:05 Partie 01- Qu'est-ce que ce cours ?  
00:06:56 Partie 02- Installation des outils  
00:12:29 Partie 03- Conception du modèle de site Web  
00:29:19 Partie 04- Affichage des produits  
00:42:24 Partie 05- Créer une application React  
01:01:17 Part 06- Partage du code sur Github  
01:06:46 Part 07- Créer un composant de classement et de produit  
01:16:08 Partie 08- Création d'un écran de produit  
01:40:15 Partie 09- Création du serveur Node.Js  
01:52:12 Part 10- Chargement du produit depuis le backend  
02:11:03 Part 11- Installer ESLint  
02:17:21 Partie 12- Ajouter Redux à l'écran d'accueil  
02:41:19 Part 13- Ajouter Redux à l'écran du produit  
02:57:24 Part 14- Gérer le bouton Ajouter au panier  
03:11:25 Part 15- Implémenter l'ajout au panier  
03:36:31 Part 16- écran de création de panier  
03:51:52 Part 17- Implémentation du retrait du panier  
03:59:53 Part 18- Créer des exemples d'utilisateurs dans MongoDB  
04:23:42 Part 19- Création d'un échantillon de produits dans MongoDB  
04:37:18 Part 20- Création d'un backend de signature  
04:54:55 Part 21- Création d'un écran d'identification  
05:04:54 Part 22- Implémentation de l'action d'identification  
05:27:33 Part 23- Créer un écran d'enregistrement  
05:44:44 Partie 24- Création de l'écran d'expédition  
06:03:25 Part 25- Créer l'écran de paiement  
06:15:19 Part 26- Concevoir l'écran Passer la commande  
06:32:25 Partie 27- Création de l'API de passation de commande  
06:50:57 Partie 28- Implémentation de l'action " Passer commande  
07:08:25 Partie 29- Créer l'écran de commande  
07:27:12 Part 30- Ajouter un bouton PayPal  
07:41:19 Partie 31- Implémenter le paiement de la commande  
07:59:25 Partie 32- Afficher l'historique de la commande  
08:20:08 Partie 33- Afficher le profil de l'utilisateur  
08:38:18 Part 34- Mise à jour du profil utilisateur  
09:00:01 Partie 35- Création d'une vue d'administration


00:00 Introduction
00:02:05 Part 01- What is this course  
00:06:56 Part 02- Install Tools  
00:12:29 Part 03- Design Website Template  
00:29:19 Part 04- Display Products  
00:42:24 Part 05- Create React App  
01:01:17 Part 06- Share Code On Github  
01:06:46 Part 07- Create Rating and Product Component  
01:16:08 Part 08- Build Product Screen  
01:40:15 Part 09- Create Node.Js Server  
01:52:12 Part 10- Load Product From Backend  
02:11:03 Part 11- Install ESLint  
02:17:21 Part 12- Add Redux To Home Screen  
02:41:19 Part 13- Add Redux To Product Screen  
02:57:24 Part 14- Handle Add To Cart Button  
03:11:25 Part 15- Implement Add To Cart  
03:36:31 Part 16- Build Cart Screen  
03:51:52 Part 17- Implement Remove From Cart  
03:59:53 Part 18- Create Sample Users In MongoDB  
04:23:42 Part 19- Create Sample Products In MongoDB  
04:37:18 Part 20- Create Signin Backend  
04:54:55 Part 21- Design Signin Screen  
05:04:54 Part 22- Implement Signin Action  
05:27:33 Part 23- Create Register Screen  
05:44:44 Part 24- Create Shipping Screen  
06:03:25 Part 25- Create Payment Screen  
06:15:19 Part 26- Design Place Order Screen  
06:32:25 Part 27- Create Place Order API  
06:50:57 Part 28- Implement Place Order Action  
07:08:25 Part 29- Create Order Screen  
07:27:12 Part 30- Add PayPal button  
07:41:19 Part 31- Implement Order Payment  
07:59:25 Part 32- Display Order History  
08:20:08 Part 33- Display User Profile  
08:38:18 Part 34- Update User Profile  
09:00:01 Part 35- Creat Admin View

   */

const App = () => {
  window.addEventListener("load", () => {
    document.getElementById("loader").classList.add("fondu_out");
  });
  

  /* var r;
  r = 2;
  useEffect(() => {
    window.addEventListener('click', e => {
      const clickAnim = document.createElement('canvas');
      let canCtx = clickAnim.getContext('2d'); 
      clickAnim.width = 80;
      clickAnim.height = 80;
      clickAnim.className = 'clickAnim';
      clickAnim.style.top = `${e.pageY - 40}px`;
      clickAnim.style.left = `${e.pageX - 40}px`;
      document.body.appendChild(clickAnim);
      
      let R = 0;
      let reqAnim;
      
      const canAnim = () => {
        canCtx.beginPath();
        canCtx.arc(40, 40, R, 0, 2 * Math.PI);
        canCtx.strokeStyle = '#CE6A14';
        canCtx.lineWidth = 3;
        canCtx.stroke();

        R = R + r;
        // if (0 <= R < 20) {
        //   r = 2;
        // }
        if (20 <= R <= 30) {
          r = 1;
        } 
        else if(R>30) {
          
          r = 0;
        }
        
        console.log(R);
        reqAnim = requestAnimationFrame(canAnim);
      }
      reqAnim = requestAnimationFrame(canAnim);
      if (R >= 30) {
        cancelAnimationFrame(reqAnim);
      }
      //canAnim();
      // setInterval(() => {
      //  canCtx.clearRect(0,0,clickAnim.width,clickAnim.height)
      // },130)
      
      // setTimeout(() => {
      //   clickAnim.remove();
      // }, 1500);
    })

  }, [r])*/

  return (
    <>
      <div id="loader">
        <span className="lettre">L</span>
        <span className="lettre">O</span>
        <span className="lettre">A</span>
        <span className="lettre">D</span>
        <span className="lettre">I</span>
        <span className="lettre">N</span>
        <span className="lettre">G</span>
        <span className="lettre">.</span>
        <span className="lettre">.</span>
        <span className="lettre">.</span>
      </div>
      <main>
        <Navbar />
        <Routing/>
        <br />
        <div>
          <ul className="link">
            <li className="style_link">
              <Link to="/Composants-de-chaussures/Oxford/B"> B </Link>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
      <ProductViewModal/>
    </>
  );
};

export default App;
