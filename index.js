const menu = document.getElementById('siteMenu');
const toggle = menu?.querySelector('.menu-toggle');

function syncMenuState() {
    if (!toggle) return;
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