var VideoListView = Backbone.View.extend({

  initialize: function() {
    // this.collection.on('sync', this.render, this);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'select', this.tempfunc);
    // this.render();
  },

  render: function() {
    
    // console.log(this.$el);
    this.$el.html(this.template());
    this.$el.children().empty();
    this.collection.forEach(this.renderVideo, this);

    return this.$el;
  },

  tempfunc: function(video) {
    console.log('temp', video);
 
    return video;
  },

  renderVideo: function(video) {

    var videoView = new VideoListEntryView({model: video});
    // $('.video-list').append(videoView.render());
    this.$el.find('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
