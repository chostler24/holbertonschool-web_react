import $ from "jquery";

// Function to add paragraphs to the page body
function addParagraphs() {
    // Create three different paragraphs
    const paragraph1 = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const paragraph3 = $('<p>').text('Copyright - Holberton School');

    // Append the paragraphs to the body of the page
    $('body').append(paragraph1, paragraph2, paragraph3);
}

// Call the function to add paragraphs when the document is ready
$(document).ready(function() {
    addParagraphs();
});
