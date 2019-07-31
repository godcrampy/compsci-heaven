import './styles/main.scss';
import {
  data
} from './app/data';

import {
  cardFactory
} from './app/card-factory';


console.log(data);
let dsa = document.getElementById("dsa");
data.filter((object) => object.subject === "dsa").forEach((object) => {
  dsa.appendChild(cardFactory(object.title, object.subtitle, object.link));
})