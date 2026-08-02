// Function to open a specific modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

// Function to close a specific modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}