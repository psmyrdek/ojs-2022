const {getRandomInt} = require('./utils')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.get('/app/profile/:userId', (req, res, next) => {

    const profile = {
        id: 4,
        firstName: 'John',
        lastName: 'Doe',
        age: 32,
        country: 'UK'
    }

    setTimeout(() => {
        res.send(profile)
    }, getRandomInt(100, 400))

})

app.get('/app/payments/:userId', (req, res, next) => {

    const paymentDetails = {
        userId: 4,
        subscriptionType: 'card',
        subscriptionStatus: 'active'
    }

    setTimeout(() => {
        res.send(paymentDetails)
    }, getRandomInt(100, 300))

})

app.listen(8080, () => {
    console.log('Server listening on localhost:8080')
})