var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    console.log(this.handleClick, 'click');
    this.listenTo(this.model, 'select', this.handleClick);
    // this.model.on('select', this.handleClick2, this);
  },

  events: {
    'click .video-list-entry-title' : 'handleClick2'
  },

  handleClick: function() {
    
    console.log('clicked');
  },

  handleClick2: function(selectedVid) {
    this.model.select(selectedVid);
  },

  render: function() {
    // let url = this.model.attributes.snippet.thumbnails.default.url;
    // let channelTitle = this.model.attributes.snippet.channelTitle;
    // let description = this.model.attributes.snippet.description;
    // this.$el.html(this.template({url: url, videotitle: channelTitle, videodescription: description}));
    this.$el.html(this.template(this.model.attributes));
    return this.el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
