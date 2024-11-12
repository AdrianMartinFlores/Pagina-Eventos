document.addEventListener('DOMContentLoaded', () => {

    

    const artistCards = document.querySelectorAll('.artist-card');

        artistCards.forEach(card => {
        const cardInner = card.querySelector('.card-inner');

        
        card.addEventListener('mouseover', () => {
            cardInner.style.transform = 'rotateY(180deg)';
        });

        card.addEventListener('mouseout', () => {
            cardInner.style.transform = 'rotateY(0deg)';
        });
    });
});
