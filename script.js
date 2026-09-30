// Toggle mobile menu
document.getElementById('toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Form placeholder – aucune action serveur
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
});