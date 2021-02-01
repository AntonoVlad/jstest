import {getAds} from "/helpers/main.js";

let inputTitle = document.querySelector(".input-title")
let inputPrice = document.querySelector(".input-price")
let inputAddress = document.querySelector(".input-address")
let inputDate = document.querySelector(".input-creation-date")
let inputImage = document.querySelector(".input-image")
let inputIcon = document.querySelector(".input-favorite")
let btn = document.querySelector(".btn")

getAds().then(function (json) {
    {
        let ad = json.find(function (item) {
            let id = location.pathname.match(new RegExp(/\d/))[0]

            return id == item.id

        })
        inputTitle.value = ad.title
        inputPrice.value = ad.price
        inputAddress.value = ad.address
        inputDate.value = ad.creationDate
        inputImage.value = ad.imageSrc
        inputIcon.checked = ad.favorite
    }
})

btn.addEventListener("click", function () {
    let ad = {
        id: location.pathname.match(new RegExp(/\d/))[0],
        title: inputTitle.value,
        price: inputPrice.value,
        address: inputAddress.value,
        creationDate: inputDate.value,
        imageSrc: inputImage.value,
        favorite: inputIcon.checked
    }
let promis = fetch(
    "http://localhost:3000/ads",
    {
        method:"PUT",
        body:JSON.stringify(ad),
        headers:{
            "Content-Type":"application/json"
        }
    }
)
})

let arr = [1, 2]
let item = arr.find(function (number) {

})
