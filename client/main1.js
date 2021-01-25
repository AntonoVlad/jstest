const promise = fetch("http://localhost:3000/ads")
promise.then(function (resp) {
    let promise2 = resp.json()
    promise2.then(function (json) {
        renderAds(json)
    })
})

function renderAds(data) {
    for (let i = 0; i < data.length; i++) {
        let box = document.createElement("div")
        box.classList.add("box")
        let adsWrapper = document.querySelector(".ads-wrapper")
        adsWrapper.appendChild(box)


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
                `http://localhost:3000/ads/${data[i].favorite ? "makeUnfavorite" : "makeFavorite"}?id=${data[i].id}`,
                {
                    method: "PUT"
                }
            )
            promise.then(function () {
                data[i].favorite = !data[i].favorite
                favorite.classList.remove("fa-heart")
                favorite.classList.remove("fa-heart-o")
                if (data[i].favorite) {
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
            location.replace(`/edit_ad/${data[i].id}`)
            console.log(location)
        })
        box.appendChild(editingAd)
    }
}



