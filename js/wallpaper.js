import {rand} from './utils.js';

const cont = document.getElementById("container");
const wplim = 5;
const randn = rand(1,wplim);

cont.setAttribute('style', `background-image : url('wallpaper/${randn}.jpg')`);
