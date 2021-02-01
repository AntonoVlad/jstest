export function renderAds(data) {
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

        let ratings = [
            1, 2, 3, 4, 5
        ]
        let ratingArea = document.createElement("div")
        ratingArea.classList.add("rating-area")
        ratings.forEach(function (rating) {
            let ratingInput = document.createElement("input")
            ratingInput.value = rating
            ratingArea.appendChild(ratingInput)
            let ratingLabel = document.createElement("label")
            ratingArea.appendChild(ratingLabel)
        })

        box.appendChild(ratingArea)

        let deleteAd = document.createElement("i")
        deleteAd.addEventListener("click", function () {

            deleteAdFromServer().then(function () {
                showNotification("Объявление успешно удалено")
                adsWrapper.removeChild(box)
            }).catch(function () {
                showNotification("Ошибка", "error")
            })
        })
        deleteAd.classList.add("fa")
        deleteAd.classList.add("fa-trash-o")

        box.appendChild(deleteAd)
        box.appendChild(favorite)
        favorite.addEventListener("click", function () {

            favoriteAdFromServer(dataAd).then(function () {
                dataAd.favorite = !dataAd.favorite
                favorite.classList.remove("fa-heart")
                favorite.classList.remove("fa-heart-o")
                if (dataAd.favorite) {
                    favorite.classList.add("fa-heart")
                    showNotification("Объявление успешно добавлено в избранное")
                } else {
                    favorite.classList.add("fa-heart-o")
                    showNotification("Объявление успешно удалено из избранного")
                }
            }).catch(function () {
                showNotification("Ошибка", "error")
            })

        })
        let editingAd = document.createElement("i")
        editingAd.classList.add("editingAd")
        editingAd.classList.add("fa")
        editingAd.classList.add("fa-pencil")
        editingAd.addEventListener("click", function () {
            location.replace(`/edit_ad/${dataAd.id}`)
        })
        box.appendChild(editingAd)
    })
}

export function getAds() {
    return new Promise(function (resolve) {
        const promise = fetch("http://localhost:3000/ads")
        promise.then(function (resp) {
            console.log(resp)
            let promise2 = resp.json()
            promise2.then(function (json) {
                resolve(json)
            })
        })
    })
}

export function deleteAdFromServer() {
    return new Promise(function (resolve, reject) {
        let promise = fetch(
            "http://localhost:3000/ads",
            {
                method: "DELETE"
            }
        )
        promise.catch(function () {
            reject()
        })
        promise.then(function () {
            resolve()
        })
    })
}

export function favoriteAdFromServer(dataAd) {
    return new Promise(function (resolve, reject) {
        let promise = fetch(
            `http://localhost:3000/ads/${dataAd.favorite ? "makeUnfavorite" : "makeFavorite"}?id=${dataAd.id}`,
            {
                method: "PUT"
            }
        )
        promise.catch(function () {
            reject()
        })
        promise.then(function () {
            resolve()
        })
    })
}

function showNotification(message, type = "success") {
    let notificationElement = document.createElement("div")
    let notificationElementWrapper = document.querySelector(".notification-element-wrapper")
    notificationElement.classList.add("notification-element")
    if (type == "success") {
        notificationElement.classList.add("success")
    }
    if (type == "error") {
        notificationElement.classList.add("error")
    }
    if (type == "warn") {
        notificationElement.classList.add("warn")
    }
    notificationElement.textContent = message
    notificationElementWrapper.appendChild(notificationElement)

    setTimeout(function () {
            notificationElementWrapper.removeChild(notificationElement)
        },
        3000
    )
}



