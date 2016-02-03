
var Route = ReactRouter.Route;
var DefaultRoute = ReactRouter.DefaultRoute;

var Link = ReactRouter.Link;
var RouteHandler = ReactRouter.RouteHandler;

var App = React.createClass({
  render: function() {
    return (
      <div className="main" >
        <NewGroupForm />
        <RouteHandler {...this.props}/>
      </div>
    );
  }
});

this.AppRoutes = (
  <Route path='/' handler={App} >

    <Route name="groups" path='/groups' handler={GroupsIndex}></Route>

      <Route name='groupShow' path='/groups/:groupId' handler={GroupPage} ></Route>

    <Route name="events" path='/events' handler={EventsIndexPage}></Route>


    <Route name="profile" path='/profile' handler={User} />

  </Route>
);
