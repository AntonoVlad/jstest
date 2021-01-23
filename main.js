//----------HEADER----------

let header =
    {
        logoSrc: "https://www.clipartmax.com/png/full/210-2101708_online-and-offline-information-application-for-employment-online-logo-png.png",
        titleHeader: "Продажа АВТОМОБИЛЕЙ",
    }


let headerElement = document.createElement("div")
headerElement.classList.add("header")
document.body.appendChild(headerElement)

let headerWrapper = document.createElement("div")
headerWrapper.classList.add("headerWrapper")
headerElement.appendChild(headerWrapper)

let logoSrc = document.createElement("img")
logoSrc.classList.add("logo")
logoSrc.setAttribute("src", header.logoSrc)
headerWrapper.appendChild(logoSrc)

let titleHeader = document.createElement("h3")
titleHeader.classList.add("titleHeader")
headerWrapper.appendChild(titleHeader)
titleHeader.textContent = header.titleHeader

let btnHeader = document.createElement("div")
btnHeader.classList.add("btnHeader")
headerWrapper.appendChild(btnHeader)

let btnHeaderCall = document.createElement("button")
btnHeaderCall.classList.add("btnHeaderCall")
btnHeader.appendChild(btnHeaderCall)
btnHeaderCall.textContent = "CALL"

let btnHeaderMessage = document.createElement("button")
btnHeaderMessage.classList.add("btnHeaderMessage")
btnHeader.appendChild(btnHeaderMessage)
btnHeaderMessage.textContent = "Message"

let inputValue = document.createElement("input")
inputValue.classList.add("inputValue")
inputValue.placeholder = "Фильтр по моделям"
headerWrapper.appendChild(inputValue)

let data = [
    {
        title: "Chevrolet Tahoe, 2018",
        price: 4100000,
        address: "Санкт-Петербург, Академическая",
        creationDate: '2020-11-13T15:15:00.000Z',
        favorite: false,
        imageSrc: "https://76.img.avito.st/640x480/10032031876.jpg"

    },
    {
        title: "Chevrolet Camaro, 2016",
        price: 2280000,
        address: "Санкт-Петербург, Комендантский проспект",
        creationDate: '2020-10-31T15:23:00.000Z',
        favorite: true,
        imageSrc: "https://53.img.avito.st/640x480/9841460353.jpg"
    },
    {
        title: "Land Rover Range Rover, 2013",
        price: 3000000,
        address: "Санкт-Петербург, Адмиралтейская",
        creationDate: '2020-09-22T15:23:00.000Z',
        favorite: true,
        imageSrc: "https://66.img.avito.st/640x480/9716873266.jpg"
    }
]

inputValue.oninput = function () {
    let filteredData = []
    box.textContent = ""
    for (let i = 0; i < data.length; i++) {
        if (data[i].title.toLowerCase().includes(inputValue.value.toLowerCase())) {
            filteredData.push(data[i])
        }
    }
    for (let i = 0; i < filteredData.length; i++) {


        let boxWrapper = document.createElement("div")
        boxWrapper.classList.add("boxWrapper")
        box.appendChild(boxWrapper)

        let image = document.createElement("img")
        image.setAttribute("src", filteredData[i].imageSrc)
        boxWrapper.appendChild(image)

        let title = document.createElement("a")
        title.setAttribute("href", "/jstest/page/index.html")
        boxWrapper.appendChild(title)
        title.textContent = filteredData[i].title

        let price = document.createElement("div")
        boxWrapper.appendChild(price)
        price.textContent = filteredData[i].price + "руб"

        let address = document.createElement("div")
        boxWrapper.appendChild(address)
        address.textContent = filteredData[i].address

        let creationDate = document.createElement("div")
        boxWrapper.appendChild(creationDate)
        creationDate.textContent = new Date(filteredData[i].creationDate).toLocaleString()

        let favorite = document.createElement("i")
        favorite.classList.add("fa")
        if (filteredData[i].favorite) {
            favorite.classList.add("fa-heart")
        } else {
            favorite.classList.add("fa-heart-o")
        }
        boxWrapper.appendChild(favorite)
    }
}


//----------DATA----------


let box = document.createElement("div")
box.classList.add("box")
document.body.appendChild(box)

for (let i = 0; i < data.length; i++) {


    let boxWrapper = document.createElement("div")
    boxWrapper.classList.add("boxWrapper")
    box.appendChild(boxWrapper)

    let image = document.createElement("img")
    image.setAttribute("src", data[i].imageSrc)
    boxWrapper.appendChild(image)

    let title = document.createElement("a")
    title.setAttribute("href", "/jstest/page/index.html")
    boxWrapper.appendChild(title)
    title.textContent = data[i].title

    let price = document.createElement("div")
    boxWrapper.appendChild(price)
    price.textContent = data[i].price + "руб"

    let address = document.createElement("div")
    boxWrapper.appendChild(address)
    address.textContent = data[i].address

    let creationDate = document.createElement("div")
    boxWrapper.appendChild(creationDate)
    creationDate.textContent = new Date(data[i].creationDate).toLocaleString()

    let favorite = document.createElement("i")
    favorite.classList.add("fa")
    if (data[i].favorite) {
        favorite.classList.add("fa-heart")
    } else {
        favorite.classList.add("fa-heart-o")
    }
    boxWrapper.appendChild(favorite)
}

//----------INTRO----------

let intro = document.createElement("div")
intro.classList.add("intro")
document.body.appendChild(intro)

let introWrapper = document.createElement("div")
introWrapper.classList.add("introWrapper")
intro.appendChild(introWrapper)

let infoIntro = document.createElement("div")
infoIntro.classList.add("infoIntro")
introWrapper.appendChild(infoIntro)

let selectIntro = document.createElement("select")
selectIntro.classList.add("selectIntro")
infoIntro.appendChild(selectIntro)

let optionIntroList = [
    {
        value: ""
    },
    {
        value: "Выберите из списка"
    },
    {
        value: "Option"
    },
    {
        value: "Textarea"
    },
    {
        value: "Label"
    },
    {
        value: "Fieldset"
    },
    {
        value: "Legend"
    },
]

for (let i = 0; i < optionIntroList.length; i++) {
    let optionIntro = document.createElement("option")
    optionIntro.classList.add("optionIntro")
    optionIntro.textContent = optionIntroList[i].value
    selectIntro.appendChild(optionIntro)
}

let inputIntro = document.createElement("input")
inputIntro.classList.add("inputIntro")
infoIntro.appendChild(inputIntro)

let btnIntro = document.createElement("button")
btnIntro.classList.add("btnIntro")
btnIntro.textContent = "Отправить"
infoIntro.appendChild(btnIntro)

let usersIntro = document.createElement("div")
usersIntro.classList.add("usersIntro")
introWrapper.appendChild(usersIntro)

let usersData = [
    {
        name: "Alex",
        approved: true,
        img: "https://picsum.photos/200"
    },
    {
        name: "Alex",
        approved: false,
        img: "https://picsum.photos/200"
    }
]

for (let i = 0; i < usersData.length; i++) {
    let userWrapper = document.createElement("div")
    userWrapper.classList.add("userWrapper")
    usersIntro.appendChild(userWrapper)
    let imageUsersIntro = document.createElement("img")
    imageUsersIntro.classList.add("imageUsersIntro")
    imageUsersIntro.setAttribute("src", usersData[i].img)
    userWrapper.appendChild(imageUsersIntro)
    let userNameWrapper = document.createElement("div")
    userNameWrapper.classList.add("userNameWrapper")
    userNameWrapper.textContent = usersData[i].name
    userWrapper.appendChild(userNameWrapper)
    let refreshIconIntro = document.createElement("i")
    refreshIconIntro.classList.add("refreshIconIntro")
    refreshIconIntro.classList.add("fa")
    refreshIconIntro.classList.add("fa-refresh")
    userWrapper.appendChild(refreshIconIntro)

    let iconUsersIntro = document.createElement("i")
    iconUsersIntro.classList.add("iconUsersIntro")
    iconUsersIntro.classList.add("fa")
    userWrapper.appendChild(iconUsersIntro)
    if (usersData[i].approved) {
        iconUsersIntro.classList.add("fa-check")
    } else {
        iconUsersIntro.classList.add("fa-ban")
    }

}

let slideIntro = document.createElement("div")
slideIntro.classList.add("slideIntro")
introWrapper.appendChild(slideIntro)


let btnSlideLeftIntro = document.createElement("button")
btnSlideLeftIntro.classList.add("btnSlideLeftIntro")
slideIntro.appendChild(btnSlideLeftIntro)
let iconSlideLeftIntro = document.createElement("i")
iconSlideLeftIntro.classList.add("iconSlideLeftIntro")
iconSlideLeftIntro.classList.add("fa")
iconSlideLeftIntro.classList.add("fa-chevron-left")
btnSlideLeftIntro.appendChild(iconSlideLeftIntro)

let btnSlideRightIntro = document.createElement("button")
btnSlideRightIntro.classList.add("btnSlideRightIntro")
slideIntro.appendChild(btnSlideRightIntro)
let iconSlideRightIntro = document.createElement("i")
iconSlideRightIntro.classList.add("iconSlideRightIntro")
iconSlideRightIntro.classList.add("fa")
iconSlideRightIntro.classList.add("fa-chevron-right")
btnSlideRightIntro.appendChild(iconSlideRightIntro)

let slideWrapperIntro = document.createElement("div")
slideWrapperIntro.classList.add("slideWrapperIntro")
slideIntro.appendChild(slideWrapperIntro)

let imageSlider = [
    {
        image: "https://i.picsum.photos/id/680/200/200.jpg?hmac=jlYrp1rK5RIQZTIaHkTW2llzrRXtuYJLeprOC8i40os"
    },
    {
        image: "https://i.picsum.photos/id/161/200/200.jpg?hmac=67RAUzlqjfTvEM9tZ3K0ZMB1mAOXZZULGVHKjt1pmPs"
    },
    {
        image: "https://i.picsum.photos/id/889/200/200.jpg?hmac=mzo0mKfXHC9qb2dLw47jTrXZmlF9g6c6EuUFOWz0T5U"
    }
]

let imageIndex = 0
rerenderSlider()

btnSlideLeftIntro.onclick = function () {
    if (imageIndex > 0) {
        imageIndex--
        rerenderSlider()
    }
}


btnSlideRightIntro.onclick = function () {
    if (imageIndex < imageSlider.length - 1) {
        imageIndex++
        rerenderSlider()
    }

}

function rerenderSlider() {
    slideWrapperIntro.textContent = ""
    for (let i = 0; i < imageSlider.length; i++) {
        if (i === imageIndex) {
            let img = document.createElement("img")
            img.setAttribute("src", imageSlider[i].image)
            slideWrapperIntro.appendChild(img)
        }
    }
}


//----------WORK----------

let workImage = {
    workImgSrc: "https://auto.mail.ru/image/69012-2a7778410f965eb15d0d55fef3d65aec/1200x630/fpng/",
}

let work = document.createElement("div")
work.classList.add("work")
document.body.appendChild(work)

let workWrapper = document.createElement("div")
workWrapper.classList.add("workWrapper")
work.appendChild(workWrapper)

let imageWork = document.createElement("img")
imageWork.classList.add("workImage")
imageWork.setAttribute("src", workImage.workImgSrc)
workWrapper.appendChild(imageWork)


const chartData = [
    {
        "value": 10,
        "name": "Column 1"
    },
    {
        "value": 40,
        "name": "Column 2"
    },
    {
        "value": 100,
        "name": "Column 3"
    },
    {
        "value": 50,
        "name": "Column 4"
    },
    {
        "value": 15,
        "name": "Column 5"
    },
    {
        "value": 70,
        "name": "Column 6"
    },
    {
        "value": 55,
        "name": "Column 7"
    },
    {
        "value": 43,
        "name": "Column 8"
    },
    {
        "value": 22,
        "name": "Column 9"
    },
    {
        "value": 33,
        "name": "Column 10"
    }
]

let chartWrapper = document.createElement("div")
chartWrapper.classList.add("chartWrapper")
document.body.appendChild(chartWrapper)


for (let i = 0; i < chartData.length; i++) {
    let column = document.createElement("div")
    column.classList.add("column")
    column.textContent = chartData[i].value + "%"
    column.style.height = `${(chartData[i].value * 300) / 100}px`
    chartWrapper.appendChild(column)
}


//----------TASK----------

let taskSearch = document.createElement("div")
taskSearch.classList.add("taskSearch")
document.body.appendChild(taskSearch)

let taskAddSection = document.createElement("div")
taskAddSection.classList.add("taskAddSection")
taskSearch.appendChild(taskAddSection)

let newTaskInput = document.createElement("input")
newTaskInput.classList.add("newTaskInput")
newTaskInput.placeholder = "New Task..."
taskAddSection.appendChild(newTaskInput)

let taskBtn = document.createElement("button")
taskBtn.classList.add("taskBtn")
taskBtn.textContent = "ADD"
taskAddSection.appendChild(taskBtn)

let taskWrapper = document.createElement("div")
taskWrapper.classList.add("taskWrapper")
taskSearch.appendChild(taskWrapper)

let openTaskSection = document.createElement("div")
openTaskSection.classList.add("openTaskSection")
openTaskSection.textContent = "Open"
taskWrapper.appendChild(openTaskSection)

let taskSelect = document.createElement("select")
taskSelect.classList.add("taskSelect")
taskSelect.placeholder = ""
openTaskSection.appendChild(taskSelect)


let optionTaskData = [
    {
        value: ""
    },
    {
        value: "Asc"
    },
    {
        value: "Dsc"
    }
]

for (let i = 0; i < optionTaskData.length; i++) {
    let optionTask = document.createElement("option")
    optionTask.classList.add("optionTask")
    optionTask.textContent = optionTaskData[i].value
    taskSelect.appendChild(optionTask)
}

let doneTaskSection = document.createElement("div")
doneTaskSection.classList.add("doneTaskSection")
doneTaskSection.textContent = "Done"
taskWrapper.appendChild(doneTaskSection)

let doneTaskSelect = document.createElement("select")
doneTaskSelect.classList.add("doneTaskSelect")
doneTaskSelect.placeholder = ""
doneTaskSection.appendChild(doneTaskSelect)

let optionDoneTaskData = [
    {
        value: ""
    },
    {
        value: "Asc"
    },
    {
        value: "Dsc"
    }
]

for (let i = 0; i < optionDoneTaskData.length; i++) {
    let optionDoneTask = document.createElement("option")
    optionDoneTask.classList.add("optionDoneTask")
    optionDoneTask.textContent = optionDoneTaskData[i].value
    doneTaskSelect.appendChild(optionDoneTask)
}

let taskBlock = document.createElement("div")
taskBlock.classList.add("taskBlock")
openTaskSection.appendChild(taskBlock)

let taskDoneBlock = document.createElement("div")
taskDoneBlock.classList.add("taskDoneBlock")
doneTaskSection.appendChild(taskDoneBlock)

let taskLinkWrapper = document.createElement("div")
taskLinkWrapper.classList.add("taskLinkWrapper")
openTaskSection.appendChild(taskLinkWrapper)

let taskClearOpen = document.createElement("a")
taskClearOpen.classList.add("taskClearOpen")
taskClearOpen.setAttribute("href", "#")
taskClearOpen.textContent = "Clear Open"
openTaskSection.appendChild(taskClearOpen)

let taskClearDone = document.createElement("a")
taskClearDone.classList.add("taskClearDone")
taskClearDone.setAttribute("href", "#")
taskClearDone.textContent = "Clear Done"
doneTaskSection.appendChild(taskClearDone)

taskBtn.onclick = function () {
    let task = document.createElement("div")
    let openTaskText = document.createElement("div")
    let openTaskData = document.createElement("div")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    openTaskData.textContent = new Date().toLocaleString()
    openTaskText.textContent = newTaskInput.value
    taskBlock.appendChild(task)
    task.appendChild(checkbox)
    task.appendChild(openTaskText)
    task.appendChild(openTaskData)
    newTaskInput.value = ""
    checkbox.classList.add("taskCheckbox")
    task.classList.add("task")
    openTaskText.classList.add("taskText")
    openTaskData.classList.add("taskTime")

    checkbox.onclick = function () {
        if (checkbox.checked) {
            taskBlock.removeChild(task)
            taskDoneBlock.appendChild(task)
        } else {
            taskDoneBlock.removeChild(task)
            taskBlock.appendChild(task)
        }
    }
}
taskClearOpen.addEventListener("click", function (event) {
    taskBlock.textContent = ""
    event.preventDefault()
})

taskClearDone.addEventListener("click", function (event) {
    taskDoneBlock.textContent = ""
    event.preventDefault()
})

taskSelect.addEventListener("change", function () {
    let tasks = document.querySelectorAll(".taskBlock .task")
    taskBlock.textContent = ""
    let isAsc = taskSelect.value !== "Dsc" ? true : false
    let tasksArray = Array.from(tasks)
    tasksArray.sort(function (task1, task2) {
        let task1Text = task1.querySelector(".taskText").textContent
        let task2Text = task2.querySelector(".taskText").textContent
        if (task1Text > task2Text) {
            return isAsc ? 1 : -1
        } else if (task1Text < task2Text) {
            return isAsc ? -1 : 1
        } else {
            return 0
        }
    })
    for (let i = 0; i < tasksArray.length; i++) {
        taskBlock.appendChild(tasksArray[i])
    }
})

doneTaskSelect.addEventListener("change", function () {
    let doneTasks = document.querySelectorAll(".taskDoneBlock .task")
    taskDoneBlock.textContent = ""
    let isAsc = doneTaskSelect.value !== "Dsc" ? true : false
    let doneTasksArray = Array.from(doneTasks)
    doneTasksArray.sort(function (task1, task2) {
        let task1Text = task1.querySelector(".taskText").textContent
        let task2Text = task2.querySelector(".taskText").textContent
        if (task1Text > task2Text) {
            return isAsc ? 1 : -1
        } else if (task1Text < task2Text) {
            return isAsc ? -1 : 1
        } else {
            return 0
        }

    })
    for (let i = 0; i < doneTasksArray.length; i++) {
        taskDoneBlock.appendChild(doneTasksArray[i])
    }
})


//----------MAIN----------

let main = document.createElement("div")
main.classList.add("main")
document.body.appendChild(main)

let mainWrapper = document.createElement("div")
mainWrapper.classList.add("mainWrapper")
main.appendChild(mainWrapper)

let mainLeftWrapper = document.createElement("div")
mainLeftWrapper.classList.add("mainLeftWrapper")
mainWrapper.appendChild(mainLeftWrapper)

let mainBoxLeftWrapper = [
    {
        imageMainSrc: "https://items.s1.citilink.ru/1180089_v01_b.jpg",
        estimationMain: false,
        reviewsMain: true,
        titleMain: "Автомагнитола PIONEER MVH-S120UB",
        oldPriceMain: 3990,
        newPriceMain: 3390,
        addToCartMain: true,
        inStockMain: "В наличии в 11 магазинах",
        deliveryMain: "Доставим в 39 пунктов"
    },
    {
        imageMainSrc: "https://items.s1.citilink.ru/1180618_v01_b.jpg",
        estimationMain: false,
        reviewsMain: true,
        titleMain: "Автомагнитола PIONEER DMH-G221BT",
        oldPriceMain: 10790,
        newPriceMain: 9190,
        addToCartMain: true,
        inStockMain: "В наличии в 2 магазинах",
        deliveryMain: "Доставим в 46 пунктов"
    },
    {
        imageMainSrc: "https://items.s1.citilink.ru/480578_v01_b.jpg",
        estimationMain: true,
        reviewsMain: true,
        titleMain: "Автомагнитола DIGMA DCR-350G",
        oldPriceMain: "",
        newPriceMain: 1490,
        addToCartMain: true,
        inStockMain: "В наличии в 8 магазинах",
        deliveryMain: "Доставим в 25 пунктов"
    }
]

for (let i = 0; i < mainBoxLeftWrapper.length; i++) {
    let mainBoxLeft = document.createElement("div")
    mainBoxLeft.textContent = ""
    mainBoxLeft.classList.add("mainBoxLeft")
    mainLeftWrapper.appendChild(mainBoxLeft)

    let mainBoxLeftImg = document.createElement("div")
    mainBoxLeftImg.classList.add("mainBoxLeftImg")
    mainBoxLeft.appendChild(mainBoxLeftImg)

    let imgMainSrc = document.createElement("img")
    imgMainSrc.setAttribute("src", mainBoxLeftWrapper[i].imageMainSrc)
    mainBoxLeftImg.appendChild(imgMainSrc)

    let mainBoxLeftIcon = document.createElement("div")
    mainBoxLeftIcon.classList.add("mainBoxLeftIcon")
    mainBoxLeft.appendChild(mainBoxLeftIcon)

    let estimationMain = document.createElement("i")
    estimationMain.classList.add("fa")
    if (mainBoxLeftWrapper[i].estimationMain) {
        estimationMain.classList.add("fa-star")
    } else {
        estimationMain.classList.add("fa-star-o")
    }
    mainBoxLeftIcon.appendChild(estimationMain)

    let reviewsMain = document.createElement("i")
    reviewsMain.classList.add("fa")
    if (mainBoxLeftWrapper[i].reviewsMain) {
        reviewsMain.classList.add("fa-comment-o")
    }
    mainBoxLeftIcon.appendChild(reviewsMain)

    let mainBoxLeftTitle = document.createElement("div")
    mainBoxLeftTitle.classList.add("mainBoxLeftTitle")
    mainBoxLeft.appendChild(mainBoxLeftTitle)

    let titleMain = document.createElement("a")
    titleMain.setAttribute("href", "#")
    titleMain.classList.add("titleMain")
    titleMain.textContent = mainBoxLeftWrapper[i].titleMain
    mainBoxLeftTitle.appendChild(titleMain)

    let mainPriceLeft = document.createElement("div")
    mainPriceLeft.classList.add("mainPriceLeft")
    mainBoxLeft.appendChild(mainPriceLeft)


    if (mainBoxLeftWrapper[i].oldPriceMain) {
        let oldPriceMain = document.createElement("a")
        oldPriceMain.setAttribute("href", "#")
        oldPriceMain.classList.add("oldPriceMain")
        oldPriceMain.textContent = mainBoxLeftWrapper[i].oldPriceMain + "руб"
        mainPriceLeft.appendChild(oldPriceMain)
    }
    let newPriceMain = document.createElement("a")
    newPriceMain.setAttribute("href", "#")
    newPriceMain.classList.add("newPriceMain")
    newPriceMain.textContent = mainBoxLeftWrapper[i].newPriceMain + "руб"
    mainPriceLeft.appendChild(newPriceMain)

    let addToCartMain = document.createElement("i")
    addToCartMain.classList.add("fa")
    if (mainBoxLeftWrapper[i].addToCartMain) {
        addToCartMain.classList.add("fa-cart-plus")
    }
    mainPriceLeft.appendChild(addToCartMain)

    let mainBoxLeftDelivery = document.createElement("div")
    mainBoxLeftDelivery.classList.add("mainBoxLeftDelivery")
    mainBoxLeft.appendChild(mainBoxLeftDelivery)

    let inStockMain = document.createElement("a")
    inStockMain.setAttribute("href", "#")
    inStockMain.classList.add("inStockMain")
    inStockMain.textContent = mainBoxLeftWrapper[i].inStockMain
    mainBoxLeftDelivery.appendChild(inStockMain)

    let deliveryMain = document.createElement("a")
    deliveryMain.setAttribute("href", "#")
    deliveryMain.classList.add("deliveryMain")
    deliveryMain.textContent = mainBoxLeftWrapper[i].deliveryMain
    mainBoxLeftDelivery.appendChild(deliveryMain)
}


let mainRightWrapper = document.createElement("div")
mainRightWrapper.classList.add("mainRightWrapper")
mainWrapper.appendChild(mainRightWrapper)

let mainBoxRightWrapper = [
    {
        imageMainSrc: "https://items.s1.citilink.ru/1365583_v01_b.jpg",
        estimationMain: true,
        reviewsMain: true,
        titleMain: "Автомагнитола PIONEER AVH-A320BT",
        oldPriceMain: 19900,
        newPriceMain: 17790,
        addToCartMain: true,
        inStockMain: "",
        deliveryMain: "Доставим в 8 пунктов"
    },
    {
        imageMainSrc: "https://items.s1.citilink.ru/1009307_v01_b.jpg",
        estimationMain: false,
        reviewsMain: true,
        titleMain: "Автомагнитола DIGMA DCR-550",
        oldPriceMain: "",
        newPriceMain: 2670,
        addToCartMain: true,
        inStockMain: "В наличии в 2 магазинах",
        deliveryMain: "Доставим в 48 пунктов"
    },
    {
        imageMainSrc: "https://items.s1.citilink.ru/1214794_v01_b.jpg",
        estimationMain: true,
        reviewsMain: true,
        titleMain: "Автомагнитола PROLOGY MPV-120",
        oldPriceMain: 7269,
        newPriceMain: 6040,
        addToCartMain: true,
        inStockMain: "",
        deliveryMain: "Доставим в 50 пунктов"
    }
]

for (let i = 0; i < mainBoxRightWrapper.length; i++) {
    let mainBoxRight = document.createElement("div")
    mainBoxRight.textContent = mainBoxRightWrapper[i].value
    mainBoxRight.classList.add("mainBoxRight")
    mainRightWrapper.appendChild(mainBoxRight)

    let mainBoxRightImg = document.createElement("div")
    mainBoxRightImg.classList.add("mainBoxRightImg")
    mainBoxRight.appendChild(mainBoxRightImg)

    let imgMainSrc = document.createElement("img")
    imgMainSrc.setAttribute("src", mainBoxRightWrapper[i].imageMainSrc)
    mainBoxRightImg.appendChild(imgMainSrc)

    let mainBoxRightIcon = document.createElement("div")
    mainBoxRightIcon.classList.add("mainBoxRightIcon")
    mainBoxRight.appendChild(mainBoxRightIcon)

    let estimationMain = document.createElement("i")
    estimationMain.classList.add("fa")
    if (mainBoxRightWrapper[i].estimationMain) {
        estimationMain.classList.add("fa-star")
    } else {
        estimationMain.classList.add("fa-star-o")
    }
    mainBoxRightIcon.appendChild(estimationMain)

    let reviewsMain = document.createElement("i")
    reviewsMain.classList.add("fa")
    if (mainBoxRightWrapper[i].reviewsMain) {
        reviewsMain.classList.add("fa-comment-o")
    }
    mainBoxRightIcon.appendChild(reviewsMain)

    let mainBoxRightTitle = document.createElement("div")
    mainBoxRightTitle.classList.add("mainBoxRightTitle")
    mainBoxRight.appendChild(mainBoxRightTitle)

    let titleMain = document.createElement("a")
    titleMain.setAttribute("href", "#")
    titleMain.classList.add("titleMain")
    titleMain.textContent = mainBoxRightWrapper[i].titleMain
    mainBoxRightTitle.appendChild(titleMain)

    let mainPriceRight = document.createElement("div")
    mainPriceRight.classList.add("mainPriceRight")
    mainBoxRight.appendChild(mainPriceRight)

    if (mainBoxRightWrapper[i].oldPriceMain) {
        let oldPriceMain = document.createElement("a")
        oldPriceMain.setAttribute("href", "#")
        oldPriceMain.classList.add("oldPriceMain")
        oldPriceMain.textContent = mainBoxRightWrapper[i].oldPriceMain + "руб"
        mainPriceRight.appendChild(oldPriceMain)
    }

    let newPriceMain = document.createElement("a")
    newPriceMain.setAttribute("href", "#")
    newPriceMain.classList.add("newPriceMain")
    newPriceMain.textContent = mainBoxRightWrapper[i].newPriceMain + "руб"
    mainPriceRight.appendChild(newPriceMain)

    let addToCartMain = document.createElement("i")
    addToCartMain.classList.add("fa")
    if (mainBoxRightWrapper[i].addToCartMain) {
        addToCartMain.classList.add("fa-cart-plus")
    }
    mainPriceRight.appendChild(addToCartMain)

    let mainBoxRightDelivery = document.createElement("div")
    mainBoxRightDelivery.classList.add("mainBoxRightDelivery")
    mainBoxRight.appendChild(mainBoxRightDelivery)

    let inStockMain = document.createElement("a")
    inStockMain.setAttribute("href", "#")
    inStockMain.classList.add("inStockMain")
    inStockMain.textContent = mainBoxRightWrapper[i].inStockMain
    mainBoxRightDelivery.appendChild(inStockMain)

    let deliveryMain = document.createElement("a")
    deliveryMain.setAttribute("href", "#")
    deliveryMain.classList.add("deliveryMain")
    deliveryMain.textContent = mainBoxRightWrapper[i].deliveryMain
    mainBoxRightDelivery.appendChild(deliveryMain)
}


//----------FOOTER----------

let footer = document.createElement("div")
footer.classList.add("footer")
document.body.appendChild(footer)

let footerWrapper = document.createElement("div")
footerWrapper.classList.add("footerWrapper")
footer.appendChild(footerWrapper)

let footerText = document.createElement("div")
footerText.classList.add("footerText")
footerText.textContent = "По всем интересующим вопросам, свяжитесь с нами..."
footerWrapper.appendChild(footerText)

let selectFooter = document.createElement("select")
selectFooter.classList.add("selectFooter")
footerText.appendChild(selectFooter)

let optionFooterPlaceholder = document.createElement("option")
optionFooterPlaceholder.setAttribute("selected", true)
optionFooterPlaceholder.setAttribute("hidden", true)
selectFooter.appendChild(optionFooterPlaceholder)
optionFooterPlaceholder.textContent = "Please select"

let optionFooterData = [
    {
        value: ""
    },
    {
        value: "Option"
    },
    {
        value: "Textarea"
    },
    {
        value: "Label"
    },
    {
        value: "Fieldset"
    },
    {
        value: "Legend"
    }
]

for (let i = 0; i < optionFooterData.length; i++) {
    let optionFooter = document.createElement("option")
    optionFooter.classList.add("optionFooter")
    optionFooter.textContent = optionFooterData[i].value
    selectFooter.appendChild(optionFooter)
}


let btnFooter = document.createElement("div")
btnFooter.classList.add("btnFooter")
footerText.appendChild(btnFooter)

let btnCall = document.createElement("button")
btnCall.classList.add("btnCall")
btnCall.textContent = "CALL ME"
btnFooter.appendChild(btnCall)

let btnMessage = document.createElement("button")
btnMessage.classList.add("btnMessage")
btnMessage.textContent = "MESSAGE ME"
btnFooter.appendChild(btnMessage)

let footerMap = document.createElement("map")
footerMap.classList.add("footerMap")
footerMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.215952777121!2d30.48618601600498!3d59.91196328186652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46962e68a706b7bb%3A0x6766481232ef4028!2z0J3QtdCy0YHQutC40Lkg0YAt0L0sINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTMxNjg!5e0!3m2!1sru!2sru!4v1607782656755!5m2!1sru!2sru" width="200" height="200" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>'
footerWrapper.appendChild(footerMap)

