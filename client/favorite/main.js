let promise = fetch("http://localhost:3000/ads")
promise.then(function (response) {
let promise2 = response.json()
    promise2.then(function (json) {
    let filteredData = json.filter(function (ad) {
        return ad.favorite
    })
        renderAds(filteredData)
    })
})
function renderAds(data) {
    data.forEach(function (dataAd) {
        let box = document.createElement("div")
        box.classList.add("box")
        let adsWrapper = document.querySelector(".ads-wrapper")
        adsWrapper.appendChild(box)


        let image = document.createElement("img")
        image.setAttribute("src", dataAd.imageSrc)
        box.appendChild(image)

        let title = document.createElement("h3")
        box.appendChild(title)
        title.textContent = dataAd.title

        let price = document.createElement("div")
        box.appendChild(price)
        price.textContent = dataAd.price + "руб"

        let address = document.createElement("div")
        box.appendChild(address)
        address.textContent = dataAd.address

        let creationDate = document.createElement("div")
        box.appendChild(creationDate)
        creationDate.textContent = new Date(dataAd.creationDate).toLocaleString()

        let favorite = document.createElement("i")
        favorite.classList.add("fa")
        if (dataAd.favorite) {
            favorite.classList.add("fa-heart")
        } else {
            favorite.classList.add("fa-heart-o")
        }

        let deleteAd = document.createElement("i")
        deleteAd.addEventListener("click", function () {
            let promise = fetch(
                "http://localhost:3000/ads",
                {
                    method: "DELETE"
                }
            )
            promise.then(function () {
                adsWrapper.removeChild(box)
            })
        })
        deleteAd.classList.add("fa")
        deleteAd.classList.add("fa-trash-o")

        box.appendChild(deleteAd)
        box.appendChild(favorite)
        favorite.addEventListener("click", function () {
            let promise = fetch(
                `http://localhost:3000/ads/${dataAd.favorite ? "makeUnfavorite" : "makeFavorite"}?id=${dataAd.id}`,
                {
                    method: "PUT"
                }
            )
            promise.then(function () {
                dataAd.favorite = !dataAd.favorite
                favorite.classList.remove("fa-heart")
                favorite.classList.remove("fa-heart-o")
                if (dataAd.favorite) {
                    favorite.classList.add("fa-heart")
                } else {
                    favorite.classList.add("fa-heart-o")
                }
            })

        })
        let editingAd = document.createElement("i")
        editingAd.classList.add("editingAd")
        editingAd.classList.add("fa")
        editingAd.classList.add("fa-pencil")
        editingAd.addEventListener("click", function () {
            location.replace(`/edit_ad/${dataAd.id}`)
            console.log(location)
        })
        box.appendChild(editingAd)

    })
}