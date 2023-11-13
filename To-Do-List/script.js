document.addEventListener("DOMContentLoaded",function() {
    const taskList=document.getElementById("task-list");
    const addTaskInput=document.getElementById("add-task-input");
    const addTaskButton=document.getElementById("task-button");

    addTaskButton.addEventListener("click",function(){
        const taskText=addTaskInput.value.trim();
        if(taskText!== ''){
         const taskElement= createTaskElement(taskText);
         taskList.appendChild(taskElement); 
         addTaskInput.value='';
            
        }
    });


function createTaskElement(taskText){
    const taskElement=document.createElement('li');
    taskElement.className="task";

    const label=document.createElement("label");
    label.textContent=taskText;

    const priority=document.createElement("select");
    priority.innerHTML = `
    <option value="high">High Priority</option>
    <option value="medium">Medium Priority</option>
    <option value="low">Low Priority</option>
`;
    



    const deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";
    deleteButton.className="delete-btn";

    
    deleteButton.addEventListener("click",function(){
        taskElement.remove();
    });
    taskElement.appendChild(label);
    taskElement.appendChild(priority);
    taskElement.appendChild(deleteButton);
    
    return taskElement;

}
});

