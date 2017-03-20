var React = require("react");
var GetCharContainer = require('../containers/GetCharContainer');
var Link = require("react-router").Link;

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <nav className="navbar navbar-inverse bg-inverse navbar-toggleable-xl justify-content-between">
          <Link to="/" className="navbar-brand">Inspect</Link>
          <GetCharContainer />
        </nav>
        {this.props.children}
      </div>
    )
  }
});

module.exports = Main;
