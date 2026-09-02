// Master database containing student ID, passwords, and details
const studentsDatabase = {
    "PTC101": { password: "student123", name: "Rahul Sharma", class: "10th Grade", fees: "25,000", pending: "5,000", attendance: "92%", percentage: "88%" },
    "PTC102": { password: "password456", name: "Priya Singh", class: "9th Grade", fees: "22,000", pending: "0", attendance: "95%", percentage: "91%" },
    "PTC103": { password: "mypassword789", name: "Amit Patel", class: "8th Grade", fees: "20,000", pending: "3,000", attendance: "85%", percentage: "79%" }
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const loginMessage = document.getElementById('loginMessage');
    const logoutBtn = document.getElementById('logoutBtn');

    // Handle Login Form Submission
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const idInput = document.getElementById('studentId').value.trim();
            const passInput = document.getElementById('studentPassword').value.trim();

            const student = studentsDatabase[idInput];

            if (student && student.password === passInput) {
                // Populate Dashboard Fields
                document.getElementById('displayName').textContent = student.name;
                document.getElementById('displayId').textContent = idInput;
                document.getElementById('displayClass').textContent = student.class;
                document.getElementById('displayFees').textContent = student.fees;
                document.getElementById('displayPending').textContent = student.pending;
                document.getElementById('displayAttendance').textContent = student.attendance;
                document.getElementById('displayPercentage').textContent = student.percentage;

                // Switch Views
                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
                loginForm.reset();
                loginMessage.textContent = '';
            } else {
                loginMessage.style.color = 'var(--accent-color)';
                loginMessage.textContent = 'Invalid Student ID or Password. Please try again.';
            }
        });
    }

    // Handle Logout
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            dashboardSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }
});
