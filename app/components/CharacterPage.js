var React = require("react");
var PropTypes = React.PropTypes;
var utils = require("../helpers/utils");

function ArmoryImg(thumbnail) {
  return "http://render-us.worldofwarcraft.com/character/" + thumbnail;
}

function ArmoryLink(realm, name) {
  return "http://us.battle.net/wow/en/character/" + realm + "/" + name + "/advanced";
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
      <p>
        <a
          href={ArmoryLink(props.realm, props.name)}
          target="_blank">
            Armory Link
        </a>
      </p>
    </div>
  )
}

function CharacterPage(props) {
  return (
    <div className="container-fluid mt-5">
      {
        props.isLoading === true
          ? <h1>Loading</h1>
          : <CharacterUI
              realm={props.realm}
              name={props.name}
              charData={props.charData} />
      }
    </div>
  )
}

CharacterPage.propTypes = {
  realm: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  charData: PropTypes.object.isRequired
}

module.exports = CharacterPage;
