// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function(song) {
      // console.log(this.length);
      if (this.length === 1) {
        this.playFirst();
      }  
    }, this);

    this.on('ended', function(song) {
      console.log('songQueue Ended');
      this.shift();
      if (this.length > 0) {
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.remove(song);
    });
  },

  playFirst: function() {
    this.at(0).play();
  }

});





