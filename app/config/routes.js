var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var useBasename = require("history").useBasename;

var Main = require("../containers/Main");
var HomeContainer = require("../containers/HomeContainer");
var CharacterPageContainer = require("../containers/CharacterPageContainer");

var routes = (
    <Router history={ useBasename(() => browserHistory)({ basename: '/inspect' }) }>
        <Route path="/" component={Main}>
            <IndexRoute component={HomeContainer} />
            <Route path="character/:realm/:name" component={CharacterPageContainer} />
        </Route>
    </Router>
);

module.exports = routes;
