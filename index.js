const express=require('express');

const path=require('path');

const port=8000;

// importing mongoose file form config folder
const database=require('./config/mongoose');


// importing database schema 
const Contact=require('./models/contact');

const app=express();

// middlewares 

app.use(express.urlencoded());           // to decode the encoded data from user 
app.use(express.static('assets'));               // to locate path of static files like css and javascript


// settting EJS
app.set('view engine','ejs');


// defining path of result file with respect to current file
app.set('views',path.join(__dirname,'views'));


// contact list in memory
var contactList=[
    {
        name:"Salman",
        number:"4555555"
    },
    {
        name:"Hello",
        number:"5237907253"
    }
];



// displaying / returning contact list  from our mongo database
app.get('/',function(request, response){

    Contact.find({}, function(err, contacts){
        if(err){
            console.log('Error');
            return;
        }

        return response.render('home',{
            title:'My page',
            contact_list:contacts
        });
        
    });    

    
});



// delete a contact from list
app.get('/delete-contact',function(request,response){
    
    //  (old way of delete from the static array){
    //     let numb=request.query.number;
        
    //     // finding index of item in contact list array via findIndex function which return index
    //     let contact_index=contactList.findIndex(contact => contact.number == numb);

    //     // delete item with index 
    //     if(contact_index != -1){
    //         contactList.splice(contact_index,1);
    //     }

    //     return response.redirect('back');        // returning back to the last page 

    // }


    // delete from mongo database
    
    // getting id 
    let id=request.query.id;


    // finding contact in database using its id
    Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error');
            return;
        }

        return response.redirect('back');
    });

});


// post user's data in contact list array
app.post('/create',function(request,response){
    
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

});


// server start
app.listen(port,function(err){
    if(err){
        console.log('error',err);
        return;
    }
    console.log('hello contact');
    return;
})