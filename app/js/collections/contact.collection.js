var ContactCollection = Backbone.Collection.extend({
  model: Contact,
  url: 'http://tiy-515.herokuapp.com/collections/nickcontacts',

  initialize: function () {
   this.sortIt('first');
  },

  comparator: function (property) {
        return selectedStrategy.apply(myModel.get(property));
    },

  strategies: {
        firstName: function (person) {
          return person.get("first");
        },
        lastName: function (person) {
          return person.get("last");
        },
    },
  sortIt: function (sortProperty) {
        this.comparator = this.strategies[sortProperty];
    },

});
