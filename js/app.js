const inputTarefa = document.querySelector('#tarefa');
const btnAdd = document.querySelector('#btnAdd');
const ul = document.querySelector('ul')


let startApp = () => {

    let date = new Date();
    data = document.getElementById("data-tarefa").value
    document.querySelector('.data-hoje')

         //Validação input
        task = document.getElementById("tarefa").value
        if( task == ""){
            alert("Por favor insira uma tarefa")    
        } data = document.getElementById("data-tarefa").value
        if( data == ""){
            alert("Por favor insira uma data para sua tarefa")
        } else {

        
    ul.innerHTML += `<li> ${inputTarefa.value} <label for="">Data de início:</label> <span class="data-hoje"> ${date.toLocaleDateString()}</span> <label for="">Data limite: ${data}</label> <input type="checkbox" name="completed" class="completed"/> <input class= "Excluir" type="button" value="Excluir"/></li>`

        const checkbox = document.querySelectorAll('.completed');
        const li = document.querySelectorAll('li')

        for(let i = 0; i < checkbox.length; i++) {
            checkbox[i].addEventListener('change', function() {
                if(this.checked){
                    li[i].style.textDecoration = 'line-through'
                    li[i].style.textDecorationColor = 'black'
                } else {
                    li[i].style.textDecoration = 'none'
                }
        })
    }

        //Excluir Tarefa 
        let excluirTarefa = document.querySelectorAll(".Excluir");
        
        for (let i = 0; i<excluirTarefa.length; i++){
            excluirTarefa[i].onclick = function Excluir (){
            let confirmar = confirm("Deseja excluir esta tarefa?")  
                if(confirmar){
                this.parentNode.remove()
                alert("Tarefa excluida!")
                }
                else{
                    alert("Tarefa não excluida")
                }
            }
            
        }
        
        
        
    }
}


btnAdd.addEventListener('click', (e) => {
    e.preventDefault()
    startApp()

})

inputTarefa.addEventListener('keyup', function (event) {
    if (event.code === 'Enter') {
        event.preventDefault()
        startApp()
    }
})