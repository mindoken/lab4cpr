document.addEventListener('DOMContentLoaded',setup)

import {MiniMaple} from "./miniMaple.js";

function setup() {
    document.getElementById('demoButton').onclick = addSomething;
}

function addSomething(){
    const diff = document.getElementById('diff').value;
    const variable = document.getElementById('var').value;
    let mm = new MiniMaple(diff, variable);
    const decision = mm.diff(diff, variable);

    const someDummyDiv = document.createElement('div');
    someDummyDiv.classList.add('generated');
    someDummyDiv.innerHTML = `Ответ: ${decision}`;
    const container = document.getElementById('container');
    container.appendChild(someDummyDiv);
}