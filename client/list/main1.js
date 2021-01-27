import {renderAds, getAds} from "../helpers/main.js"
getAds().then(function (json) {
    renderAds(json)
})




