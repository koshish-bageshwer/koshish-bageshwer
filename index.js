document.addEventListener('DOMContentLoaded', () => {
    const menu = document.getElementById('siteMenu');
    const toggle = menu?.querySelector('.menu-toggle');
    const authButton = document.getElementById('authButton');
    const savedName = localStorage.getItem('coaching_student_name');

    function syncMenuState() {
        if (!toggle || !menu) return;
        toggle.setAttribute('aria-expanded', String(menu.open));
    }

    if (menu && toggle) {
        menu.addEventListener('toggle', syncMenuState);
        document.addEventListener('click', (event) => {
            if (!menu.contains(event.target)) {
                menu.open = false;
                syncMenuState();
            }
        });

        menu.addEventListener('click', (event) => {
            if (event.target.closest('a')) {
                menu.open = false;
                syncMenuState();
            }
        });

        syncMenuState();
    }

    if (authButton) {
        if (savedName) {
            const greeting = document.createElement('span');
            greeting.className = 'user-greeting';
            greeting.textContent = `Hi, ${savedName}`;
            authButton.replaceWith(greeting);
        } else {
            authButton.addEventListener('click', () => {
                window.location.href = 'pages/login.html';
            });
        }
    }

    // Show selected class (if any) as a badge in the header
    const selectedClass = localStorage.getItem('selected_class');
    function renderSelectedClass(name) {
        if (!name) return;
        let badge = document.getElementById('selected-class-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.id = 'selected-class-badge';
            badge.className = 'selected-class-badge';
            const heading = document.querySelector('.heading-container');
            if (heading) heading.appendChild(badge);
        }
        badge.textContent = `Class: ${name}`;
    }

    renderSelectedClass(selectedClass);
});