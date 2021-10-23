const db = require('./connection');
const { Album } = require('../models');

db.once('open', async () => {
await Album.deleteMany();


const album = await Album.insertMany([
    {
        title: 'Madvillainy',
        artist: 'Madvillain',
        description: '',
        image: 'Madvillainy.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Californication',
        artist: 'The Red Hot Chili Peppers',
        description: '',
        image: 'Californication.jpg',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Saturdays = Youth',
        artist: 'M-83',
        description: '',
        image: 'Saturdays_=_Youth.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Sticky Fingers',
        artist: 'The Rolling Stones',
        description: '',
        image: 'Sticky-Fingers.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Stranger Things Vol. 1 ',
        artist: 'Kyle Dixon & Michael Stein',
        description: '',
        image: 'Stranger_Things_S1V1.png',
        price: 40,
        quantity: 25,
        rating: 0

     },
     {
        title: 'Untrue',
        artist: 'Burial',
        description: '',
        image: 'Untrue.jpg',
        price: 40,
        quantity: 25,
        rating: 0

     }
    
]);

console.log('album seeded')

process.exit();

});




