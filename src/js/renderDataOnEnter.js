import renderData from "./renderData";

function renderDataOnEnter(e) {
    const searchInput = document.querySelector('.search-input');
    const text = document.querySelector('.chart');
    const switchInput = document.querySelector('#switch');


    if (!searchInput.value) {
        return;
    }

    if (e.code === "Enter") {
        renderData();
        text.textContent = '℃';
        switchInput.checked = false;
    }
}

export default renderDataOnEnter;