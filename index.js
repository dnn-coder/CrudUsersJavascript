const students = [{
        id: 1,
        name: 'Jill',
        lastname: 'Doe',
        age: 24,
        course: 'Marketing',
        email: 'Jill@gmail.com',
        contact: [
            { phone: 315421123, adress: 'calle falsa 123' },
            { email: 'jill@gmail.com', facebook: 'jull@facebook.com' },
        ],
    },
    {
        id: 2,
        name: 'John',
        lastname: 'Doe',
        age: 22,
        course: 'Web Development',
        email: 'John@gmail.com',
        contact: [
            { phone: 315421123, adress: 'calle falsa 123' },
            { email: 'jhonD@gmail.com', facebook: 'jhon@facebook.com' },
        ],
    },
    {
        id: 3,
        name: 'Jack',
        lastname: 'Doe',
        age: 20,
        course: 'Accounting',
        email: 'Jack@gmail.com',
        contact: [
            { phone: 315421123, adress: 'calle falsa 123' },
            { email: 'Jdoe@gmail.com', facebook: 'Jdoe@facebook.com' },
        ],
    },
    {
        id: 4,
        name: 'Ryan',
        lastname: 'Ray',
        age: 23,
        course: 'Web Development',
        email: 'Ryan@gmail.com',
        contact: [
            { phone: 315421123, adress: 'calle falsa 123' },
            { email: 'rayan@gmail.com', facebook: 'rayan-ray@facebook.com' },
        ],
    },
    {
        id: 5,
        name: 'Jane',
        lastname: 'Doe',
        age: 20,
        course: 'Financial Management',
        email: 'Jane@gmail.com',
        contact: [
            { phone: 315421123, adress: 'calle falsa 123' },
            { email: 'jane@gmail.com', facebook: 'janeeee@facebook.com' },
        ],
    },
];

let updating = false;
let updatingId = -1;

function printUsers() {
    const container = document.getElementById('table-users');
    let html = '';
    students.forEach(student => {
        html += `
        <tr>
            <td>${student.name}</td>
            <td>${student.email}</td>
            <td>
                <button onClick="deleteUser(${student.id})" class='btn btn-danger'>
                    Delete
                </button>
                <button onClick="enableUpdateUser(${student.id})" class='btn btn-warning'>
                    Update
                </button>
            </td>
        </tr>`;
    });

    container.innerHTML = html;
}

function deleteUser(id) {
    const index = students.findIndex(user => user.id == id);
    students.splice(index, 1);
    printUsers();
}

function enableUpdateUser(id) {
    updatingId = id;
    const student = students.find(student => student.id === id);
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    inputName.value = student.name;
    inputEmail.value = student.email;

    updating = true;
    const button = document.getElementById('save');
    button.textContent = 'Actualizar';
    button.classList.remove('btn-primary');
    button.classList.add('btn-warning');
}

function addUser() {
    if (updating) {
        updateUser();
        return;
    } else {
        const inputName = document.getElementById('name');
        const inputEmail = document.getElementById('email');
        const name = inputName.value;
        const email = inputEmail.value;

        let id = 1;
        if (students.length > 0) {
            id = students[students.length - 1].id + 1;
        }

        const newUser = {
            id,
            name,
            email,
        };
        students.push(newUser);
        printUsers();
        document.getElementById('form-user').reset();
    }
}

function updateUser() {
    const student = students.find(student => student.id === updatingId);
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const name = inputName.value;
    const email = inputEmail.value;

    student.name = name;
    student.email = email;

    printUsers();
    document.getElementById('form-user').reset();
    updating = false;
    updatingId = -1;
    const button = document.getElementById('save');
    button.textContent = 'Submit';
    button.classList.remove('btn-warning');
    button.classList.add('btn-primary');
}

printUsers();