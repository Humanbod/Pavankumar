// script.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    alert(`धन्यवाद, ${name}! आपका संदेश प्राप्त हुआ। हम आपको ${email} पर जल्द ही संपर्क करेंगे।`);
});