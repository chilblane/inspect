var React = require('react');
var PropTypes = React.PropTypes;
var GetChar = require('../components/GetChar');
var pullCharacter = require('../helpers/battlenet').pullCharacter;

var GetCharContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function () {
    return {
    }
  },
  getInitialState: function () {
    return {
      charName: 'dnasis', //TODO: update with blank
      charRealm: 'kiljaeden' //TODO: update with aegwynn or whatever
    }
  },
  handleUpdateName: function (e) {
    this.setState({
      charName: e.target.value
    })
  },
  handleUpdateRealm: function (e) {
    this.setState({
      charRealm: e.target.value
    })
  },
  handleSubmitChar: function (e) {
    e.preventDefault();
    this.context.router.push('/character/' + this.state.charRealm + '/' + this.state.charName);
  },
  render: function () {
    return (
      <GetChar
        onUpdateName={this.handleUpdateName}
        onUpdateRealm={this.handleUpdateRealm}
        onSubmitChar={this.handleSubmitChar}
        charName={this.state.charName}
        charRealm={this.state.charRealm} />
    )
  }
});

module.exports = GetCharContainer;