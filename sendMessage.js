const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.buttons');
function moveNoButton() {
    const maxX = container.clientWidth - noBtn.clientWidth;
    const maxY = container.clientHeight - noBtn.clientHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}
// Mobilde sadece tıklama, masaüstünde tıklama/hover
function setupNoBtnEvents() {
    const isMobile = window.matchMedia('(max-width: 480px)').matches;
    const events = isMobile ? ['click'] : ['click', 'mouseenter'];
    events.forEach(evt => noBtn.addEventListener(evt, moveNoButton, { passive: false }));
}
setupNoBtnEvents();
window.addEventListener('resize', () => {
    // Listenerları resetlemek için butonu klonla
    const clone = noBtn.cloneNode(true);
    noBtn.parentNode.replaceChild(clone, noBtn);
    setupNoBtnEvents();
});

function sendWhatsApp() {
    const phone = '905522782940'; // kendi numaranızı yazın
    const message = encodeURIComponent('Akşam için hazırım, geç kalma.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}