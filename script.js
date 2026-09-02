const studentsDatabase = {
    "01": { password: "tiya10june", name: "TIYA RAHEJA", class: "6th Grade", fees: "700", pending: "200", attendance: "80%", percentage: "0%" },
    "02": { password: "rudra6june", name: "RUDRA", class: "6th Grade", fees: "500", pending: "0", attendance: "90%", percentage: "10%" },
    "03": { password: "saksham31july", name: "SAKSHAM", class: "6th Grade", fees: "700", pending: "700", attendance: "80%", percentage: "0%" },
    "04": { password: "tanmay3august", name: "TANMAY", class: "7th Grade", fees: "850", pending: "850", attendance: "80%", percentage: "0%" },
    "05": { password: "aadharh6august", name: "AADHARSH", class: "7th Grade", fees: "800", pending: "0", attendance: "90%", percentage: "0%" },
    "06": { password: "ansh6august", name: "ANSH", class: "3rd Grade", fees: "500", pending: "0", attendance: "80%", percentage: "0%" }
};

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const loginMessage = document.getElementById('loginMessage');
    const logoutBtn = document.getElementById('logoutBtn');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let idInput = document.getElementById('studentId').value.trim();
            const passInput = document.getElementById('studentPassword').value.trim();

            // Automatically format single-digit inputs (e.g., entering "1" checks as "01")
            if (idInput.length === 1) {
                idInput = "0" + idInput;
            }

            const student = studentsDatabase[idInput];

            if (student && student.password === passInput) {
                document.getElementById('displayName').textContent = student.name;
                document.getElementById('displayId').textContent = idInput;
                document.getElementById('displayClass').textContent = student.class;
                document.getElementById('displayFees').textContent = student.fees;
                document.getElementById('displayPending').textContent = student.pending;
                document.getElementById('displayAttendance').textContent = student.attendance;
                document.getElementById('displayPercentage').textContent = student.percentage;

                loginSection.style.display = 'none';
                dashboardSection.style.display = 'block';
                loginForm.reset();
                loginMessage.textContent = '';
            } else {
                loginMessage.style.color = 'red';
                loginMessage.textContent = 'Invalid Student ID or Password. Please try again.';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            dashboardSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }
});
