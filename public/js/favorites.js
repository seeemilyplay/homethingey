window.Favorites = Backbone.Model.extend({
  initialize: function(username) {
    this.username = username;
    this.url = '/data/etsy/' + username + '/favorites.json';
    this.set({"blah": "bbbb"});
  },
  isExpensiveOrCheap: function() {
    if (this.username === '82emily') {
      return 'expensive';
    } else {
      return 'cheap'
    }
  },
  isOldOrNew: function() {
    if (this.username === '82emily') {
      return 'new';
    } else {
      return 'old';
    }
  },
  isBigOrSmall: function() {
    if (this.username === '82emily') {
      return 'big';
    } else {
      return 'small';
    }
  }
});

window.FavoritesView = Backbone.View.extend({
  initialize: function(args) {
    _(this).bindAll('render', 'renderResult');

    this.render();
  },
  render: function() {
    _.each(this.model.get("results"), this.renderResult);
  },
  renderResult: function(result) {
    if (result.url_75x75) {
      var div = $(_.template($('#favorite-template').html(),result));
      $(this.el).append(div);
    }
  }
});