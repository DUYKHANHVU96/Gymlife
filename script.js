const toggleButton = document.getElementById('toggle-button');
const  nav_menu= document.getElementById('nav_menu');

toggleButton.addEventListener('click', () => {
    nav_menu.classList.toggle('active');
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-box').value.trim().toLowerCase();
    const content = document.getElementById('content');
    const paragraphs = content.querySelectorAll('p');

    
    paragraphs.forEach(p => {
        p.innerHTML = p.textContent;
    });

    if (searchTerm) {
        paragraphs.forEach(p => {
            const text = p.textContent;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            p.innerHTML = text.replace(regex, `<span class="highlight">$1</span>`);
        });
    }
});

document.getElementById('search-button').addEventListener('click', function () {
    const searchTerm = document.getElementById('search-box').value.trim().toLowerCase();
    const content = document.getElementById('content');
    const paragraphs = content.querySelectorAll('p');

    
    paragraphs.forEach(p => {
        p.innerHTML = p.textContent;
    });

    if (searchTerm) {
        paragraphs.forEach(p => {
            const text = p.textContent;
            const regex = new RegExp(`(${searchTerm})`, 'gi');
            p.innerHTML = text.replace(regex, `<span class="highlight">$1</span>`);
        });

        // Add click event to highlighted words
        const highlights = document.querySelectorAll('.highlight');
        highlights.forEach(span => {
            span.addEventListener('click', () => {
                showPopup(span.textContent);
            });
        });
    }
});


function showPopup(text) {
    const popup = document.getElementById('info-popup');
    const popupContent = document.getElementById('popup-content');
    popupContent.textContent = `Thông tin chi tiết về từ: "${text}"`;
    popup.classList.remove('hidden');
}

// Close popup
document.getElementById('close-popup').addEventListener('click', () => {
    const popup = document.getElementById('info-popup');
    popup.classList.add('hidden');
});
