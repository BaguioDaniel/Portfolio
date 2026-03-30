// EXPERIENCE FILTER SYSTEM
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter experience items
        document.querySelectorAll('.experience-item').forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-type') === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});
