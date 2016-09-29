var internetData = [];

var ajaxCall = function() {
  $.ajax({
    url: 'https://api.parse.com/1/classes/songs/',
    type: 'GET',
    data: 'JSON',
    success: function(data) {
      data.results.forEach(function(song) {
        internetData.push(song);
      });
    },
    error: function(error) {
      console.error(error);
    }




  }
  );


};