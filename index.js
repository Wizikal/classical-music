const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5500

express()
    .use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.send("Hello Leon!"))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`))


