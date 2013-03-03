window.Apartments = Backbone.Model.extend({
  initialize: function(params) {
    this.url = '/data/apartments/' + params.bigOrSmall + '/' + params.expensiveOrCheap + '/' + params.oldOrNew + '/listings.json'
  }
});

window.ApartmentsView = Backbone.View.extend({
  initialize: function(args) {
    _(this).bindAll('render', 'renderResult');

    this.render();
  },
  render: function() {
    _.each(this.model.get("entries"), this.renderResult);
  },
  renderResult: function(result) {
    if (result.url && result.img_url) {
      var div = $(_.template($('#apartment-template').html(), result));
      $(this.el).append(div);
    }
  }
});