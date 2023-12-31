// Add this JavaScript code after your existing code

document.addEventListener('DOMContentLoaded', function () {
    const moreButton = document.getElementById('moreButton');
    const lessButton = document.getElementById('lessButton');
    const hiddenCards = document.querySelectorAll('.service-card:nth-child(n+4)');

    moreButton.addEventListener('click', function () {
        hiddenCards.forEach(card => {
            card.style.display = 'block';
        });

        moreButton.style.display = 'none';
        lessButton.style.display = 'inline';
    });

    lessButton.addEventListener('click', function () {
        hiddenCards.forEach(card => {
            card.style.display = 'none';
        });

        moreButton.style.display = 'inline';
        lessButton.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const FmoreButton = document.getElementById('FmoreButton');
    const FlessButton = document.getElementById('FlessButton');
    const FhiddenCards = document.querySelectorAll('.feature-card:nth-child(n+4)');

    FmoreButton.addEventListener('click', function () {
        FhiddenCards.forEach(card => {
            card.style.display = 'block';
        });

        FmoreButton.style.display = 'none';
        FlessButton.style.display = 'inline';
    });

    FlessButton.addEventListener('click', function () {
        FhiddenCards.forEach(card => {
            card.style.display = 'none';
        });

        FmoreButton.style.display = 'inline';
        FlessButton.style.display = 'none';
    });
});

