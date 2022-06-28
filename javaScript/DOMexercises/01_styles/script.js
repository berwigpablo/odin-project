const container= document.getElementById('container');
const redPara = document.createElement('p');
const header = document.createElement('h3');

const div = document.createElement('div');
const divHeader = document.createElement('h1');
const divPara = document.createElement('p');

redPara.style.color = 'red';
redPara.textContent = 'Hey I\'m red!';

header.style.color = 'blue';
header.textContent = 'I\'m a blue h3!';

div.setAttribute('style', 'border: 3px solid black; background: pink;');

divHeader.textContent = 'I\'m in a div!';

divPara.textContent = 'ME TOO!';

container.appendChild(redPara);
container.appendChild(header);
container.appendChild(div);
div.appendChild(divHeader);
div.appendChild(divPara);





