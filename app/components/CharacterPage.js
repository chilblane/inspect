var React = require("react");
var PropTypes = React.PropTypes;
var utils = require("../helpers/utils");
var GearList = require("../components/GearList");

function ArmoryImg(thumbnail) {
  return "http://render-us.worldofwarcraft.com/character/" + thumbnail;
}

function ArmoryLink(realm, name) {
  return "http://us.battle.net/wow/en/character/" + realm + "/" + name + "/advanced";
}

function ArmoryDate(timestamp) {
  var lastModified = new Date(timestamp);
  return lastModified.toLocaleString();
}

function CharacterUI(props) {
  var data = props.charData;
  return (
    <div>
      <img
        src={ArmoryImg(data.thumbnail)}
        alt={data.name} />
      <h1>{data.name} @ {data.realm} ({utils.parseFaction(data.faction)})</h1>
      <p>
        {data.level}&nbsp;
        {utils.parseRace(data.race)}&nbsp;
        {utils.parseSpec(data.talents)}&nbsp;
        {utils.parseClass(data.class)}
      </p>
      <p className="small">
        Last updated: {ArmoryDate(data.lastModified)}<br/>
        <a
          href={ArmoryLink(props.realm, props.name)}
          target="_blank">
            Armory Link
        </a>
      </p>
      <hr />
      <GearList
        charData={props.charData} />
    </div>
  )
}

function CharacterPage(props) {
  // console.log(props);
  if (props.isLoading === true) {
    return (
      <div className="container-fluid mt-5">
        <h1>Loading...</h1>
      </div>
    )
  } else if (props.isError === true) {
    return (
      <div className="container-fluid mt-5">
        <h1>Error!</h1>
        <p>{props.charData.reason}</p>
      </div>
    )
  } else {
    return (
      <div className="container-fluid mt-5">
        <CharacterUI
          realm={props.realm}
          name={props.name}
          charData={props.charData} />
      </div>
    )
  }
}

CharacterPage.propTypes = {
  realm: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  charData: PropTypes.object.isRequired
}

module.exports = CharacterPage;
