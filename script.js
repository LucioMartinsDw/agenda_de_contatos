document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    abrirNovaJanela(nome, telefone);

    document.getElementById('formulario').reset(); // Limpar o formulário após o cadastro
});

function abrirNovaJanela(nome, telefone) {
    var dados = "Nome: " + nome + "\nTelefone: " + telefone;
    var novaJanela = window.open('', 'Dados do Contato', 'width=400,height=200');
    novaJanela.document.body.innerText = dados;
}
