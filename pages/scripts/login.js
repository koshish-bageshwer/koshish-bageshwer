document.addEventListener('DOMContentLoaded', () => {
    const loginView = document.getElementById('login-view');
    const dashboardView = document.getElementById('dashboard-view');
    const nameInput = document.getElementById('student-name');
    const enterBtn = document.getElementById('enter-btn');
    const logoutBtn = document.getElementById('logout-btn');
    const welcomeMessage = document.getElementById('welcome-message');

    if (!loginView || !dashboardView || !nameInput || !enterBtn || !logoutBtn || !welcomeMessage) {
        return;
    }

    const enrolledStudents = ["Koshish", "Priya Patel", "Rahul Singh"];

    function showDashboard(name) {
        welcomeMessage.innerText = `Welcome, ${name}! 👋`;
        loginView.classList.add('hidden');
        dashboardView.classList.remove('hidden');
    }

    const savedName = localStorage.getItem('coaching_student_name');
    if (savedName) {
        showDashboard(savedName);
        // Do not auto-redirect. Keep the portal open until the user explicitly
        // navigates away by pressing the appropriate button.
    }

    enterBtn.addEventListener('click', () => {
        const enteredName = nameInput.value.trim();

        if (!enteredName) {
            alert('Please enter a valid name.');
            return;
        }

        if (enrolledStudents.includes(enteredName)) {
            localStorage.setItem('coaching_student_name', enteredName);
            showDashboard(enteredName);
            // After successful login, close the portal and return to home.
            window.location.href = '../index.html';
        } else {
            alert('Name not found on the student roster. Please contact administration.');
        }
    });

    nameInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            enterBtn.click();
        }
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('coaching_student_name');
        nameInput.value = '';
        dashboardView.classList.add('hidden');
        loginView.classList.remove('hidden');
        // After explicit exit, navigate back to the homepage.
        window.location.href = '../index.html';
    });
});