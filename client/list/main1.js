import {renderAds} from "../helpers/main.js"
const promise = fetch("http://localhost:3000/ads")
promise.then(function (resp) {
    let promise2 = resp.json()
    promise2.then(function (json) {
        renderAds(json)
    })
})



