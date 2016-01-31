var Image = React.createClass({
  getInitialState: function() {
    return {
      url: this.props.url

    };
  },
  // t.string   "url_original"
  // t.string   "url_cropped"
  // t.string   "url_225x225"
  // t.string   "url_50x50"
  // t.string   "url_30x30"
  // t.integer  "imageable_id"
  // t.string   "imageable_type"
  openWidget: function(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, result) {
      if (result) {
        var data = result[0]
        params = {
          url_original: data.url,
          url_cropped: "",
          url_225x225: this.generateCroppedUrl(data.url, data.public_id, data.path, data.coordinates.custom[0], 225, 225),
          url_50x50: this.generateCroppedUrl(data.url, data.public_id, data.path, data.coordinates.custom[0], 50, 50),
          url_30x30: this.generateCroppedUrl(data.url, data.public_id, data.path, data.coordinates.custom[0], 30, 30),
          imageable_type: this.props.imageableType,
          imageable_id: this.props.imageableId
        }
        debugger

      }
    }.bind(this))
  },

  generateUrl: function (url, publicId, path, coordinates) {
    var head = url.replace(path, "");
    var idx = path.match(publicId).index;
    var tail = path.slice(idx);
    var mid = "x_" + coordinates[0] + ",y_" + coordinates[1] + ",w_" + coordinates[2] + ",h_" + coordinates[3] + ",c_crop/";
    return head + mid + tail
  },

  generateCroppedUrl: function (url, publicId, path, coordinates, thumbWidth, thumbHeight) {
    var head = url.replace(path, "");
    var idx = path.match(publicId).index;
    var tail = path.slice(idx);
    var mid = "x_" + coordinates[0] + ",y_" + coordinates[1] + ",w_" + coordinates[2] + ",h_" + coordinates[3] + ",c_crop/";
    var thumbSize = "w_" + thumbWidth + ",h_" + thumbHeight + ",c_fill/"
    return head + mid + thumbSize + tail
  },

  render: function() {
    return (
      <div className="image__container" >
        <img src={this.state.url}></img>
        <div className="icon__container" >
          <i className="fa fa-plus-circle" onClick={this.openWidget}></i>
        </div>
      </div>
    )
  }
});
