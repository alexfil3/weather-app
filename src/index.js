import setAvatar from './js/setAvatar';
import setHeaderDate from './js/setHeaderDate';
import renderData from './js/renderData';
import renderDataOnEnter from './js/renderDataOnEnter';
import changeTempChart from './js/changeTempChart';
import './style.css';

const searchButton = document.querySelector('.search-button');
const searchInput = document.querySelector('.search-input');
const switchBtn = document.querySelector('#switch');
searchButton.addEventListener('click', renderData);
searchInput.addEventListener('keyup', renderDataOnEnter);
switchBtn.addEventListener('click', changeTempChart);

setAvatar();
setHeaderDate();

renderData()