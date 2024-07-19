
document.getElementById('searchButton').addEventListener('click', function() {
    let searchInput = document.getElementById('searchInput');
    if (searchInput.classList.contains('d-none')) {
        searchInput.classList.remove('d-none');
    } else {
        searchInput.classList.add('d-none');
    }
});