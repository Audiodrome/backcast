var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
    
    // this.collection.on('select', this.render, this);
    // this.render();
  },

  render: function() {
    
    this.$el.html('<div class="loading">Please wait...</div>');
    //this.$el.html(this.template(this.model.attributes));
    return this.el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
