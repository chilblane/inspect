var React = require("react");
var GetCharContainer = require('../containers/GetCharContainer');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-xl justify-content-between">
          <span className="navbar-brand">Inspect</span>
          <GetCharContainer />
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
