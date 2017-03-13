var armory = require("armory");

var _apikey = "xpbmb2crkyz7t6njsxfpvzw7v7nyssyh";

//TODO: locale support
function pullCharacter(realm, name) {
  return armory.character({
    locale: "en_US",
    realm: realm,
    name: name,
    apiKey: _apikey
  // }, function (charData) {
  //     console.log(charData)
  //     // return charData.data
    }
  )
}

module.exports = {
  pullCharacter: pullCharacter
}
