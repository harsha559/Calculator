const form = document.querySelector("#form");
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const task1 = document.querySelector(".task1");

// ADDITION

const button = document.createElement("button");
button.innerHTML = "ADD +"
form.appendChild(button);
button.classList.add("btn");
button.classList.add("btn-warning");
button.classList.add("my-4");
// button.classList.add("h-25")

button.addEventListener("click", (e) => {
    e.preventDefault();

    var numbervalue = parseFloat(input1.value);
    var numbervalue1 = parseFloat(input2.value);

    const sum = numbervalue + numbervalue1;

    if (isNaN(numbervalue) || isNaN(numbervalue1)) {
        alert("Please enter valid numbers!");
        return;
    }

    const test = document.createElement("test");
    test.classList.add("test")

    const inputEl = document.createElement("div");
    inputEl.classList.add("form-control");
    inputEl.textContent = "ADDING :" + " " + sum;
    inputEl.classList.add("my-3")
    test.appendChild(inputEl);
    task1.appendChild(test);

    input1.value = ""
    input2.value = ""

    button.addEventListener("click", () => {
        test.removeChild(inputEl);
    })
    input1.focus();

});


// SUBRACTION

const button1 = document.createElement("button");
button1.innerHTML = "SUB -";
form.appendChild(button1);
button1.classList.add("btn");
button1.classList.add("btn-warning");
button1.classList.add("my-3");
button1.classList.add("mx-4");
// button1.classList.add("h-25")

button1.addEventListener("click", (e) => {
    e.preventDefault();

    var numbervalue = parseFloat(input1.value);
    var numbervalue1 = parseFloat(input2.value);

    const sub = numbervalue - numbervalue1;

    if (isNaN(numbervalue) || isNaN(numbervalue1)) {
        alert("Please enter valid numbers!");
        return;
    }

    const test = document.createElement("test");
    test.classList.add("test");

    const inputEl = document.createElement("div");
    inputEl.classList.add("form-control");
    inputEl.textContent = "SUBRACTION :" + " " + sub;
    test.appendChild(inputEl);
    task1.appendChild(test);

    input1.value = ""
    input2.value = ""

    button1.addEventListener("click", () => {
        test.removeChild(inputEl);
    })
    input1.focus();

});


// MULTIPLICATION

const button2 = document.createElement("button");
button2.innerHTML = "MUL *";
form.appendChild(button2);
button2.classList.add("btn");
button2.classList.add("btn-warning");
button2.classList.add("my-3");

button2.addEventListener("click", (e) => {
    e.preventDefault();

    var numbervalue = parseFloat(input1.value);
    var numbervalue1 = parseFloat(input2.value);

    const mul = numbervalue * numbervalue1;

    if (isNaN(numbervalue) || isNaN(numbervalue1)) {
        alert("Please enter valid numbers!");
        return;
    }

    const test = document.createElement("test");
    test.classList.add("test");

    const inputEl = document.createElement("div");
    inputEl.classList.add("form-control");
    inputEl.classList.add("my-3");
    inputEl.textContent = "MULTIPLICATION :" + " " + mul;
    test.appendChild(inputEl);
    task1.appendChild(test);

    input1.value = ""
    input2.value = ""

    button2.addEventListener("click", () => {
        test.removeChild(inputEl);
    })
    input1.focus();

});


// DIVISION

const button3 = document.createElement("button");
button3.innerHTML = "DIV /";
form.appendChild(button3);
button3.classList.add("btn");
button3.classList.add("btn-warning");
button3.classList.add("my-3");
button3.classList.add("mx-4");

button3.addEventListener("click", (e) => {
    e.preventDefault();

    var numbervalue = parseFloat(input1.value);
    var numbervalue1 = parseFloat(input2.value);

    const div = numbervalue / numbervalue1;

    if (isNaN(numbervalue) || isNaN(numbervalue1)) {
        alert("Please enter valid numbers!");
        return;
    }

    const test = document.createElement("test");
    test.classList.add("test");

    const inputEl = document.createElement("div");
    inputEl.classList.add("form-control");
    inputEl.textContent = "DIVISION :" + " " + div;
    test.appendChild(inputEl);
    task1.appendChild(test);

    input1.value = ""
    input2.value = ""

    button3.addEventListener("click", () => {
        test.removeChild(inputEl);
    })

    input1.focus();

});


// CLAER BUTTON

const button4 = document.createElement("button");
button4.innerHTML = "CLEAR";
button4.classList.add("btn");
button4.classList.add("btn-warning");
button4.classList.add("my-3");
button4.classList.add("mx-auto");
button4.classList.add("w-25");

form.appendChild(button4);

form.addEventListener("click", () => {
    task1.removeChild(test);
})













