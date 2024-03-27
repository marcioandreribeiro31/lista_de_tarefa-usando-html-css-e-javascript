let input = document.getElementById("input-tarefa");
let buttonAdd = document.getElementById("button");
let Tarefas = document.getElementById("tarefas");
let marcado = false;
buttonAdd.addEventListener("click", function () {
    if (input.value != "") {
        let tarefa = document.createElement("a");
        Tarefas.appendChild(tarefa);
        tarefa.innerHTML = " - " + input.value;
        
        let quebraLinha = document.createElement("br");
        Tarefas.appendChild(quebraLinha);
        input.value = "";
        input.focus();
        tarefa.addEventListener("click", function () {
            if (marcado == false) {
                tarefa.style.textDecoration = "line-through";
                marcado = true
            } else {
                tarefa.style.textDecoration = "";
                marcado = false;
            }
        })
        tarefa.addEventListener("dblclick", function(){
            Tarefas.removeChild(tarefa);
            Tarefas.removeChild(quebraLinha);
        })
        
    }
})