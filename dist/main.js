// Add project btn
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
        // valus from project name and description to add project
        document.getElementById('send').addEventListener('click',(e)=>{
            e.preventDefault();

            const projectName = document.getElementById('nameproject').value;
            const projectDescription = document.getElementById('projectinput').value;
            const signedInUser= JSON.parse(localStorage.getItem('signedInUser'));
            signedInUser.project = {projectName:projectName,projectDescription:projectDescription};
            localStorage.setItem("signedInUser",JSON.stringify(signedInUser));
            document.getElementById('to_add_proj').innerHTML+=
                            `<div class="card-header d-flex justify-content-between align-items-center">
                                <div class="d-flex align-items-center">
                                    <i class="fas fa-table me-1"></i>
                                    <div>${signedInUser.project.projectName}</div>
                                    <div>${signedInUser.project.projectDescription}</div>
                                </div>
                                <div class="bg-danger rounded p-2 btn ">
                                    <span class="text-light" id="removeProject_btn" > - RemoveProject</span>
                                    </div>
                                 </div>
                                <div id="p_cards" class="card-body">
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header card-header d-flex justify-content-between">
                                            <span>To Do</span>
                                            <i class="fa-solid fa-plus" style="color: #769fcd;"></i>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div class="taskItem ">
                                            <li class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>
                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>

                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header d-flex justify-content-between">
                                        
                                            <span>In progress</span>
                                            <i class="fa-solid fa-plus" style="color: #769fcd;"></i>
                                        
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                    </ul>
                                </div>
                                <div class="card" style="width: 18rem;">
                                    <div class="card-header d-flex justify-content-between">
                                            <div>
                                                <span>Completed</span>
                                            </div>
                                            <div>
                                                <i class="fa-solid fa-plus " style="color: #769fcd;"></i>
                                            </div>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                                class="list-group-item card-header d-flex justify-content-between align-items-center">
                                                "Task 1"
                                                <div>
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                    <i class="fa-solid fa-trash"></i>
                                                </div>

                                            </li>
                                        </div>
                                        <div>
                                            <li
                                            class="list-group-item card-header d-flex justify-content-between align-items-center">
                                            "Task 1"
                                            <div>
                                                <i class="fa-solid fa-pen-to-square"></i>
                                                <i class="fa-solid fa-trash"></i>
                                            </div>

                                        </li>
                                        </div>
                                    </ul>
                                </div>
                            </div>`;
            document.getElementById('sideProjects').innerHTML+=
                                    `<a class="nav-link" href="#">${signedInUser.project.projectName}</a>`;
                                   
                                    

        });

// Add tasks btn
