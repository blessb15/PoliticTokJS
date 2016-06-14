import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url = 'http://congress.api.sunlightfoundation.com/legislators/locate?apikey=b4f8f9a82c5e41f990462c34445346da&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
  }
});
