
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
          <div>
            <nav>
              <ul>
                <li>
                  <Link to='groups'>GROUPS PAGE</Link>
                </li>
                <li>
                  <Link to='profile'>PROFILE PAGE</Link>
                </li>
              </ul>
            </nav>
            <RouteHandler {...this.props}/>
          </div>
        );

  }
});

this.AppRoutes = (
  <Route path='/' handler={App}>
    <Route name="groups" path='/groups' handler={GroupsIndex}>
    </Route>
    <Route name="profile" path='/profile' handler={User} />

  </Route>
);


// ReactRouter.run(this.AppRoutes, function (Handler) {
//   ReactDOM.render(<Handler/>, document.getElementById('react'));
// });
