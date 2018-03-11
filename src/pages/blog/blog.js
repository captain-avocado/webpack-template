import 'normalize.css';
import './blog.scss';

import createMenu from '../../components/menu/menu';
var menu = createMenu(['Main', 'About!'], 'menu');
document.body.appendChild(menu);

console.log('in blog.js');