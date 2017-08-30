var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.listenTo(this.videos, 'select', this.something);
    this.videoPlayer = new VideoPlayerView({
      model: this.videos.at(0),
      collection: this.videos,
    });
    // this.videos.on('select', , this);
    // this.currentVideo = exampleVideoData[0];
    // console.log(this.model);
    this.render();
  },

  something: function(v) {
    this.videoPlayer.model = v;
    this.videoPlayer.render();
    console.log('something', v);
  },

  render: function() {
    this.$el.html(this.template());

    var search = new SearchView({
    }).render();
    $('.search').children().remove();
    $('.search').append(search);

    var videoList = new VideoListView({
      collection: this.videos
    }).render();
    $('.list').children().remove();
    $('.list').append(videoList);

    // var videoPlayer = new VideoPlayerView({
    //   model: this.videos.at(0),
    //   collection: this.videos,
    // }).render();
    this.videoPlayer.render();
    $('.player').children().remove();
    $('.player').append(this.videoPlayer.render());

    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
