import Ember from 'ember';

export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  didInsertElement: function() {
      this.$('.search-daycare').hide();
  },

  actions: {
    showMap() {
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(39.8282, -98.5795),
        zoom: 4
      };
      this.get('map').findMap(container, options);

      this.$('.search-daycare').show();
      this.$('.display-map').hide();
    },
    search() {
      
    }
  }
});
