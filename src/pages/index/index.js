import './index.scss';

import createMenu from '../../components/menu/menu';
let menu = createMenu(['Main', 'About!'], 'menu');
document.body.appendChild(menu);

console.log('in index.js');