var React = require("react");
var ReactRouter = require("react-router");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;

var Main = require("../containers/Main");
var HomeContainer = require("../containers/HomeContainer");
var CharacterPageContainer = require("../containers/CharacterPageContainer");

var routes = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={HomeContainer} />
            <Route path="character/:realm/:name" component={CharacterPageContainer} />
        </Route>
    </Router>
);

module.exports = routes;
