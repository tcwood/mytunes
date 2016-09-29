// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    // console.log('songModel play');
  },

  enqueue: function() {
    this.trigger('enqueue', this);
    // console.log('enqueued');
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    console.log('songModel Ended');
    this.trigger('ended', this);
  }

});
