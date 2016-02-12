var Api = new _.extend({}, {

  get: function(route, params) {
    return this.serverAction(route, params, 'get');
  },

  put: function(route, params) {
    return this.serverAction(route, params, 'put');
  },

  post: function(route, params) {
    return this.serverAction(route, params, 'post');
  },

  delete: function(route, params) {
    return this.serverAction(route, params, 'delete');
  },

  serverAction: function(route, params, verb) {
    return $.ajax({
      type: verb,
      url: route,
      data: params,
      dataType: "json",
      // success:function(resp){
      //   console.log(resp);
      //   return(resp)
      // },
      error:function(resp){
        console.log(resp)
      }
    })
  }

  // xhr: function(route, params, verb) {
  //   return fetch(
  //     route + '.json',
  //     _.merge(
  //       { method: verb, credentials: 'include', headers: this.headers() },
  //       { body: JSON.stringify(params) }
  //     )
  //   ).then(function(resp) { return resp.json(); })
  // },

  // token: function() {
  //   var el = document.querySelector('meta[name="csrf-token"]')
  //   return el ? el.getAttribute('content') : "";
  // },
  //
  // headers: function() {
  //   return {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'X-CSRF-Token': this.token(),
  //     'X-Requested-With': 'XMLHttpRequest'
  //   }
  // }
});
