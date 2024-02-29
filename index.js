const input_box = document.getElementById('inp_bx');
const list_container = document.getElementById('list-container');
const btn = document.getElementById("add_btn");



function addTask() {
    if (input_box.value === '') {
        alert("enter Task");
    }
    else {
        let input_value = document.createElement("li");
        input_value.innerHTML = input_box.value;
        list_container.appendChild(input_value);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        input_value.appendChild(span);
    }
    input_box.value = '';
}
list_container.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
    }
    else {
        e.target.parentElement.remove();
    }
})