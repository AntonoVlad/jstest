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

for (let i = 0; i < optionIntroList.length;i++) {
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
    }else {
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
        image:"https://i.picsum.photos/id/161/200/200.jpg?hmac=67RAUzlqjfTvEM9tZ3K0ZMB1mAOXZZULGVHKjt1pmPs"
    },
    {
        image: "https://i.picsum.photos/id/889/200/200.jpg?hmac=mzo0mKfXHC9qb2dLw47jTrXZmlF9g6c6EuUFOWz0T5U"
    }
]

let imageIndex = 0
rerenderSlider()

btnSlideLeftIntro.onclick = function() {
    if (imageIndex > 0){
    imageIndex--
        rerenderSlider()
    }
}


btnSlideRightIntro.onclick = function() {
    if (imageIndex < imageSlider.length-1) {
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


for (let i = 0; i < chartData.length; i++ ) {
    let column = document.createElement("div")
    column.classList.add("column")
    column.textContent = chartData[i].value + "%"
    column.style.height = `${(chartData[i].value * 300) / 100}px`
    chartWrapper.appendChild(column)
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

