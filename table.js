document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector('#dataTable tbody');
    const formData = JSON.parse(localStorage.getItem('formData')) || [];

    function displayData() {
        tableBody.innerHTML = '';
        formData.forEach((data, index) => {
            const row = document.createElement('tr');

            Object.values(data).forEach(value => {
                const cell = document.createElement('td');
                cell.textContent = value;
                row.appendChild(cell);
            });

            const actionsCell = document.createElement('td');
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editData(index));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteData(index));

            actionsCell.appendChild(editButton);
            actionsCell.appendChild(deleteButton);
            row.appendChild(actionsCell);

            tableBody.appendChild(row);
        });
    }

    function editData(index) {
        const data = formData[index];
        const name = prompt('Full Name', data.name);
        const email = prompt('Email', data.email);
        const mobile = prompt('Mobile Number', data.mobile);
        const username = prompt('Username', data.username);
        const password = prompt('Password', data.password);

        formData[index] = { name, email, mobile, username, password };
        localStorage.setItem('formData', JSON.stringify(formData));
        displayData();
    }

    function deleteData(index) {
        formData.splice(index, 1);
        localStorage.setItem('formData', JSON.stringify(formData));
        displayData();
    }

    displayData();
});
