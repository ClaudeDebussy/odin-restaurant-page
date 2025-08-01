import "./styles.css";
import { homepage } from "./homepage";

const homeButton = document.getElementById("home-button");
homeButton.addEventListener("load", homepage());

console.log("test successful");