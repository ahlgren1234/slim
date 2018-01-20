//
//////////////// MODAL
//

// Get modal element
var modal = document.getElementById('modal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var modalCloseBtn = document.getElementsByClassName('modalCloseBtn')[0];
// Listen for click on button
modalBtn.addEventListener('click', openModal);
// Listen for modal close button click
modalCloseBtn.addEventListener('click', closeModal);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Close the modal
function closeModal() {
    modal.style.display = 'none';
}

//
///////// END MODAL
//

//
// ALERT BOX
//

// Hide the alert box when clicked on the close button.
$('.alert-close').click(function() {
    $(this).closest('.alert-closable').hide("slow");
})


//
// ALERT BOX END 
//
