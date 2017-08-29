var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
    
    // this.collection.on('select', this.render, this);
    // this.render();
  },

  render: function() {
    
    // this.$el.html('<div class="loading">Please wait...</div>');
    // console.log(this.model, 'collection');
    this.$el.html(this.template());
    return this.el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
