var React = require('react');
var PropTypes = React.PropTypes;
var GetChar = require('../components/GetChar');
var pullRealms = require('../helpers/battlenet').pullRealms;

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
      charName: '',
      charRealm: '',
      realmList: []
    }
  },
  componentDidMount: function () {
    pullRealms('us')
      .then(this.createRealmList);
  },
  createRealmList: function (realmData) {
    this.setState({
      realmList: realmData
    });
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
        realmList={this.state.realmList}
        onUpdateName={this.handleUpdateName}
        onUpdateRealm={this.handleUpdateRealm}
        onSubmitChar={this.handleSubmitChar}
        charName={this.state.charName}
        charRealm={this.state.charRealm} />
    )
  }
});

module.exports = GetCharContainer;
