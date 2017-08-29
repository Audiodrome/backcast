var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    // console.log(this.model);
    this.render();
  },


  render: function() {
    console.log(this.videos);
    this.$el.html(this.template());
    // this.$el.children.empty();
    var videoList = new VideoListView({
      collection: this.videos
    }).render();
    $('.list').append(videoList);

    var videoPlayer = new VideoPlayerView({
      collection: this.videos[0]
    }).render();
    $('.player').append(videoPlayer);
    // this.$el.append(vlv);
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
