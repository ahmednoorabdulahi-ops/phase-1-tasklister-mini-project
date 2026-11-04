// Wait until the HTML has fully loaded before looking for elements,
// otherwise document.querySelector could return null.
document.addEventListener("DOMContentLoaded", () => {
  // Step 2: Select the form by its id
  const form = document.querySelector("#create-task-form");

  // Listen for the form being submitted (button click or Enter key)
  form.addEventListener("submit", (e) => {
    // Stop the browser's default behaviour of reloading the page
    e.preventDefault();

    // Step 3: e.target is the form itself. Its .elements collection holds
    // every input, which we look up by the name attribute
    // "new-task-description" to get the text the user typed.
    const task = e.target.elements["new-task-description"].value;

    // Ignore empty or space-only submissions
    if (task.trim() === "") {
      return;
    }

    // Pass the saved task to buildToDo to put it on the page
    buildToDo(task);

    // Clear the form so the user can type the next task
    form.reset();
  });
});

// Step 4: Creates a list item for the task and adds it to the task list
function buildToDo(task) {
  // Create a new <li> element
  const li = document.createElement("li");

  // Use textContent (not innerHTML) so any HTML the user types
  // is shown as plain text instead of being run as code
  li.textContent = task;

  // The task list is the <ul> with the id "tasks" in index.html
  document.querySelector("#tasks").appendChild(li);
}