document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar input');
    const searchResults = document.getElementById('searchResults');
    const clearBtn = document.querySelector('.btn-clear');

    // Function to toggle results
    const toggleResults = () => {
        if (searchInput.value.trim().length > 0) {
            searchResults.style.display = 'flex';
        } else {
            searchResults.style.display = 'none';
        }
    };

    // Listen for input changes
    searchInput.addEventListener('input', toggleResults);

    // Clear button functionality
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        toggleResults();
    });
});
