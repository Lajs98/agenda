document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('FormLista');
    const tableBody = document.querySelector('#tablebody tbody');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário

        // Captura os valores dos campos do formulário
        const nome = document.getElementById('NomeColab').value;
        const telefone = document.getElementById('telMovelColab').value;
        const email = document.getElementById('emailColab').value;

        // Captura o tipo de telefone selecionado e define a imagem correspondente
        const tipoTelefone = document.querySelector('input[name="celtel"]:checked');
        let tipoTelefoneImagem = '';

        if (tipoTelefone) {
            if (tipoTelefone.value === 'cel') {
                tipoTelefoneImagem = '<img src="./img/smartphone-call.png" class="telefone-icon">';
            } else if (tipoTelefone.value === 'tel') {
                tipoTelefoneImagem = '<img src="./img/telephone.png" class="telefone-icon">';
            }
        }

        // Cria uma nova linha na tabela
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${nome}</td>
            <td>${telefone}${tipoTelefoneImagem} </td>
            <td>${email}</td>
        `;
        
        // Adiciona a nova linha à tabela
        tableBody.appendChild(newRow);

        // Limpa o formulário
        form.reset();
    });
});
