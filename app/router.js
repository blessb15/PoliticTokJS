import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('zipcode', {path:'/zipcode/:zip'});
  this.route('committee', {path: '/committee/:name'});
  this.route('politician', {path: '/politician/:bioguide_id'});
});

export default Router;
