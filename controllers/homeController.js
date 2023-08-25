
const Contact = require('../models/contact');

module.exports.home = function(request, response){

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



module.exports.deleteContact = function(request,response){
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


module.exports.createContact = function(request,response){
    
    // contactList.push(request.body);              //pushing data entered by user in contact list array (req.body = decoded data as keys and values)

    // creating new element in mongodb
    Contact.create({
        name:request.body.name,
        number:request.body.number
    },  function(err, newContact){
        if(err){
            console.log('error');
            return;
        }
        console.log('*******', newContact);
        return response.redirect('back');
    });

};