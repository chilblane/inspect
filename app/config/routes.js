var React = require("react");
var ReactRouter = require("react-router");
var history = require("history");

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var useRouterHistory = ReactRouter.useRouterHistory;
var createHistory = history.createHistory;

var appHistory = useRouterHistory(createHistory)({
  basename: '/inspect'
});

var Main = require("../containers/Main");
var HomeContainer = require("../containers/HomeContainer");
var CharacterPageContainer = require("../containers/CharacterPageContainer");

var routes = (
    <Router history={appHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={HomeContainer} />
            <Route path="character/:realm/:name" component={CharacterPageContainer} />
        </Route>
    </Router>
);

module.exports = routes;
