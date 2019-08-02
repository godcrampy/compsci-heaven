import "./sass/main.scss";
import {
  data
} from "./app/data";

import {
  cardFactory
} from "./app/card-factory";

function createSection(sectionName) {
  let section = document.getElementById(sectionName);
  data.filter((object) => object.subject === sectionName).forEach((object) => {
    section.appendChild(cardFactory(object.title, object.subtitle, object.link));
  });
}

createSection("dsa");
createSection("ca");
createSection("js");
createSection("cpp");
createSection("wdev");
createSection("db");
createSection("java");
createSection("py");
createSection("linux");
createSection("code");