new Vue({
    el: '#app',
    data: {
      selected: 'default',
      types: [
        {
          icon: 'fa-meh',
          name: 'default',
        },
        {
          icon: 'fa-gift',
          name: 'party',
        },
        {
          icon: 'fa-pizza-slice',
          name: 'pizza',
        },
        {
          icon: 'fa-user-tie',
          name: 'tie',
        },
        // {
        //   icon: 'fa-eye',
        //   name: 'glow',
        // },
        {
          icon: 'fa-glasses',
          name: 'glasses',
        },
      ]
    },
    methods: {
      changeType: function(type) {
        this.selected = type;
      }
    }
  });