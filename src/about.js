import { appendChildren, clearPage, setMultipleAttributes } from "./common";
import rosaBellini from "./Rosa_Bellini.jpg";

function about() {
  clearPage();

  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "About Us";

  const img = document.createElement("img");
  setMultipleAttributes(img, {"src": rosaBellini, "alt": "Rosa Bellini at her store in 1954. Photo by zenitmkt from Pixabay"});

  const aboutText = [
    "At Nonna Rosa's Kitchen, every dish has a story... and it all begins with Rosa Bellini, the woman who could make a five-course meal out of whatever was in the pantry and still have room for dessert.", 
    "Born in a small village near Bologna, Rosa moved to the U.S. in 1954 with nothing but a suitcase, her mother's recipes, and a stubborn belief that a good plate of pasta could fix almost anything. She opened a tiny deli in the neighborhood, which quickly became the kind of place where everyone knew your name... and your favorite sauce.",
    "Decades later, her grandchildren decided to turn that love of cooking and community into something more permanent. Nonna Rosa's Kitchen was born not just as a tribute, but as a continuation of her tradition: a cozy space where slow-simmered sauces bubble on the stove, fresh herbs grow in pots by the window, and there's always an extra seat at the table.",
    "Every recipe we serve is inspired by Rosa's original notebook (complete with sauce stains and handwritten notes in the margins).",
    "Today, we're proud to carry on Nonna's legacy, one lovingly-prepared meal at a time. Whether you're here for the lasagna, the stories, or just a warm piece of focaccia and some company, you're part of the family now.", 
    "Come hungry, leave happy! And don't be surprised if we send you home with leftovers."
  ];

  function displayText(about) {
    let nodeList = [];
    let i = 0;

    for (let paragraph of aboutText) {
      const paragraph = document.createElement("p");
      paragraph.textContent = aboutText[i];
      i++;

      nodeList.push(paragraph);
    }
    return nodeList;
  }

  let nodeListToAppend = [];
  nodeListToAppend.push(title, img);

  const aboutTextParagraphs = displayText(aboutText);
  for (let i = 0; i < aboutTextParagraphs.length; i++) {
    nodeListToAppend.push(aboutTextParagraphs[i]);
  };

  appendChildren(
    content,
    nodeListToAppend
  )

};

export {about};