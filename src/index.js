document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form")
  form.addEventListener("submit",(e) => {
    e.preventDefault()
    handleToDo(e.target.new_task_description.value)
    form.reset()
  })

});
function handleToDo(todo){
  let li = document.createElement("li")
  let button = document.createElement("button")
  button.addEventListener("click", handleDelete)
  button.textContent = "x"
  li.textContent = todo
  li.appendChild(button)
  console.log(li)
  document.querySelector("#list").appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
