var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // this.currentVideo = exampleVideoData[0];
    // console.log(this.model);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());

    var videoList = new VideoListView({
      collection: this.videos
    }).render();
    $('.list').children().remove();
    $('.list').append(videoList);

    var videoPlayer = new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    $('.player').children().remove();
    $('.player').append(videoPlayer);

    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
