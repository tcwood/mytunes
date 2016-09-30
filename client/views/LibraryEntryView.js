// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  //Makes everything appended go inside a div
  // tagName: 'div',

  // template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  template: _.template(
    `<a href="#" class="list-group-item">
      <span class="artist">
        <%= artist %>
      </span>
      <span class="songTitle">
        <%= title %>
      </span>
    </a>`
    ),


  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function() {

    return this.$el.html(this.template(this.model.attributes));
  }

});
