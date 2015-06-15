//Url variable
var url = 'http://tiy-515.herokuapp.com/collections/nickcontacts';
// Define Contact collection
var allContacts = new ContactCollection();

//Pull up contacts
allContacts.fetch().done(function(){
  allContacts.each(function(contact){
    contactView(contact.attributes);
  });
});


//Add new contact
var newContactFunction = function (e){
  e.preventDefault(e);
  //gets input data
  var newFirstName = $(this).find('#firstName').val();
  var newLastName = $(this).find('#lastName').val();
  var newEmail = $(this).find('#email').val();
  var newPhone = $(this).find('#phone').val();
  var newTwitter = $(this).find('#twitter').val();
  var newLinkedIn = $(this).find('#linkedIn').val();
  //create new instance
  var contact = new Contact ({
    first: newFirstName,
    last: newLastName,
    email: newEmail,
    phone: newPhone,
    twitter: newTwitter,
    linkedIn: newLinkedIn
  });

  allContacts.add(contact).save().success( function(data){
    contactView(data);
  });

 this.reset();
};


// Show Contact Function
var showContact = function(e){
  e.preventDefault();

  var contactClicked = $(this).parent();
  var contactId = contactClicked.attr('id');

  $('.list').addClass('hidden'); //hides content
  $('.list').removeClass('visible-box'); //helps with transitions

  $('#contacts').find("#"+contactId).removeClass('hidden'); //shows content
  $('#contacts').find("#"+contactId).addClass('visible-box'); //helps with transitions

};


//Show form function
var showForm = function(e){
  e.preventDefault(e);

  $('.form-holder').toggleClass('visible'); //makes block visible

  $('#addContact').toggleClass('formstuff'); //makes inputs and form visible
};


//Remove function
var removeContact = function(e){
  e.preventDefault();
  var viewRemove = $(this).parent();

  var dataRemove = viewRemove.attr('id');
  $('#contactNames').find("#"+dataRemove).remove(); //finds contact info on the right


  $.ajax({ //deletes from URL
    url: url + '/' + dataRemove,
    type: 'DELETE'
    }).done( function(){
    viewRemove.remove();
  });

};

//Add to view
var contactView = function(c){

  var newContact = template.contactlist(c); //contact info
  var contactName = template.contactnames(c); //contact names

  $("#contacts").prepend(newContact); //contact info on right
  $("#contactNames").prepend(contactName); //names on left side
};
//On Click add
$('#addContact').on('submit', newContactFunction);
//On Clilck Show Contact
$('#contactNames').on('click', 'h3', showContact);
//On Click show form
$('h4').on('click', showForm);
//On Click remove
$('#contacts').on('click', '.fa-trash-o', removeContact);
