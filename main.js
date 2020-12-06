/*
Check if task Exist
Create Delete All Tasks Button
Create Finish All Tasks Button
*/

let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


//Focus On Input Field
window.onload = function(){
    theInput.focus();
}

//Adding The Task
theAddButton.onclick = function(){

    // Task Already Exist
    let AllTasks = Array.from(document.querySelectorAll('.tasks-content .task-box'));
    for(let i=0; i< AllTasks.length; i++){
    //console.log(AllTasks[i].firstChild.textContent);
        if(theInput.value === AllTasks[i].firstChild.textContent){
            alert('Task Already Exist');
        }
    }
    
    if(theInput.value === ''){
        
        alert('Please Enter a Value');

    }else {

        let noTaskMsg = document.querySelector(".no-tasks-message");

        //Check If Span With No Tasks Message Is Exist
        if(document.body.contains(document.querySelector('.no-tasks-message'))){

            //Remove No Tasks Message
            noTaskMsg.remove();

        }

        //Create Main Span Element
        let mainSpan = document.createElement("span");

        //Create Delete Button
        let deleteElement = document.createElement("span");

        //Create The Main Span Text
        let text = document.createTextNode(theInput.value);
        
        //Create The Delete Button Text
        let deleteText = document.createTextNode("Delete");

        //Add Text To Main Span
        mainSpan.appendChild(text);

        //Add Class To Main Span
        mainSpan.className = 'task-box';

        //Add Text To Delete Button
        deleteElement.appendChild(deleteText);

        //Add Class To Delete Button
        deleteElement.className = 'delete';

        //Add Delete Button To Main Span
        mainSpan.appendChild(deleteElement);

        //Add The Task To The Container
        tasksContainer.appendChild(mainSpan);

        // Empty The Input
        theInput.value = '';
        //Focus On Field
        theInput.focus();

        //Calculate Tasks
        calculateTasks();

    }

}

document.addEventListener('click', function(e){

    //Delete Task
    if(e.target.className == 'delete'){

        //Remove Current Task
        e.target.parentNode.remove();

        // Check Number Of Tasks Inside The Container
        if(tasksContainer.childElementCount == 0){

            createNoTasks();

        }

    }

    //Finish Task
    if(e.target.classList.contains('task-box')){

        //Toggle Class Finished
        e.target.classList.toggle('finished');

    }

    //Calculate Tasks
    calculateTasks();

})

//Function To Create No Tasks Message
function createNoTasks(){

    //Create Message Span Element
    let msgSpan = document.createElement("span");

    //Create The Text Message
    let msgText = document.createTextNode("No Tasks To Show");

    //Add Text To Message Span Element
    msgSpan.appendChild(msgText);

    //Add Class To Message Span
    msgSpan.className = 'no-tasks-message';

    //Append The Message Span Element To The Tasks Container
    tasksContainer.appendChild(msgSpan);

}

// Function To Calculate Tasks
function calculateTasks(){

    //Calculate All Tasks
    tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;

    //Calculate All Tasks
    tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}

let DeleteAllTasks = document.querySelector('.delet');

DeleteAllTasks.onclick = function(){

    let AllTasks = Array.from(document.querySelectorAll('.tasks-content .task-box'));
    for(let i=0; i< AllTasks.length; i++){
        AllTasks[i].remove();
    }

    if(tasksContainer.childElementCount == 0){

        createNoTasks();

    }

}

let FinishAllTasks = document.querySelector('.finish');

FinishAllTasks.onclick = function(){

    let AllTasks = Array.from(document.querySelectorAll('.tasks-content .task-box'));
    for(let i=0; i< AllTasks.length; i++){
        AllTasks[i].classList.add('finished');
    } 
}