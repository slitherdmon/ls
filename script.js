document.getElementById('games').addEventListener('click', function() {
    const div = document.querySelector('.games');
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
})
