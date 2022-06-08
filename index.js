//Initializing app
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3030

app.use(cors())

//Database
let tolkienCharacters = {
    'frodo': {
        'name': 'Frodo Baggings',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'realms': 'The Shire',
        'weapon': ['Sting', 'Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/1/1a/FotR_-_Elijah_Wood_as_Frodo.png/revision/latest?cb=20130313174543' 
    },
    'sam': {
        'name': 'Samwise Gamgee',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'realms': 'The Shire',
        'weapon': ['Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/2/20/Sam.jpg/revision/latest?cb=20070623123241' 
    },
    'merry': {
        'name': 'Meriadoc Brandybuck',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'realms': ['Buckland', 'The Shire'],
        'weapon': ['Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/d/d8/Merry1.jpg/revision/latest?cb=20080318214905' 
    },
    'pippin': {
        'name': 'Peregrin Took',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'realms': ['The Shire'],
        'weapon': ['Barrow-blade'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/0/0a/Pippinprintscreen.jpg/revision/latest?cb=20060310083048' 
    },
    'gandalf': {
        'name': 'Gandalf',
        'race': 'Maiar',
        'culture': 'Istari',
        'realms': 'unknown',
        'weapon': ['Glamdring', 'Narya', 'Wizard staff'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/e/e7/Gandalf_the_Grey.jpg/revision/latest?cb=20121110131754' 
    },
    'aragorn': {
        'name': 'Aragorn',
        'race': 'Men',
        'culture': 'Dúnedain of the North',
        'realms': 'Gondor',
        'weapon': ['Andúril', 'bow', 'spear'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/b/b6/Aragorn_profile.jpg/revision/latest?cb=20170121121423' 
    },
    'legolas': {
        'name': 'Legolas Greenleaf',
        'race': 'Elve',
        'culture': 'Sindar',
        'realms': 'Ithilien',
        'weapon': ['Bow', 'Long white Knife'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/3/34/934_legolas-gollum-80273301.jpg/revision/latest?cb=20121225094145' 
    },
    'gimli': {
        'name': 'Gimli, son of Glóin',
        'race': 'Dwarf',
        'culture': 'Longbeards',
        'realms': ['Thorin\'s Halls', 'Lonely Mountain', 'Glittering Caves'],
        'weapon': ['Broad-bladed axe'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/e/ec/Gimli_-_FOTR.png/revision/latest?cb=20121008105956' 
    },
    'boromir': {
        'name': 'Boromir',
        'race': 'Men',
        'culture': 'Men of Gondor',
        'realms': 'Gondor',
        'weapon': ['Sword', 'Shield', 'Dagger'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/b/b4/Seanbean_boromir.jpg/revision/latest?cb=20110327195115' 
    },
    'tom bombadil': {
        'name': 'Tom Bombadil',
        'race': 'Unknown',
        'culture': 'Unknonwn',
        'realms': 'Old Forest',
        'weapon': 'Unknown',
        'image': 'https://static.wikia.nocookie.net/lotr/images/c/c7/Tom_bombadil.jpg/revision/latest?cb=20191015154251' 
    },
    'elrond': {
        'name': 'Elrond',
        'race': 'Half-Elven',
        'culture': 'Unknown',
        'realms': ['Lindon', 'Rivendell'],
        'weapon': 'Unknown',
        'image': 'https://static.wikia.nocookie.net/lotr/images/9/9f/Elrond_of_Rivendell.jpg/revision/latest?cb=20130202120854' 
    },
    'sauron': {
        'name': 'Sauron',
        'race': 'Maiar',
        'culture': 'Maia of Morgoth',
        'realms': ['Angband', 'Mordor', 'Dol Guldur'],
        'weapon': ['Sword', 'Shield', 'Dagger'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/9/90/Sauron-2.jpg/revision/latest?cb=20110508182634' 
    },
    'bilbo': {
        'name': 'Bilbo Baggins',
        'race': 'Hobbit',
        'culture': 'Shire-hobbit',
        'realms': 'The Shire',
        'weapon': 'Sting',
        'image': 'https://static.wikia.nocookie.net/lotr/images/b/b6/The_Hobbit_wallpaper_48.jpg/revision/latest?cb=20131112182330' 
    },
    'galadriel': {
        'name': 'Galadriel',
        'race': 'Elve',
        'culture': ['Ñoldor', 'Falmari'],
        'realms': ['Angband', 'Mordor', 'Dol Guldur'],
        'weapon': ['Nenya', 'Elf-magic'],
        'image': 'https://static.wikia.nocookie.net/lotr/images/c/cb/Galadriel.jpg/revision/latest?cb=20151015204512' 
    },
}

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api', (req,res) => {
    res.json(tolkienCharacters)
})

app.get('/api/:name', (req,res) => {
    const characterName = req.params.name.toLowerCase()
    if(!tolkienCharacters[characterName]) {
        res.status(404).json({error: `${characterName} not found`})
    }
    res.json(tolkienCharacters[characterName])
})

//Setting the server to listen on PORT
app.listen(PORT)
console.log(`Server is runnining on port: ${PORT}`)