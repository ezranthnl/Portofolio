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
