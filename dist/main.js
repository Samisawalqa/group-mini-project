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
