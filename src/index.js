document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskList = new TaskList();
  const newTask = document.getElementById("tasks");

  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  newForm.addEventListener("submit", (eventFunc) => {
    eventFunc.preventDefault();
    taskList.createNewTask(newTaskDescription.value);
    eventFunc.target.reset();
    renderApp();
  //had some trouble getting the code to work in the browser, but feel like I'm getting close.
  // *Reminder for myself to return to this assignment later*
  })
});

