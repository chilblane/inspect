var React = require("react");
var PropTypes = React.PropTypes;

function ArmoryImg(thumbnail) {
  return "http://render-us.worldofwarcraft.com/character/" + thumbnail;
}

function ArmoryLink(realm, name) {
  return "http://us.battle.net/wow/en/character/" + realm + "/" + name + "/advanced";
}

function CharacterUI(props) {
  console.log(props.charData);
  return (
    <div>
      <img
        src={ArmoryImg(props.charData.thumbnail)}
        alt="{props.charData.name} - {props.charData.realm}" />
      <h1>{props.charData.name} @ {props.charData.realm}</h1>
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
