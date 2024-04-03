document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;

    adicionarContato(nome, telefone);

    document.getElementById('formulario').reset(); 
});

function adicionarContato(nome, telefone) {
    var tabela = document.getElementById('corpoTabela');

    var novaLinha = tabela.insertRow();

    var colunaNome = novaLinha.insertCell(0);
    var colunaTelefone = novaLinha.insertCell(1);

    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;
   
    novaLinha.style.border = "1px solid #ddd";
    colunaNome.style.border = "1px solid #ddd";
    colunaTelefone.style.border = "1px solid #ddd";
}
