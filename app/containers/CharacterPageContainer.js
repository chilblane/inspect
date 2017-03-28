var React = require("react");
var CharacterPage = require("../components/CharacterPage");
var pullCharacter = require('../helpers/battlenet').pullCharacter;
var pullItem = require('../helpers/battlenet').pullItem;

var CharacterPageContainer = React.createClass({
  getInitialState: function () {
    return {
      isLoading: true,
      isError: false,
      charData: {},
      gearData: {}
    }
  },
  makeRequest: function (realm, name) {
    var charData;
    pullCharacter(realm, name)
      .then(function (res) {
        charData = res;
        console.log(charData);
        if (charData.status === "nok") {
          this.setState({
            isError: true,
            // isLoading: false,
            charData: charData
          });
        } else {
          this.setState({
            isError: false,
            // isLoading: false,
            charData: charData
          });
          this.processGear(charData.items);
        }
      }.bind(this));
  },
  processGear: function(items) {
    var gear = items;
    delete gear['averageItemLevel'];
    delete gear['averageItemLevelEquipped'];
    console.log(gear);
    for (var i in gear) { // for each inventory item,
      var item = gear[i];
      item.gems = []; // create empty gems array
      if (item.tooltipParams) { // check if tooltip params,

        processItem(item);
      }
      console.log(item);
    }
    function processItem(item) {
      var gemIds = []; // array for collecting gem IDs

      function processGems(gems) {
        var currentGem = gemIds.shift(); // cycle through each gem ID
        if (currentGem) {
          pullItem(currentGem).then(function(res) { // call API for gem item info
            console.log(res);
            item.gems.push(res);
            processGems(gems);
          });
        }
      }

      for (var j in item.tooltipParams) {
        if (j.indexOf('gem') !== -1) { // check for gem params
          gemIds.push(item.tooltipParams[j]); // add to ID array
        }
      }
      if (gemIds.length > 0) {
        processGems(gemIds);
      }
    }
    console.log(gear); // i should fired once all the promises are finished
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
