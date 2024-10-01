document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addTaskBtn = document.getElementById('add-task-btn');
  
    // Add a new task
    addTaskBtn.addEventListener('click', () => {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        taskInput.value = ''; // Clear input field
      }
    });
  
    // Add a task with options to complete, edit, and delete
    function addTask(taskText) {
      const taskItem = document.createElement('li');
  
      const taskContent = document.createElement('input');
      taskContent.type = 'text';
      taskContent.value = taskText;
      taskContent.setAttribute('readonly', 'readonly');
  
      const completeBtn = document.createElement('button');
      completeBtn.innerText = '✔️';
      completeBtn.classList.add('complete-btn');
  
      const editBtn = document.createElement('button');
      editBtn.innerText = '✏️';
      editBtn.classList.add('edit-btn');
  
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = '❌';
  
      taskItem.appendChild(taskContent);
      taskItem.appendChild(completeBtn);
      taskItem.appendChild(editBtn);
      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);
  
      // Mark task as complete
      completeBtn.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
      });
  
      // Edit task
      editBtn.addEventListener('click', () => {
        if (editBtn.innerText === '✏️') {
          taskContent.removeAttribute('readonly');
          taskContent.focus();
          editBtn.innerText = '💾';
        } else {
          taskContent.setAttribute('readonly', 'readonly');
          editBtn.innerText = '✏️';
        }
      });
  
      // Delete task
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
      });
    }
  });
  