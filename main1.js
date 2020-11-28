let names = ["Alex", "Boris", "Kola", "Misha"];
let tBody = document.querySelector("tbody");
let filterInput = document.querySelector(".filter");
let filterNames = []
let newNameInput = document.querySelector(".new_name")
let btn = document.querySelector(".btn")

//--------------Заполнили таблицу Именами---------------

for (let i = 0; i < names.length; i++) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.textContent = names[i];
    tr.appendChild(td)
    tBody.appendChild(tr)
}

//------------При вводе текста в фильтр

filterInput.oninput = function () {
//------------Обновлятся список отфильтрофаных имен, именами которые совпадают под введеные пользователем
    filterNames = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].toLowerCase().includes(filterInput.value.toLowerCase())) {
            filterNames.push(names[i])
        }
    }
//-----------В таблице очищаем строки, рисуем строку для каждого и отфильтрованого имени
    tBody.textContent = ''
    for (let i = 0; i < filterNames.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = filterNames[i]
        tr.appendChild(td)
        tBody.appendChild(tr)
    }
}
//-----------Вводим новое имя и при клике на кнопк добавляем его новой строкой в таблицу
btn.onclick = function () {
    names.push(newNameInput.value)
    filterNames = []
    for (let i = 0; i < names.length; i++) {
        if (names[i].toLowerCase().includes(filterInput.value.toLowerCase())) {
            filterNames.push(names[i])
            console.log(filterNames)
        }
    }


    tBody.textContent = ''
    for (let i = 0; i < filterNames.length; i++) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.textContent = filterNames[i]
        tr.appendChild(td)
        tBody.appendChild(tr)
    }
}
