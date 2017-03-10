var React = require("react");
var ReactRouter = require("react-router");
var Link = ReactRouter.Link;

var Home = React.createClass({
    render: function() {
        return (
            <div className="jumbotron text-center">
                <h1>Battle</h1>
                <p className="lead">Hello there</p>
            </div>
        )
    }
});

module.exports = Home;
