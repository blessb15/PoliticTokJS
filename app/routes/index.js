import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params){
      this.transitionTo('zipcode', params.zip);
    },
    committeeLookup(params){
      this.transitionTo('committee', params.name);
    }
  }
});
