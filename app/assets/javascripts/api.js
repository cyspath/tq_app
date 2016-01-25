var Api = new _.extend({}, {

  token: function() {
    var el = document.querySelector('meta[name="csrf-token"]')
    return el ? el.getAttribute('content') : "";
  },

  headers: function() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-CSRF-Token': this.token(),
      'X-Requested-With': 'XMLHttpRequest'
    }
  },

  get: function(route, params) {
    return this.xhr(route, params, 'get');
  },

  put: function(route, params) {
    return this.xhr(route, params, 'put');
  },

  post: function(route, params) {
    return this.xhr(route, params, 'post');
  },

  delete: function(route, params) {
    return this.xhr(route, params, 'delete');
  },


  xhr: function(route, params, verb) {
    return fetch(
      route + '.json',
      _.merge(
        { method: verb, credentials: 'include', headers: this.headers() },
        { body: JSON.stringify(params) }
      )
    ).then(function(resp) { return resp.json(); })
  }

});
