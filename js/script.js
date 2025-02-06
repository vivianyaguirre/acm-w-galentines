document.addEventListener("DOMContentLoaded", function () {
    
    // Function to animate the envelope and navigate to e-card creation page
    function openEnvelope() {
        let envelope = document.querySelector('.envelope');
        envelope.classList.add('jump-spin'); // Adds spin animation to envelope
        setTimeout(() => {
            window.location.href = 'ecard.html'; // Redirects to e-card page after animation
        }, 1000);
    }
    
    // Function to generate the e-card with user input
    function generateCard() {
        let message = document.getElementById('message').value;
        let background = document.getElementById('background').value;
        let ecard = document.getElementById('ecard');

        if (message.trim() === "") {
            alert("Please enter a message!");
            return;
        }

        ecard.style.backgroundColor = background; // Sets background color of e-card
        ecard.innerHTML = `<p style="padding: 20px; color: white; font-size: 18px;">${message}</p>`;
        ecard.style.display = "block";
        document.getElementById('download').style.display = "block";
    }

    
    // Attach event listeners to elements
    document.querySelector(".envelope")?.addEventListener("click", openEnvelope);
   
    
    // Adds event listener for form submission
    // Function to animate the thank-you heart
    let heart = document.querySelector(".hovering-heart");
    if (heart) {
        heart.classList.add("floating-heart-animation"); // Adds floating heart animation
    }
});