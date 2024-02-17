document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        if (name && email && phone) {
            const contactItem = document.createElement('li');
            contactItem.innerHTML = `
                <strong>Name:</strong> ${name} <br>
                <strong>Email:</strong> ${email} <br>
                <strong>Phone:</strong> ${phone}
            `;
            contactList.appendChild(contactItem);

            // Clear input fields
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });
});
