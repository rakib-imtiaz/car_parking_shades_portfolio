document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const projectItems = document.querySelectorAll('[data-category]');

    // Set initial state - "All Projects" active
    const allProjectsBtn = document.querySelector('[data-filter="all"]');
    if (allProjectsBtn) {
        allProjectsBtn.classList.add('bg-white', 'text-brown');
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active state from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('bg-brown', 'text-white');
                btn.classList.add('bg-white', 'text-brown');
            });

            // Add active state to clicked button
            button.classList.remove('bg-white');
            button.classList.add('bg-brown', 'text-white');

            const filterValue = button.getAttribute('data-filter');

            // Show/hide projects based on filter
            projectItems.forEach(item => {
                const categories = item.getAttribute('data-category').split(' ');
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    item.classList.remove('hidden');
                    item.classList.add('block');
                } else {
                    item.classList.add('hidden');
                    item.classList.remove('block');
                }
            });
        });
    });
}); 