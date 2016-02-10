'use strict';

var groceries = new Vue({
  el: '#app',

  data: {
    items: JSON.parse(localStorage.getItem('items')) || []
  },

  methods: {
    addItem: function(ev) {
      this.items.push({
        id: guid(),
        description: ev.target.value,
        checked: false
      });

      localStorage.setItem('items', JSON.stringify(this.items));

      ev.target.value = '';
    },

    deleteItem: function(id) {
      this.items = this.items.filter(function(item) {
        return item.id !== id;
      });

      localStorage.setItem('items', JSON.stringify(this.items));
    },

    checkItem: function(id) {
      var item = this.items.filter(function(item) {
        return item.id === id;
      });

      var index = this.items.indexOf(item[0]);

      this.items[index].checked = true;

      localStorage.setItem('items', JSON.stringify(this.items));
    }
  }
});

// Generate four random hex digits.
function S4() {
   return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
};

// Generate a pseudo-GUID by concatenating random hexadecimal.
function guid() {
   return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
};
