import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Feed Kids", isHighP: false},
        {name: "Brush Teeth", isHighP: true},
        {name: "Do Homework", isHighP: false}
      ],
      newItem:""

    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          isPurchased: false
        });
      this.newItem = "";
    },
    reassignItem: function(index) {
      this.items[index].isHighP = true;
  }
}
  });
});
