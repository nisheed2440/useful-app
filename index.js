import componentHTML from "useful-module";
import "./index.scss";

let fragment = document.createDocumentFragment();
let container = document.createElement('div');
container.className = 'container';
container.innerHTML = componentHTML;
//Override Text
container.querySelector('.um-card-title').textContent = 'Quote By: Olin Miller';
container.querySelector('.um-card-content p').textContent = 'If you want to make an easy job seem mighty hard, just keep putting off doing it.';
let links = container.querySelectorAll('.um-card-action a');
links[0].textContent = 'Got to quote';
links[1].style.display = 'none';

//Awesome addition
fragment.appendChild(container);
document.body.appendChild(fragment);
