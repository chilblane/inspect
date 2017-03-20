var React = require('react');
var PropTypes = React.PropTypes;
var GetCharContainer = require('../containers/GetCharContainer');

function Home (props) {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container-fluid">
          <h1 className="display-4">Inspect</h1>
          <p className="lead">Inspect is a tool for group leaders and guilds to quickly find relevant information when evaluating player characters in World of Warcraft.</p>
          <hr className="my-4" />
          <p>This is a project built with React, Bootstrap 4, and the Battle.net API.</p>
          <p>US characters only at this time.</p>
        </div>
      </div>
    </div>
  )
}

module.exports = Home;
