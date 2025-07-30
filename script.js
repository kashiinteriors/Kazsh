// Smooth scroll for nav links (About, Services, Contact)
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Modal logic
    const consultBtn = document.getElementById('consult-btn');
    const consultFormArea = document.getElementById('consult-form-area');
    const contactContent = document.getElementById('contact-content');
    consultBtn.addEventListener('click', function() {
        showSection('contact');
        contactContent.style.display = 'none';
        consultFormArea.style.display = 'flex';
    });
    document.getElementById('consult-form').addEventListener('submit', function(e) {
        e.preventDefault();
        consultFormArea.innerHTML = `<div class="consult-form-box"><h2>Thank you,<br>We'll contact you shortly.</h2></div>`;
    });
});
