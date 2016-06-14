import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    if(params.name === "all"){
      var url = 'http://congress.api.sunlightfoundation.com/committees?apikey=b4f8f9a82c5e41f990462c34445346da';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
    } else {
      var url = 'http://congress.api.sunlightfoundation.com/committees?query='+ params.name + '&apikey=b4f8f9a82c5e41f990462c34445346da';
      return Ember.$.getJSON(url).then(function(responseJSON) {
        return responseJSON.results;
      });
    }
  }
});
