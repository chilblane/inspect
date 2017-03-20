var React = require("react");
var CharacterPage = require("../components/CharacterPage");
var pullCharacter = require('../helpers/battlenet').pullCharacter;

var CharacterPageContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      isError: false,
      charData: {}
    }
  },
  makeRequest: function (realm, name) {
    pullCharacter(realm, name)
      .then(function (charData) {
        // console.log(charData);
        if (charData.status === "nok") {
          this.setState({
            isError: true,
            isLoading: false,
            charData: charData
          })
        } else {
          this.setState({
            isError: false,
            isLoading: false,
            charData: charData
          })
        }
      }.bind(this));
  },
  componentDidMount: function () {
    this.makeRequest(this.props.routeParams.realm, this.props.routeParams.name);
  },
  componentWillReceiveProps: function (nextProps) {
    this.makeRequest(nextProps.routeParams.realm, nextProps.routeParams.name);
  },
  render: function() {
    return (
      <CharacterPage
        realm={this.props.routeParams.realm}
        name={this.props.routeParams.name}
        isLoading={this.state.isLoading}
        isError={this.state.isError}
        charData={this.state.charData} />
    )
  }
});

module.exports = CharacterPageContainer;
