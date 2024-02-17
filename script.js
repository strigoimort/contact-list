// Function to save contacts to local storage
function saveContactsToLocalStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}

// Function to load contacts from local storage
function loadContactsFromLocalStorage() {
    const contactsJSON = localStorage.getItem('contacts');
    return contactsJSON ? JSON.parse(contactsJSON) : [];
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const contactList = document.getElementById('contactList');
    let contacts = loadContactsFromLocalStorage();

    // Load existing contacts from local storage
    contacts.forEach(function(contact) {
        renderContact(contact);
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        const name = nameInput.value;
        const email = emailInput.value;
        const phone = phoneInput.value;

        if (name && email && phone) {
            const contact = { name, email, phone };
            contacts.push(contact);
            saveContactsToLocalStorage(contacts);
            renderContact(contact);

            // Clear input fields
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
        } else {
            alert('Please fill in all fields.');
        }
    });

    // Function to render a contact item
    function renderContact(contact) {
        const contactItem = document.createElement('li');
        contactItem.innerHTML = `
            <strong>Name:</strong> ${contact.name} <br>
            <strong>Email:</strong> ${contact.email} <br>
            <strong>Phone:</strong> ${contact.phone}
            <button class="deleteBtn">Delete</button>
        `;
        contactList.appendChild(contactItem);

        // Add event listener to delete button
        const deleteBtn = contactItem.querySelector('.deleteBtn');
        deleteBtn.addEventListener('click', function() {
            deleteContact(contact);
            contactList.removeChild(contactItem);
        });
    }

    // Function to delete a contact
    function deleteContact(contact) {
        contacts = contacts.filter(function(item) {
            return item !== contact;
        });
        saveContactsToLocalStorage(contacts);
    }
});
