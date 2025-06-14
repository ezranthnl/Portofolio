document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
});

const audio = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

musicControl.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        musicControl.textContent = 'Pause Music';
    } else {
        audio.pause();
        musicControl.textContent = 'Play Music';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'm') { // Tekan tombol 'M' untuk mute/unmute
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    }
});

const sections = document.querySelectorAll('section:not(#hero)'); // Kecualikan #hero

const revealOnScroll = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('scroll-visible');
        } else {
            section.classList.remove('scroll-visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);

// Initialize sections (kecuali #hero) sebagai tersembunyi
sections.forEach((section) => {
    section.classList.add('scroll-hidden');
});

const randomNumber = Math.floor(Math.random() * 100) + 1;
const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-button');
const gameMessage = document.getElementById('game-message');

guessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value, 10);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        gameMessage.textContent = 'Please enter a valid number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        gameMessage.textContent = '🎉 Congratulations! You guessed the correct number!';
        gameMessage.style.color = '#58a6ff';
    } else if (userGuess < randomNumber) {
        gameMessage.textContent = 'Too low! Try again.';
        gameMessage.style.color = '#f78166';
    } else {
        gameMessage.textContent = 'Too high! Try again.';
        gameMessage.style.color = '#f78166';
    }
});
