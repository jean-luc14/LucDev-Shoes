const A = require("../images/A.webp");
const B = require("../images/B.webp");
const C = require("../images/C.jpg");
const D = require("../images/D.jpg");
const E = require("../images/E.jpg");
const F = require("../images/F.jpg");
const G = require("../images/G.jpg");
const H = require("../images/H.jpg");


const productData = [
  {
    catalogSlug: "loafers",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
    size: [45, 49, 36, 38, 43],
    similarImg: {
      img1: A,
      img2: B,
      img3:C
    }
  },
  {
    catalogSlug: "loafers",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "loafers",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "loafers",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "loafers",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "loafers",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "loafers",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "loafers",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "mocassins",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "mocassins",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "mocassins",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "mocassins",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "mocassins",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "mocassins",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "mocassins",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "mocassins",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "oxfords",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "oxfords",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "oxfords",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "oxfords",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "oxfords",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "oxfords",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "oxfords",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "oxfords",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "derby-shoes",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "derby-shoes",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "derby-shoes",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "derby-shoes",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "derby-shoes",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "derby-shoes",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "derby-shoes",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "derby-shoes",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "chukkas",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "chukkas",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "chukkas",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "chukkas",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "chukkas",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "chukkas",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "chukkas",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "chukkas",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "chelsea-style-boots",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "casual-slip-on-shoes",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "active-sneakers",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "active-sneakers",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "active-sneakers",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "active-sneakers",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "active-sneakers",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "active-sneakers",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "active-sneakers",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "active-sneakers",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "walking-shoes",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "walking-shoes",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "walking-shoes",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "walking-shoes",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "walking-shoes",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "walking-shoes",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "walking-shoes",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "walking-shoes",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "casual-lace-up-sneakers",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "casual-slip-on-sneakers",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "at-home-shoes",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "slides",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "slides",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "slides",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "slides",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "slides",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "slides",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "slides",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "slides",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "6",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "toe-post-sandals",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
  {
    catalogSlug: "active-sandals",
    id: "1",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $109.5",
    img: A,
  },
  {
    catalogSlug: "active-sandals",
    id: "2",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $209.5",
    img: B,
  },
  {
    catalogSlug: "active-sandals",
    id: "3",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $569.5",
    img: C,
  },
  {
    catalogSlug: "active-sandals",
    id: "4",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $147.5",
    img: D,
  },
  {
    catalogSlug: "active-sandals",
    id: "5",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $123.5",
    img: E,
  },
  {
    catalogSlug: "active-sandals",
    id: "6",
    name: "loufoc en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $167.8",
    img: F,
  },
  {
    catalogSlug: "active-sandals",
    id: "7",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $124.2",
    img: G,
  },
  {
    catalogSlug: "active-sandals",
    id: "8",
    name: "chaussures en cuire veritable pour homme,style retro,broderie sculpté haute qualité",
    price: "US $145.6",
    img: H,
  },
];


export default productData;
  // LoafersProductData,
  // MocassinsProductData,
  // OxfordsProductData,
  // Derby_shoesProductData,
  // ChukkasProductData,
  // Chelsea_style_bootsProductData,
  // Casual_slip_on_shoesProductData,
  // Active_sneakersProductData,
  // Walking_shoesProductData,
  // Casual_lace_up_sneakersProductData,
  // Casual_slip_on_sneakersProductData,
  // At_home_shoesProductData,
  // SlidesProductData,
  // Toe_post_sandalsProductData,
  // Active_sandalsProductData

