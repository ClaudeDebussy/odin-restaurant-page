import "./styles.css";
import { homepage } from "./homepage";
import { menu } from "./menu";

homepage();

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("click", homepage);

const menuButton = document.getElementById("menu-button");
menuButton.addEventListener("click", menu);