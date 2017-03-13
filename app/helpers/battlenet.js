var axios = require("axios");

var _baseurl = "https://us.api.battle.net/wow/character/";
var _apikey = "xpbmb2crkyz7t6njsxfpvzw7v7nyssyh";

//TODO: locale support
function pullCharacter(realm, name) {
  var url = _baseurl + realm + "/" + name + "?locale=en_US&apikey=" + _apikey;
  console.log(url);
  return axios.get(url)
    .then(function (charData) {
      console.log(charData.data)
    })
}

module.exports = {
  pullCharacter: pullCharacter
}
