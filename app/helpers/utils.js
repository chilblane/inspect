var factionsMap = {
  "0": "Alliance",
  "1": "Horde",
  "2": "Neutral"
}
var classesMap = {
"1": "Warrior",
"2": "Paladin",
"3": "Hunter",
"4": "Rogue",
"5": "Priest",
"6": "Death Knight",
"7": "Shaman",
"8": "Mage",
"9": "Warlock",
"10": "Monk",
"11": "Druid",
"12": "Demon Hunter",
}
var racesMap = {
"1": "Human",
"2": "Orc",
"3": "Dwarf",
"4": "Night Elf",
"5": "Undead",
"6": "Tauren",
"7": "Gnome",
"8": "Troll",
"9": "Goblin",
"10": "Blood Elf",
"11": "Draenei",
"12": "Worgen",
"13": "Pandaren",
"14": "Pandaren",
"15": "Pandaren",
}

function parseClass(number) {
  return classesMap[number];
}
function parseRace(number) {
  return racesMap[number];
}
function parseFaction(number) {
  return factionsMap[number];
}

function parseSpec(talents) {
  var currentSpec;
  for (var i = 0; i < talents.length; i++ ) {
    if (talents[i].selected) {
      currentSpec = talents[i].spec.name;
    }
  }
  return currentSpec;
}
module.exports = {
  parseClass: parseClass,
  parseRace: parseRace,
  parseFaction: parseFaction,
  parseSpec: parseSpec
}
