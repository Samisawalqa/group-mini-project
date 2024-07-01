const project = [
    {
        id : 1,
        name : "Home page",
        NO_of_tasks : 3,
        tasks : {
            task_1 : "navbar",
            task_2 : "body section",
            task_3 : "footer"
        },
        status : "Compleated",
        due_date : Date(2024, 6, 1),
        history : {

        }
        }
    ,
    {
        id : 2,
        name : "Dashboard",
        NO_of_tasks : 3,
        tasks : {
            task_1 : "bootstrap design",
            task_2 : "data table",
            task_3 : "cards"
        },
        status : "To Do",
        due_date : Date(2024, 7, 1),
        history : {

        }
    }
    ,
    {
        id : 3,
        name : "Project cards",
        NO_of_tasks : 3,
        tasks : {
            task_1 : "add project",
            task_2 : "add_fetch data",
            task_3 : "edit & delete icone"
        },
        status : "In progress",
        due_date : Date(2024, 6, 1),
        history : {

        }
        }
];

// Store the data in local storage
// localStorage.setItem('employees', JSON.stringify(employees));

let show = document.getElementById("to_add_proj");

        // Object to hold form URLs for different projects - Popup
        var projectForms = {
            'first project': 'forms/first-project-form.html',
            'second project': 'forms/second-project-form.html',
            'add task': 'forms/add-task-form.html' // Example for Add Task button
        };


        function openFormModal(content) {
            var modal = document.getElementById('formModal');
            var modalForm = modal.querySelector('.modal-form');
            modalForm.action = projectForms[content.toLowerCase()];
            modal.style.display = 'block';
        }


        function closeFormModal() {
            var modal = document.getElementById('formModal');
            modal.style.display = 'none';
            Search.style.display='none';
        }

        // Add Button
        window.onclick = function(event) {
            var modal = document.getElementById('formModal');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        // valus from project name and description
        document.getElementById('send').addEventListener('click',(e)=>{
            e.preventDefault();

            const projectName = document.getElementById('nameproject').value;
            const projectDescription = document.getElementById('projectinput').value;
    
            const signedInUser= JSON.parse(localStorage.getItem('signedInUser'));
            signedInUser.project = {projectName:projectName,projectDescription:projectDescription};
            localStorage.setItem("signedInUser",JSON.stringify(signedInUser));
            document.getElementById('to_add_proj').innerHTML+=`<div class="card-header">
                                <i class="fas fa-table me-1"></i>
                                <div>"${signedInUser.project['projectName']}"</div> 
                                <div>"${signedInUser.project['projectDescription']}"</div> 

                            </div>
                            <div id="p_cards" class="card-body">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        <div class="head_pTasks">
                                            <div><strong>To Do</strong></div>
                                            <i class="fa-solid fa-plus" style="color: #769fcd;"></i>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div class="taskItem">
                                            
                                            
                                            
                                        </div>
                                        <div>
                                            

                                        </div>
                                        <div>
                                            
                                        </div>
                                    </ul>
                                  </div>
                                  <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        <div>
                                            <strong>In progress</strong>
                                            <i class="fa-solid fa-plus" style="color: #769fcd;"></i>
                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            

                                        </div>
                                        <div>
                                           

                                        </div>
                                        <div>
                                            

                                        </div>
                                    </ul>
                                  </div>
                                  <div class="card" style="width: 18rem;">
                                    <div class="card-header">
                                        <div>
                                            <strong>Compleated</strong>
                                            <i class="fa-solid fa-plus" style="color: #769fcd;"></i>

                                        </div>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            

                                        </div>
                                        <div>
                                          

                                        </div>
                                        <div>
                                           

                                        </div>
                                    </ul>
                                  </div>
                            </div>`


        })
    