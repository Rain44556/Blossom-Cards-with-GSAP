import cherryBlossom from "../assets/flowers/cherry.png";
import lavender from "../assets/flowers/lavender.png";
import rose from "../assets/flowers/rose.png";
import sunflower from "../assets/flowers/sunflower.png";
import goldenMarguerite from "../assets/flowers/goldenMarguerite.png";

import bgCherry from "../assets/flowers/cherryBg.png";
import bgLavender from "../assets/flowers/lavenderBg.png";
import bgRose from "../assets/flowers/roseBg.png";
import sunflowerBg from "../assets/flowers/sunflowerBg.png";
import goldenMargueriteBg from "../assets/flowers/goldenMargueriteBg.png";

import cherryBlossomIcon from "../assets/flowers/cherryIcon.png";
import lavenderIcon from "../assets/flowers/lavenderIcon.png";
import roseIcon from "../assets/flowers/roseIcon.png";
import sunflowerIcon from "../assets/flowers/sunflowerIcon.png";
import goldenMargueriteIcon from "../assets/flowers/goldenMargueriteIcon.png";


export const cards = [
  {
  title: "ROSE",
  bgCardColor: "bg-[#ffccd5]",
  bgColor: "#8B0000", 
  textColor: "text-[#800020]",
  icon: roseIcon,
  img: rose,
  bgImg: bgRose,
},
  {
    title: "SUNFLOWER",
    bgCardColor: "bg-[#fff799]",
    bgColor: " #ffd700",
    textColor: "text-[#b08500]",
    icon: sunflowerIcon,
    img: sunflower,
    bgImg: sunflowerBg,
  },
  {
    title: "CHERRY",
    bgCardColor: "bg-[#fcd5ce]",
    bgColor: "#f9c5bd",
    textColor: "text-[#8b4d3e]",
    icon: cherryBlossomIcon,
    img: cherryBlossom,
    bgImg: bgCherry,
  },
  {
    title: "LAVENDER",
    bgCardColor: "bg-[#d8b4f8]",
    bgColor: "#c084fc",
    textColor: "text-[#4b0082]",
    icon: lavenderIcon,
    img: lavender,
    bgImg: bgLavender,
  },


{
  title: "GOLDEN MARGUERITE",
  bgCardColor: "bg-[#f7ffb6]",       
  bgColor: "#ffef61",                
  textColor: "text-[#b7791f]",       
  icon: goldenMargueriteIcon,
  img: goldenMarguerite,
  bgImg: goldenMargueriteBg,
}



];
