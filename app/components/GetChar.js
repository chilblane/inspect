var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='submit'
      className='btn btn-success'>
        {props.children}
    </button>
  )
}

function generateRealmOptions (props) {
  return props.realmList.map(function(realm) {
    return <option key={realm.slug} value={realm.slug}>{realm.name}</option>;
  });
}


function RealmField (props) {
  return (
    <select
      className='form-control mr-sm-2'
      onChange={props.onUpdateRealm}
      value={props.charRealm}>
        <option value="" disabled>Realm</option>
        {generateRealmOptions(props)}
    </select>
  )
}

function NameField (props) {
  return (
    <input
      className='form-control mr-sm-2'
      onChange={props.onUpdateName}
      placeholder='Character Name'
      type='text'
      value={props.charName} />
  )
}

function GetChar (props) {
  return (
    <form className="form-inline"
    onClick={props.onSubmitChar}>
      <RealmField
        onUpdateRealm={props.onUpdateRealm}
        realmList={props.realmList}
        charRealm={props.charRealm} />
      <NameField
        onUpdateName={props.onUpdateName}
        charName={props.charName} />
      <Button>
          Inspect
      </Button>
    </form>
  )
}

GetChar.propTypes = {
  realmList: PropTypes.array.isRequired,
  onUpdateName: PropTypes.func.isRequired,
  onUpdateRealm: PropTypes.func.isRequired,
  onSubmitChar: PropTypes.func.isRequired,
  charName: PropTypes.string.isRequired,
  charRealm: PropTypes.string.isRequired
}

module.exports = GetChar;
