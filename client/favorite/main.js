import {renderAds} from "../helpers/main.js"
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
