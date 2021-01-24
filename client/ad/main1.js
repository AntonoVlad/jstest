let inputTitle = document.querySelector(".input-title")
let inputPrice = document.querySelector(".input-price")
let inputAddress = document.querySelector(".input-address")
let inputDate = document.querySelector(".input-creation-date")
let inputImage = document.querySelector(".input-image")
let inputIcon = document.querySelector(".input-favorite")
let btn = document.querySelector(".btn")

btn.addEventListener("click", function () {
    let ad = {
        title: inputTitle.value,
        price: inputPrice.value,
        address: inputAddress.value,
        creationDate: inputDate.value,
        imageSrc: inputImage.value,
        favorite: inputIcon.checked
    }
    let promise = fetch(
        "http://localhost:3000/ads",
        {
            method: "POST",
            body: JSON.stringify(ad),
            headers:{
                "Content-Type": "application/json"
            }
        }
    )

})


