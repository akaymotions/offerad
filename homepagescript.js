document.querySelectorAll('.scroll-arrow').forEach(arrow => {
    arrow.addEventListener('click', function () {
        // target the video-grid inside same wrapper
        const videoGrid = this.parentElement.querySelector('.video-grid');

        // Adjust scroll amount based on screen width
        const scrollAmount = window.innerWidth <= 600 ? 215 : 320;

        if (this.classList.contains('left-arrow')) {
            videoGrid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (this.classList.contains('right-arrow')) {
            videoGrid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});
