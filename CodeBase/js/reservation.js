document.addEventListener('DOMContentLoaded', function () {
    emailjs.init("hkwHkQbsKzzfhcf6H");

    const form = document.getElementById('contact-form');
    const confirmation = document.getElementById('confirmation-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nom = document.getElementById('nom').value;
        const email = document.getElementById('email').value;
        const type = document.getElementById('type').value;
        const date = document.getElementById('date').value;
        const message = document.getElementById('message').value;

        const params = {
            nom: nom,
            email: email,
            date: date, 
            type: type,
            message: message
        };

        // Envoi au client
        const sendClient = emailjs.send("OVP_00", "reservation_client00", params);

        // Envoi à l'admin
        const sendAdmin = emailjs.send("OVP_00", "ovp_reservation00", params);

        Promise.all([sendClient, sendAdmin])
            .then(() => {
                form.style.display = 'none';
                confirmation.style.display = 'block';
            })
            .catch((error) => {
                alert("❌ Une erreur est survenue : " + JSON.stringify(error));
            });
    });
});
