document.addEventListener('DOMContentLoaded', function() {
    const searchForm = document.getElementById('searchForm');
    const searchInput = document.getElementById('searchInput');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const query = searchInput.value.toLowerCase();

        if (query.includes('basico'),('plan esencial')) {
            window.location.href = '/HTML/planes.html';
        } else if (query.includes('palabra2')) {
            window.location.href = 'pagina2.html';
        } else {
            alert('No se encontraron resultados para su búsqueda.');
        }
    });
});