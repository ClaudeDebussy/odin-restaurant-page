import { appendChildren, clearPage } from "./common";

function menu() {
  clearPage();  
  
  const content = document.getElementById("content");

  const title = document.createElement("h1");
  title.textContent = "Nonna Rosa's Set Menu";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Three courses · $32 per person";

  const antipasti = [
    ["Bruschetta al Pomodoro", "Toasted bread topped with marinated tomatoes, garlic, and basil"],
    ["Zuppa del Giorno", "A comforting bowl of our homemade seasonal soup"],
    ["Caprese Salad", "Fresh mozzarella, vine-ripened tomatoes, basil, and balsamic glaze"]
  ];

  const secondi = [
    ["Lasagna della Nonna", "Classic meat lasagna with béchamel and slow-cooked tomato sauce"],
    ["Pollo al Limone", "Pan-seared chicken breast in a lemon white wine sauce, served with rosemary potatoes"],
    ["Melanzane alla Parmigiana", "Layered eggplant, mozzarella, and marinara baked to perfection"]
  ];

  const dolci = [
    ["Tiramisu Classico", "Espresso-soaked ladyfingers layered with mascarpone cream"],
    ["Panna Cotta alla Vaniglia", "Silky vanilla custard with seasonal berry compote"],
    ["Cannoli Siciliani", "Crisp pastry shells filled with sweet ricotta and chocolate chips"]
  ];

  const menu = [antipasti, secondi, dolci];
  const menuNames = ["Antipasti", "Secondi", "Dolci"];
  
  function displayMenu(menu){
    let nodeList = [];
    let i = 0;
    for (let course of menu) {      
      const courseName = document.createElement("p");
      courseName.classList.add("menu-course");
      courseName.textContent = menuNames[i];
      i++;

      nodeList.push(courseName);

      for (let item of course){
        const menuItem = document.createElement("p")
        menuItem.classList.add("menu-item");
        menuItem.textContent = item[0];

        const menuItemDesc = document.createElement("p");
        menuItemDesc.classList.add("menu-item-desc");
        menuItemDesc.textContent = item[1];

        nodeList.push(menuItem, menuItemDesc);
      }
    }
    return nodeList;
  };  

  const houseWineAdvert = document.createElement("p");
  houseWineAdvert.textContent = "Add a glass of house wine for $6";
  houseWineAdvert.classList.add("house-wine-advert");

  const houseWineAdvertCTA = document.createElement("p");
  houseWineAdvertCTA.textContent = "Ask your server for today's selections."
  houseWineAdvertCTA.classList.add("house-wine-advert-CTA");

  let nodeListToAppend = [];
  nodeListToAppend.push(title, subtitle);
  const menuDisplayItems = displayMenu(menu);
  for (let i = 0; i < menuDisplayItems.length; i++) {
    nodeListToAppend.push(menuDisplayItems[i]);
  }
  nodeListToAppend.push(houseWineAdvert, houseWineAdvertCTA);


  appendChildren(
    content,
    nodeListToAppend,
  );
};

export {menu}; 