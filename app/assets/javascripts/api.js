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

});
