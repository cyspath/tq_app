var Image = React.createClass({
  getInitialState: function() {
    return {
      url: this.props.url
    };
  },
  render: function() {
    return (
      <div className="image__container" >
        <img src={this.state.url}></img>
        
      </div>
    )
  }
});
