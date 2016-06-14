import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    committeeLookup() {
      Ember.Logger.log("hayy girl");
      var params = {
        name: this.get('name'),
      };
      
      this.sendAction('committeeLookup', params);
    }
  }
});
