
// import the mongoose
const mongoose=require('mongoose');


// defining schema
const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    number:{
        type:String,
        require:true
    }
});

// compilling schema into a model 
const Contact = mongoose.model('Contact',contactSchema);

// exporting the schema 
module.exports = Contact;
