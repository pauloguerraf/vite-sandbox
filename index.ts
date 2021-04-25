import "./style.css";
import { gsap } from "gsap";
document.querySelector("#app").innerHTML = `
  <h1 id="item">ViteSandbox!</h1>
`;

gsap.from("#item", { y: -100, duration: 0.7 });