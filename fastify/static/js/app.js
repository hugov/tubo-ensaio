const URL_API_SERVICE_USER = 'http://localhost:3000/user';

async function loadUserList() {
    console.log('Carregando a listagem de usuários cadastrados')

    let response = await fetch(URL_API_SERVICE_USER);
    console.debug('response: ', response);

    if(response.status == 200) {
        let data = await response.text();
        renderTable(JSON.parse(data));
    }
}

async function retrieveUserById(id) {
    console.log(`Consultando o usuário ${id}`)

    let response = await fetch(`${URL_API_SERVICE_USER}/${id}`);
    if(response.status === 200) {
        let data = await response.text();
        return JSON.parse(data);
    }
}

async function deleteUserById() {
    let modal = document.querySelector('dialog');
    
    id = modal.getAttribute('data-id');
    console.log(`Excluindo o usuário ${id}`);

    let response = await fetch(`${URL_API_SERVICE_USER}/${id}`, { method: 'DELETE' });
    if(response.status === 200) {
        closeModal('closeModal-confirm');
        loadUserList();
    }
}

function closeModal(screen) {
    let modal = document.getElementById(screen == 'closeModal-form' ? 'formModal' : 'confirmDeleteModal');
    modal.removeAttribute('open');
    modal.removeAttribute('data-id');
}

async function openModal(screen, id) {
    let modal = null;
    if(screen == 0) {
        modal = document.getElementById('confirmDeleteModal');
    } else if(screen > 0) {
        modal = document.getElementById('formModal');
    }

    modal.setAttribute('open', '');
    modal.setAttribute('data-id', id);

    // Tela de consulta
    if(screen === 1) {
        let data = await retrieveUserById(id);

        let form = document.getElementById('updateForm');
        form['formType'].value = 1;
        form['name'].value = data[0].name;
        form['email'].value = data[0].email;

        // Seleciona o campo <Select>
        document.getElementById('statusSelect').value = data[0].status;

        let buttonSubmit = document.getElementById('buttonSubmit');
        buttonSubmit.hidden = true;
    }

    // Tela de inclusão
    else if(screen === 2) {
        let form = document.getElementById('updateForm');
        form['formType'].value = 2;
    }

    // Tela de alteração
    else if(screen === 3) {
        let data = await retrieveUserById(id);

        let form = document.getElementById('updateForm');
        form['formType'].value = 3;
        form['name'].value = data[0].name;
        form['email'].value = data[0].email;

        // Seleciona o campo <Select>
        document.getElementById('statusSelect').value = data[0].status;

        let buttonSubmit = document.getElementById('buttonSubmit');
        buttonSubmit.hidden = false;
    }
}

function renderTable(data) {
    const tableBody = document.getElementById('userList');
    tableBody.innerHTML = '';

    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.status == 1 ? 'Ativo' : 'Inativo'}</td>
            <td>
                <button onclick="openModal(1, '${user.id}');" data-tooltip="Consultar usuário"><i class="fas fa-eye"></i></button>
                <button onclick="openModal(3, '${user.id}');" data-tooltip="Atualizar usuário"><i class="fas fa-edit"></i></button>
                <button onclick="openModal(0, '${user.id}');" data-tooltip="Excluir usuário"><i class="fas fa-trash-alt"></i></button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

async function onSubmitInsertAndUpdate() {
    let modal = document.getElementById('updateScreenModal');
    let form = document.getElementById('updateForm');

    id = modal.getAttribute('data-id');

    var formData = new FormData(form);
    data = Object.fromEntries(formData);

    var response;
    if(data.formType == 2) {
        response = await fetch(URL_API_SERVICE_USER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    } else if(data.formType == 3) {
        response = await fetch(URL_API_SERVICE_USER + '/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }
    
    if(response.status === 200) {
        closeModal('closeModal-form');
        loadUserList();
        form.reset();
    }
}

loadUserList();