
// importing the schema 
const Contact = require('../models/contact');


// home function of controller for render the homepage
module.exports.home = function(request, response){

    // rendering all the contacts stored inside the database
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error');
            return;
        }

        return response.render('home',{
            title:'Contact List',
            contact_list:contacts
        });
        
    });        
};



// to delete a contact from the database
module.exports.deleteContact = function(request,response){
    // getting the value of contact from query params
    let id=request.query.id;


    // finding contact in database using its id
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error');
            return;
        }
        return response.redirect('back');
    });

};



// create a new contact inside the database
module.exports.createContact = function(request,response){
    
    // creating new element in mongodb
    Contact.create({
        // getting the value of name and phone
        name:request.body.name,
        number:request.body.number
    },  function(err, newContact){
        if(err){
            console.log('error');
            return;
        }
        return response.redirect('back');
    });

};