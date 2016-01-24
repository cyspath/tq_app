
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
          <div className="main" >
            <RouteHandler {...this.props}/>
          </div>
        );

  }
});

this.AppRoutes = (
  <Route path='/' handler={App}>
    <Route name="groups" path='/groups' handler={GroupsIndex} />
    <Route name="profile" path='/profile' handler={User} />

  </Route>
);


// ReactRouter.run(this.AppRoutes, function (Handler) {
//   ReactDOM.render(<Handler/>, document.getElementById('react'));
// });
