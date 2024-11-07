/* Add your JavaScript to this file */
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const messageDiv = document.querySelector('.message');

    if (email) {
        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
    } else {
        messageDiv.textContent = 'Please enter a valid email address.';
    }
});