
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');

    const form = document.getElementById('contact');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            console.log('Form submitted');

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (message) {
                const mailtoLink = `mailto:srivyshnavinakka@gmail.com?subject=Message from ${encodeURIComponent(name)} (${encodeURIComponent(email)})&body=${encodeURIComponent(message)}`;
                console.log('Mailto link:', mailtoLink);
                window.location.href = mailtoLink;

                // Clear form fields
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            } else {
                alert('Please enter a message!');
            }
        });
    } else {
        console.error('Contact form not found');
    }
});