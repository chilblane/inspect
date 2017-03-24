var React = require("react");
var PropTypes = React.PropTypes;

function GearListItem(item) {
  return (
    <div>
      <p>
        {
          item
          ? <strong>{item.itemLevel}</strong>
          : <strong className="text-muted">0</strong>
        }
        <br/>
          {
            item
            ? <span>{item.name}</span>
            : <span className="text-muted">Empty</span>
          }
      </p>
    </div>
  )
}

function GearList(props) {
  var gear = props.charData.items;
  var stats = props.charData.stats;
  console.log(gear);
  console.log(stats);
  return (
    <div>
      <h2>Equipment &amp; Stats</h2>
      <p>
        <strong>{gear.averageItemLevelEquipped}</strong> item level equipped &nbsp;
        <span className="text-muted">(<strong>{gear.averageItemLevel}</strong> item level total)</span>
      </p>
      <p>
        Health <strong>{stats.health.toLocaleString()}</strong><br/>
        Crit <strong>{stats.crit.toFixed(2)}</strong>%<br/>
        Haste <strong>{stats.haste.toFixed(2)}</strong>%<br/>
        Mastery <strong>{stats.mastery.toFixed(2)}</strong>%<br/>
        Versatility <strong>{stats.versatilityDamageDoneBonus.toFixed(2)}</strong>% / <strong>{stats.versatilityDamageTakenBonus.toFixed(2)}</strong>%
      </p>
      <h3>Equipped Gear</h3>
      <div className="row">
        <div className="col-sm">
          {GearListItem(gear.head)}
          {GearListItem(gear.neck)}
          {GearListItem(gear.shoulder)}
          {GearListItem(gear.back)}
          {GearListItem(gear.chest)}
          {GearListItem(gear.shirt)}
          {GearListItem(gear.tabard)}
          {GearListItem(gear.wrist)}
        </div>
        <div className="col-sm">
          {GearListItem(gear.hands)}
          {GearListItem(gear.waist)}
          {GearListItem(gear.legs)}
          {GearListItem(gear.feet)}
          {GearListItem(gear.finger1)}
          {GearListItem(gear.finger2)}
          {GearListItem(gear.trinket1)}
          {GearListItem(gear.trinket2)}
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          {GearListItem(gear.mainHand)}
        </div>
        <div className="col-sm">
          {GearListItem(gear.offHand)}
        </div>
      </div>
    </div>
  )
}

GearList.propTypes = {
  charData: PropTypes.object.isRequired
}

module.exports = GearList;
