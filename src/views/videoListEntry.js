var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'select', this.handleclick);
  },

  events: {
    'click .video-list-entry media': 'handleClick'
  },

  handleClick: function() {
    
    console.log('clicked');
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
