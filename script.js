const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask() {
  const task = inputBox.value;
  if(task === '') {
    alert('Please enter a task');
     }
  else
    {
    const listItem = document.createElement('li');
    listItem.innerHTML = task;
    listContainer.appendChild(listItem);
    let span = document.createElement('span');
    span.innerHTML = '\u00D7';
    listItem.appendChild(span);
    saveData();
  }
}
listContainer.addEventListener('click', function(e) {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if(e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
}

function showTask()
{
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();