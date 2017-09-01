var VideoPlayerView = Backbone.View.extend({


  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },

  selectVideo: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    // this.$el.html('<div class="loading">Please wait...</div>');
    // console.log(this.model, 'collection');
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    // this.$el.html(this.template(this.model.attributes));
    // this.$el.children().empty();
    // console.log(this.model);
    return this.el;
  },

  // renderVideo = function() {

  // },

  template: templateURL('src/templates/videoPlayer.html')

});
