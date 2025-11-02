// Love Letter Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loveLetterButton = document.getElementById('love-letter-button');
    const letterContainer = document.getElementById('letter-container');
    const openLetterButton = document.getElementById('open-letter');
    const closeLetterButton = document.getElementById('close-letter');
    const envelope = document.getElementById('envelope');

    // Show love letter
    if (loveLetterButton) {
        loveLetterButton.addEventListener('click', function() {
            letterContainer.style.display = 'block';
            loveLetterButton.style.display = 'none';
            // createConfetti функцийг дуудах (хэрэв байгаа бол)
            if (typeof createConfetti === 'function') {
                createConfetti();
            }
        });
    }

    // Open envelope
    if (openLetterButton) {
        openLetterButton.addEventListener('click', function() {
            envelope.classList.add('open');
            envelope.classList.remove('close');
        });
    }

    // Close envelope
    if (closeLetterButton) {
        closeLetterButton.addEventListener('click', function() {
            envelope.classList.add('close');
            envelope.classList.remove('open');
        });
    }

    // Click envelope to open
    if (envelope) {
        envelope.addEventListener('click', function() {
            envelope.classList.add('open');
            envelope.classList.remove('close');
        });
    }
});