let alunos =[
    ['Samuel','samuel@email.com','85 8888888'],
    ['Bruno','bruno@email.com','85 8888888'], 
    ['Mateus','matheus@email.com','85 8888888'], 
    ['Marcelo','marcelo@email.com','85 8888888'],     
]

function AddAluno(){
    event.preventDefault();
    alunos.push([`${nome.value}`,`${email.value}`,`${telefone.value}`]);
    listar();
}

function novo(){
   pagina_novo.style.display ='block'; 
   pagina_listar.style.display ='none';
}

function resetarLista(){
    tabela_alunos.innerHTML = '';
}

function listar(){  
   pagina_novo.style.display = 'none'; 
   pagina_listar.style.display = 'block';

   resetarLista ();

    alunos.forEach(function (cadaAluno) {
        tabela_alunos.innerHTML += `
        <tr> 
            <td>${cadaAluno[0]}</td>
            <td>${cadaAluno[1]}</td>
            <td>${cadaAluno[2]}</td>
            <td><button>Editar</button> <button>Excluir</button></td>
        </tr>
        `;
    })
}
