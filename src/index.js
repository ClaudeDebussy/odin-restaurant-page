import "./styles.css";
import { homepage } from "./homepage";
import { menu } from "./menu";
import { about } from "./about";

homepage();

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", homepage);

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", menu);

const aboutButton = document.getElementById("about-button");
aboutButton.addEventListener("click", about);