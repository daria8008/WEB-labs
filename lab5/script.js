const name = /^[А-ЯІЇ][А-Яа-яІЇії'\- ]+ [А-ЯІЇ]\.[А-ЯІЇ]\.$/;
const group = /^[А-ЯІЄЇ]{2}-\d{2}$/;
const faculty = /^[А-ЯІЄЇ]{4}$/;
const address = /^м. [А-ЯІЇ][А-Яа-яІЇії'\- ]+$/;
const telegram = /^@[\w_]{5,}$/;

const valide_name = (str) => name.test(str);
const valide_group = (str) => group.test(str);
const valide_faculty = (str) => faculty.test(str);
const valide_address = (str) => address.test(str);
const valide_telegram = (str) => telegram.test(str);

const validetors = [valide_name, valide_group, valide_faculty, valide_address, valide_telegram]

function clear_output() {
    const outputs = document.querySelectorAll(".post-container div");
    outputs.forEach(el => {
        el.textContent = el.textContent.slice(0, el.textContent.indexOf(":") + 1);
    });
}

function validate_input() {
    clear_output();
    const inputs = document.querySelectorAll("input");
    var f = true;

    for(var i = 0; i < 5; i++) {
        if(validetors[i](inputs[i].value))  {
            inputs[i].classList.remove('input');
        }
        else {
            inputs[i].classList.add('input');
            f = false;
        }
    }
    if(f) {
        const outputs = document.querySelectorAll(".post-container div");
        for(var i = 0; i < 5; i++) {
            outputs[i].textContent += " " + inputs[i].value;
        }
    }
}


// 2 Task
let variable = document.getElementById('var');
let colorPicker = document.getElementById('color_picker');
let variable2 = document.getElementById('var2');

variable.addEventListener("mouseover" , () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
     variable.style.backgroundColor = "#" + randomColor;
})

variable.addEventListener("click" , () => {
    variable.style.backgroundColor = colorPicker.value;
})

variable.addEventListener("dblclick" , () => {
    variable.style.backgroundColor = colorPicker.value;
    variable2.style.backgroundColor = colorPicker.value;
})