import { setMultipleAttributes, appendChildren, clearPage } from "./common";
import restaurantBackground from "./restaurant_background.png";

function homepage () {
  clearPage();
  
  const content = document.getElementById("content");  
  
  const title = document.createElement("h1");
  title.textContent = "Nonna Rosa's Kitchen";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Where Every Meal Feels Like Sunday Dinner";

  const img = document.createElement("img");
  setMultipleAttributes(img, {"src": restaurantBackground, "alt": "Nonna Rosa's Kitchen restaurant terrace"});

  const welcomeText = [
    "Welcome to Nonna Rosa's Kitchen, a warm and inviting Italian restaurant where tradition lives on in every dish. Tucked away on a quiet corner, our cozy dining room feels just like home.",
    "Because that's exactly how we want it.",
    "From slow-simmered sauces to hand-rolled pasta, every recipe comes straight from Nonna Rosa's handwritten cookbook, passed down through generations.",
    "So, join us for a hearty plate of lasagna, a glass of Chianti by the fire, or just a taste of something sweet.",
    "We invite you to sit, stay awhile, and enjoy the simple pleasures of home-style Italian cooking."    
  ];
  
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");
  const p4 = document.createElement("p");
  const p5 = document.createElement("p");

  const listOfPNodes = [p1,p2,p3,p4,p5];
  for (let i = 0; i < listOfPNodes.length; i++) {
    listOfPNodes[i].textContent = welcomeText[i];
  }

  const signOff = document.createElement("p");
  signOff.classList.add("justify-right", "sign-off");
  signOff.textContent = "Buon appetito!"

  const signature = document.createElement("p");
  signature.classList.add("signature", "justify-right");
  signature.textContent = "Nonna Rosa";

  appendChildren(
  content, 
  [
  title, 
  subtitle, 
  img,   
  p1, p2, p3, p4, p5,
  signOff, 
  signature
]
  );  
};

export {homepage};