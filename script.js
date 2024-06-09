document.addEventListener('DOMContentLoaded', () => {
    const users = [
        { id: 1, username: 'AdminUser', email: 'admin@piworks.net', enabled: true },
        { id: 2, username: 'Test User', email: 'testuser@piworks.net', enabled: true }
    ];

    const userTableBody = document.querySelector('#userTable tbody');
    const newUserButton = document.getElementById('newUserButton');
    const hideDisabledUserCheckbox = document.getElementById('hideDisabledUser');
    const newUserForm = document.getElementById('newUserForm');
    const userForm = document.getElementById('userForm');

    function renderUsers() {
        userTableBody.innerHTML = '';
        users.forEach(user => {
            if (hideDisabledUserCheckbox.checked && !user.enabled) {
                return;
            }
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td>${user.enabled ? 'true' : 'false'}</td>
            `;
            userTableBody.appendChild(row);
        });
    }

    newUserButton.addEventListener('click', () => {
        newUserForm.classList.toggle('hidden');
    });

    hideDisabledUserCheckbox.addEventListener('change', renderUsers);

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUser = {
            id: users.length + 1,
            username: document.getElementById('username').value,
            displayName: document.getElementById('displayName').value,
            phone: document.getElementById('phone').value,
            email: document.getElementById('email').value,
            userRoles: document.getElementById('userRoles').value,
            enabled: document.getElementById('enabled').checked
        };
        users.push(newUser);
        userForm.reset();
        newUserForm.classList.add('hidden');
        renderUsers();
        alert('User added successfully!');
    });

    renderUsers();
});
