document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.select-btn');
    if (!buttons) return;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const className = btn.getAttribute('data-class');
            if (!className) return;
            localStorage.setItem('selected_class', className);
            // Redirect back to the homepage where the selection will be shown
            window.location.href = '../index.html';
        });
    });
});
