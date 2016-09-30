// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.render();
  },



  render: function() {

    this.$el.children().detach();

    this.$el.addClass('list-group queue'),

    this.$el.html('<h1>Up next...</h1>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
