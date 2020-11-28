let data = [
    {
        title: 'Клатч Ленинград СССР',
        price: 2300,
        address: 'Санкт-Петербург, Удельная',
        creationDate: '2020-11-13T15:15:00.000Z',
        favorite: false,
        imageSrc: 'https://picsum.photos/100/200'
    },
    {
        title: 'Клатч, сумочка театральная ретро СССР',
        price: 450,
        address: 'Санкт-Петербург, Автово',
        creationDate: '2020-10-31T15:23:00.000Z',
        favorite: true,
        imageSrc: 'https://picsum.photos/199/200'
    }
]

for (let i = 0; i < data.length; i++) {
    let box = document.createElement("div")
    box.classList.add("box")
    document.body.appendChild(box)

    let image = document.createElement("img")
    image.setAttribute("src", data[i].imageSrc)
    box.appendChild(image)

    let title = document.createElement("h3")
    box.appendChild(title)
    title.textContent = data[i].title

    let price = document.createElement("div")
    box.appendChild(price)
    price.textContent = data[i].price + "руб"

    let address = document.createElement("div")
    box.appendChild(address)
    address.textContent = data[i].address

    let creationDate = document.createElement("div")
    box.appendChild(creationDate)
    creationDate.textContent = new Date(data[i].creationDate).toLocaleString()

    let favorite = document.createElement("i")
    favorite.classList.add("fa")
    if (data[i].favorite) {
        favorite.classList.add("fa-heart")
    } else {
        favorite.classList.add("fa-heart-o")
    }
    box.appendChild(favorite)

}
