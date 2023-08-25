// importing mongoose
const mongoose = require('mongoose');

// catching errors
main().catch(err => console.log(err));

// firing up the database
async function main() {
    await mongoose.connect('mongodb://127.0.0.1/test');
    console.log('DataBase setup');
}