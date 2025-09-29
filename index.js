
    let tasks = [];

    const form = document.querySelector("form");
    const taskInput = document.getElementById("addtask"); 
    const categorySelect = document.querySelector("select[name='category']");
    const workList = document.querySelector(".worktask");
    const personalList = document.querySelector(".personaltask");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let taskText = taskInput.value; 
        let category = categorySelect.value;  

        if(taskText !== ""){
            tasks.push({ text: taskText, category: category });
            taskInput.value = "";
            displayTasks();
        }
    });

    function displayTasks(){
        
        workList.innerHTML = "";
        personalList.innerHTML = "";

        
        let workCount = 1;
        let personalCount = 1;

        
        tasks.forEach(function(task){
            let li = document.createElement("li");

            if(task.category === "work"){
                li.innerHTML = `<input type="checkbox" class="checkbox"> ${workCount}. ${task.text}`;
                workList.appendChild(li);
                workCount++;
            } 
            else if(task.category === "personal"){
                li.innerHTML = `<input type="checkbox" class="checkbox"> ${personalCount}. ${task.text}`;
                personalList.appendChild(li);
                personalCount++;
            }
        });
    }
