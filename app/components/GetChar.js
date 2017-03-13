var React = require('react');
var PropTypes = React.PropTypes;

function Button (props) {
  return (
    <button type='button'
      className='btn btn-success'
      onClick={props.onSubmitChar}>
        {props.children}
    </button>
  )
}

function RealmField (props) {
  return (
    <select
      className='form-control mr-sm-2'
      onChange={props.onUpdateRealm}
      value={props.charRealm}>
        <option value="kiljaeden">Kil'Jaeden</option>
        <option value="emeralddream">Emerald Dream</option>
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
    <form className="form-inline">
      <RealmField
        onUpdateRealm={props.onUpdateRealm}
        charRealm={props.charRealm} />
      <NameField
        onUpdateName={props.onUpdateName}
        charName={props.charName} />
      <Button
        onSubmitChar={props.onSubmitChar}>
          Inspect
      </Button>
    </form>
  )
}

GetChar.propTypes = {
  onUpdateName: PropTypes.func.isRequired,
  onUpdateRealm: PropTypes.func.isRequired,
  onSubmitChar: PropTypes.func.isRequired,
  charName: PropTypes.string.isRequired,
  charRealm: PropTypes.string.isRequired
}

module.exports = GetChar;
