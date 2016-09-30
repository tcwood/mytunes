// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  // tagName: 'tr',

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
      this.model.dequeue();
    }
  },
  
  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }
});
