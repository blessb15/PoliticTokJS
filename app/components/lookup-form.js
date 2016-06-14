import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    zipLookup() {
      Ember.Logger.log("hayy girl");
      var params = {
        zip: this.get('zip'),
      };
      this.sendAction('zipLookup', params);
    }
  }
});
