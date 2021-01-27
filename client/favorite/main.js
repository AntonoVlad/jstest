import {renderAds} from "../helpers/main.js"
import {getAds} from "../helpers/main.js";
getAds().then(function (json) {
    let filteredData = json.filter(function (ad) {
        return ad.favorite
    })
    renderAds(filteredData)
})

