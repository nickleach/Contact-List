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
  var newFirstName = $(this).find('#firstName').val();
  var newLastName = $(this).find('#lastName').val();
  var newEmail = $(this).find('#email').val();
  var newPhone = $(this).find('#phone').val();
  var newTwitter = $(this).find('#twitter').val();
  var newLinkedIn = $(this).find('#linkedIn').val();
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
//Remove function
var removeContact = function(e){
  e.preventDefault();
  var viewRemove = $(this).parent();
  console.log(viewRemove);
  var dataRemove = viewRemove.attr('id');
  console.log(dataRemove);

  $.ajax({
    url: url + '/' + dataRemove,
    type: 'DELETE'
    }).done( function(){
    viewRemove.remove();
  });

};

//Add to view
var contactView = function(c){
  var newContact = template.contactlist(c);
  $("#contacts").prepend(newContact);
};
//On Click add
$('#addContact').on('submit', newContactFunction);
//On Click remove
$('#contacts').on('click', '.fa-trash-o', removeContact);
