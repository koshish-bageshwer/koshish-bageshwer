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
});