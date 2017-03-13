var _apikey = "xpbmb2crkyz7t6njsxfpvzw7v7nyssyh";
var blizzard = require('blizzard.js').initialize({ apikey: _apikey });

//TODO: locale support
function pullCharacter(realm, name) {
  return blizzard.wow.character(
    ['profile'],
    {
      origin: 'us',
      realm: realm,
      name: name
    }
  ).then(function(charData) {
    return charData.data
  });
}

module.exports = {
  pullCharacter: pullCharacter
}
