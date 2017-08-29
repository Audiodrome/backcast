var VideoListView = Backbone.View.extend({

  initialize: function() {
    
    this.collection.on('sync', this.render, this);
    // this.render();
  },

  render: function() {
    
    // console.log(this.$el);
    this.$el.html(this.template());
    this.$el.children().empty();
    this.collection.forEach(this.renderVideo, this);

    return this.$el;
  },

  renderVideo: function(video) {

    var videoView = new VideoListEntryView({model: video});
    // $('.video-list').append(videoView.render());
    this.$el.find('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
