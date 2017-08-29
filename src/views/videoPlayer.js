var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    // console.log(this.model, 'collection');
    this.$el.html(this.template(this.model.attributes));
    // this.$el.children().empty();
    // console.log(this.model);
    return this.el;
  },

  // renderVideo = function() {

  // },

  template: templateURL('src/templates/videoPlayer.html')

});
