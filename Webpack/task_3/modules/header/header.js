import $ from 'jquery';
// import _ from 'lodash';

// let count = 0;

// function updateCounter() {
//   count += 1;
//   $('#count').text(`${count} clicks on the button`);
// }

console.log("Init header");

function addElements() {
  $('body').append('<h1>Holberton Dashboard</h1>');
//   $('body').append('<p>Dashboard data for the students</p>');
//   $('body').append('<button id="clickButton">Click here to get started</button>');
//   $('body').append('<p id="count"></p>');
//   $('body').append('<p>Copyright - Holberton School</p>');

//   $('#clickButton').on('click', _.debounce(updateCounter, 500));
};

$(function() {
  addElements();
});
