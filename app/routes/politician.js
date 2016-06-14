import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    var url1 = 'http://congress.api.sunlightfoundation.com/committees?member_ids=' + params.bioguide_id + '&apikey=b4f8f9a82c5e41f990462c34445346da';
    var url2 = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + params.bioguide_id + '&apikey=b4f8f9a82c5e41f990462c34445346da';

    return Ember.RSVP.hash ({
      committees: Ember.$.getJSON(url1).then(function(responseJSON) {
        return responseJSON.results;
      }),
      politicians: Ember.$.getJSON(url2).then(function(responseJSON) {
        return responseJSON.results;
      })
    });
  }
});
