const bodyParser = require("body-parser");
const cors = require('cors')
const express = require('express')
const app = express()
let id = 3;
const data = [
    {
        id: 1,
        title: 'Клатч Ленинград СССР',
        price: 2300,
        address: 'Санкт-Петербург, Удельная',
        creationDate: '2020-11-13T15:15:00.000Z',
        favorite: false,
        imageSrc: 'https://picsum.photos/100/200'
    },
    {
        id: 2,
        title: 'Клатч, сумочка театральная ретро СССР',
        price: 450,
        address: 'Санкт-Петербург, Автово',
        creationDate: '2020-10-31T15:23:00.000Z',
        favorite: true,
        imageSrc: 'https://picsum.photos/199/200'
    }
]

app.use(bodyParser.json())
app.use(cors())

app.get('/ads', function (req, res) {
    res.send(data)
})

app.post('/ads', function (req, res) {
    console.log(req.body)
    data.push({
        id: id++,
        ...req.body
    })
    res.sendStatus(200)
})

app.put('/ads/makeFavorite', function (req, res) {
    const item = data.find(item => item.id == req.query.id)
    item.favorite = true
    res.sendStatus(200)
})

app.put('/ads/makeUnfavorite', function (req, res) {
    const item = data.find(item => item.id == req.query.id)
    item.favorite = false
    res.sendStatus(200)
})

app.delete('/ads', function (req, res) {
    const itemIndex = data.findIndex(item => item.id == req.query.id)
    data.splice(itemIndex, 1)
    res.sendStatus(200)
})

app.put('/ads', function (req, res) {
    const itemIndex = data.findIndex(item => item.id == req.body.id)
    data.splice(itemIndex, 1, req.body)
    res.sendStatus(200)
})

console.log('Server started at http://localhost:3000')
app.listen(3000)
