import { format } from 'date-fns';

function setHeaderDate() {
    const headerDate = document.querySelector('.header-date');
    const date = format(new Date(), 'ccc, d LLL yyyy');
    headerDate.textContent = date;
}

export default setHeaderDate;