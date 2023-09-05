import $ from "jquery";
import debounce from 'lodash/debounce';


["$('body').append('<p>Holberton dashboard</p>')", "$('body').append('<p>Dashboard data for the students</p>')", "$('body).append('<button>Click here to get started</button>')",
    "$('body).append('<p id='count'></p>')", "$('body).append('<p>Copyright - Holberton School</p>')"]

function updateCounter() {
    let count = 0;

    const button = document.getElementsByName('button');
    const countP = document.getElementsById('count');

    button.addEventListener('click', function() {
        count++;
        countP.textContent = `${count} clicks on the button`;
    });
}

const debouncedUpdateCounter = debounce(updateCounter, 500);

debouncedUpdateCounter();
