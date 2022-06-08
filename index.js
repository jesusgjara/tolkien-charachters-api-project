//Initializing app
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3030

//Database
let tolkienCharacters = {
    'frodo': {
        'name': 'Frodo Baggings',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'weapon': ['Sting', 'Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png/revision/latest?cb=20130313174543' 
    },
    'sam': {
        'name': 'Frodo Baggings',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'weapon': ['Sting', 'Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png/revision/latest?cb=20130313174543' 
    },
    'frodo': {
        'name': 'Frodo Baggings',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'weapon': ['Sting', 'Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png/revision/latest?cb=20130313174543' 
    },
}

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
})

app.listen(PORT)
console.log(`Server is runnining on port: ${PORT}`)