// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // url: 'https://api.parse.com/1/classes/songs/',

  // method: 'GET',

  // initialize: function() {
  //   this.fetch({
  //     success: function(data) {
  //       // console.log(data.models[0].attributes.results);
  //       data.models[0].attributes.results.forEach(song => this.add(song));
  //       this.shift();
  //       console.log(this);
  //     }.bind(this)
  //   });
  //   // setTimeout(() => console.log(this), 1000);
  // }


});