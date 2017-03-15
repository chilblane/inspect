var _apikey = "xpbmb2crkyz7t6njsxfpvzw7v7nyssyh";
var blizzard = require('blizzard.js').initialize({ apikey: _apikey });

//TODO: locale support
function pullCharacter(realm, name) {
  return blizzard.wow.character(
    ['profile', 'talents'],
    {
      origin: 'us',
      realm: realm,
      name: name
    }
  )
  .then(function(response) {
    console.log(response.data);
    return response.data;
  })
  .catch(function(err) {
    console.warn(err.response.data);
    return err.response.data;
  });
}

module.exports = {
  pullCharacter: pullCharacter
}
