
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div className="main" >
        <Navbar />
        <NewGroupForm />
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

this.AppRoutes = (
  <Route path='/' handler={App}>

    <DefaultRoute name="events" handler={EventsIndexPage} />

    <Route name='eventDetail' path='/events/:eventId' handler={EventPage} />

    <Route name="groups" path='/groups' handler={GroupsIndex} />

    <Route name='groupDetail' path='/groups/:groupId' handler={GroupPage} ></Route>

    <Route name='userDetail' path='/users/:userId' handler={UserPage} />

  </Route>
);
