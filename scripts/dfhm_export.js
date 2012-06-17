// Generated by CoffeeScript 1.3.3
(function() {
  var boilerplate, boilerplateLarge, boilerplateMedium, boilerplateSmall, boilerplateSmaller, boilerplateTiny;

  boilerplateLarge = {
    BEAST_END_YEAR: "300:80",
    MEGABEAST_CAP: 75,
    SEMIMEGABEAST_CAP: 150,
    TITAN_NUMBER: 33,
    DEMON_NUMBER: 52,
    NIGHT_TROLL_NUMBER: 26,
    BOGEYMAN_NUMBER: 26,
    VAMPIRE_NUMBER: 26,
    WEREBEAST_NUMBER: 26,
    SECRET_NUMBER: 52,
    REGIONAL_INTERACTION_NUMBER: 52,
    DISTURBANCE_INTERACTION_NUMBER: 52,
    EVIL_CLOUD_NUMBER: 26,
    EVIL_RAIN_NUMBER: 26,
    GOOD_SQ_COUNTS: "24:244:0",
    EVIL_SQ_COUNTS: "24:244:0",
    SUBREGION_MAX: 3500,
    TOTAL_CIV_NUMBER: 40,
    SITE_CAP: 1500
  };

  boilerplateMedium = {
    BEAST_END_YEAR: '200:80',
    MEGABEAST_CAP: 18,
    SEMIMEGABEAST_CAP: 37,
    TITAN_NUMBER: 9,
    DEMON_NUMBER: 28,
    NIGHT_TROLL_NUMBER: 14,
    BOGEYMAN_NUMBER: 14,
    VAMPIRE_NUMBER: 14,
    WEREBEAST_NUMBER: 14,
    SECRET_NUMBER: 28,
    REGIONAL_INTERACTION_NUMBER: 28,
    DISTURBANCE_INTERACTION_NUMBER: 28,
    EVIL_CLOUD_NUMBER: 14,
    EVIL_RAIN_NUMBER: 14,
    GOOD_SQ_COUNTS: '25:251:0',
    EVIL_SQ_COUNTS: '25:251:0',
    SUBREGION_MAX: 2750,
    TOTAL_CIV_NUMBER: 40,
    SITE_CAP: 1040
  };

  boilerplateSmall = {
    BEAST_END_YEAR: '100:80',
    MEGABEAST_CAP: 4,
    SEMIMEGABEAST_CAP: 37,
    TITAN_NUMBER: 9,
    DEMON_NUMBER: 22,
    NIGHT_TROLL_NUMBER: 11,
    BOGEYMAN_NUMBER: 11,
    VAMPIRE_NUMBER: 11,
    WEREBEAST_NUMBER: 11,
    SECRET_NUMBER: 22,
    REGIONAL_INTERACTION_NUMBER: 22,
    DISTURBANCE_INTERACTION_NUMBER: 22,
    EVIL_CLOUD_NUMBER: 11,
    EVIL_RAIN_NUMBER: 11,
    GOOD_SQ_COUNTS: '6:63:127',
    EVIL_SQ_COUNTS: '6:63:127',
    SUBREGION_MAX: 2750,
    TOTAL_CIV_NUMBER: 10,
    SITE_CAP: 264
  };

  boilerplateSmaller = {
    BEAST_END_YEAR: '50:80',
    MEGABEAST_CAP: 1,
    SEMIMEGABEAST_CAP: 2,
    TITAN_NUMBER: 9,
    DEMON_NUMBER: 20,
    NIGHT_TROLL_NUMBER: 10,
    BOGEYMAN_NUMBER: 10,
    VAMPIRE_NUMBER: 10,
    WEREBEAST_NUMBER: 10,
    SECRET_NUMBER: 20,
    REGIONAL_INTERACTION_NUMBER: 20,
    DISTURBANCE_INTERACTION_NUMBER: 20,
    EVIL_CLOUD_NUMBER: 10,
    EVIL_RAIN_NUMBER: 10,
    GOOD_SQ_COUNTS: '1:16:0',
    EVIL_SQ_COUNTS: '1:16:0',
    SUBREGION_MAX: 2750,
    TOTAL_CIV_NUMBER: 5,
    SITE_CAP: 68
  };

  boilerplateTiny = {
    BEAST_END_YEAR: '30:80',
    MEGABEAST_CAP: 1,
    SEMIMEGABEAST_CAP: 2,
    TITAN_NUMBER: 9,
    DEMON_NUMBER: 20,
    NIGHT_TROLL_NUMBER: 10,
    BOGEYMAN_NUMBER: 10,
    VAMPIRE_NUMBER: 10,
    WEREBEAST_NUMBER: 10,
    SECRET_NUMBER: 20,
    REGIONAL_INTERACTION_NUMBER: 20,
    DISTURBANCE_INTERACTION_NUMBER: 20,
    EVIL_CLOUD_NUMBER: 10,
    EVIL_RAIN_NUMBER: 10,
    GOOD_SQ_COUNTS: '1:0:0',
    EVIL_SQ_COUNTS: '1:0:0',
    SUBREGION_MAX: 2750,
    TOTAL_CIV_NUMBER: 5,
    SITE_CAP: 18
  };

  boilerplate = function(width, height, params) {
    return "[WORLD_GEN]\n    [TITLE:DFHM]\n    [DIM:" + width + ":" + height + "]\n    [EMBARK_POINTS:1324]\n    [END_YEAR:1050]\n    [BEAST_END_YEAR:" + params.BEAST_END_YEAR + "]\n    [REVEAL_ALL_HISTORY:1]\n    [CULL_HISTORICAL_FIGURES:0]\n    [ELEVATION:0:0:0:0]\n    [RAINFALL:0:0:0:0]\n    [TEMPERATURE:0:0:0:0]\n    [DRAINAGE:0:0:0:0]\n    [VOLCANISM:0:0:0:0]\n    [SAVAGERY:0:0:0:0]\n    [ELEVATION_FREQUENCY:1:1:1:1:1:1]\n    [RAIN_FREQUENCY:1:1:1:1:1:1]\n    [DRAINAGE_FREQUENCY:1:1:1:1:1:1]\n    [TEMPERATURE_FREQUENCY:1:1:1:1:1:1]\n    [SAVAGERY_FREQUENCY:1:1:1:1:1:1]\n    [VOLCANISM_FREQUENCY:1:1:1:1:1:1]\n    [MINERAL_SCARCITY:2500]\n    [MEGABEAST_CAP:" + params.MEGABEAST_CAP + "]\n    [SEMIMEGABEAST_CAP:" + params.SEMIMEGABEAST_CAP + "]\n    [TITAN_NUMBER:" + params.TITAN_NUMBER + "]\n    [TITAN_ATTACK_TRIGGER:80:0:100000]\n    [DEMON_NUMBER:" + params.DEMON_NUMBER + "]\n    [NIGHT_TROLL_NUMBER:" + params.NIGHT_TROLL_NUMBER + "]\n    [BOGEYMAN_NUMBER:" + params.BOGEYMAN_NUMBER + "]\n    [VAMPIRE_NUMBER:" + params.VAMPIRE_NUMBER + "]\n    [WEREBEAST_NUMBER:" + params.WEREBEAST_NUMBER + "]\n    [SECRET_NUMBER:" + params.SECRET_NUMBER + "]\n    [REGIONAL_INTERACTION_NUMBER:" + params.REGIONAL_INTERACTION_NUMBER + "]\n    [DISTURBANCE_INTERACTION_NUMBER:" + params.DISTURBANCE_INTERACTION_NUMBER + "]\n    [EVIL_CLOUD_NUMBER:" + params.EVIL_CLOUD_NUMBER + "]\n    [EVIL_RAIN_NUMBER:" + params.EVIL_RAIN_NUMBER + "]\n    [GOOD_SQ_COUNTS:" + params.GOOD_SQ_COUNTS + "]\n    [EVIL_SQ_COUNTS:" + params.EVIL_SQ_COUNTS + "]\n    [PEAK_NUMBER_MIN:0]\n    [PARTIAL_OCEAN_EDGE_MIN:0]\n    [COMPLETE_OCEAN_EDGE_MIN:0]\n    [VOLCANO_MIN:0]\n    [REGION_COUNTS:SWAMP:0:0:0]\n    [REGION_COUNTS:DESERT:0:0:0]\n    [REGION_COUNTS:FOREST:0:0:0]\n    [REGION_COUNTS:MOUNTAINS:0:0:0]\n    [REGION_COUNTS:OCEAN:0:0:0]\n    [REGION_COUNTS:GLACIER:0:0:0]\n    [REGION_COUNTS:TUNDRA:0:0:0]\n    [REGION_COUnTS:GRASSLAND:0:0:0]\n    [REGION_COUNTS:HILLS:0:0:0]\n    [EROSION_CYCLE_COUNT:250]\n    [RIVER_MINS:0:0]\n    [PERIODICALLY_ERODE_EXTREMES:1]\n    [OROGRAPHIC_PRECIPITATION:0]\n    [SUBREGION_MAX:" + params.SUBREGION_MAX + "]\n    [CAVERN_LAYER_COUNT:3]\n    [CAVERN_LAYER_OPENNESS_MIN:0]\n    [CAVERN_LAYER_OPENNESS_MAX:100]\n    [CAVERN_LAYER_PASSAGE_DENSITY_MIN:0]\n    [CAVERN_LAYER_PASSAGE_DENSITY_MAX:100]\n    [CAVERN_LAYER_WATER_MIN:0]\n    [CAVERN_LAYER_WATER_MAX:100]\n    [HAVE_BOTTOM_LAYER_1:1]\n    [HAVE_BOTTOM_LAYER_2:1]\n    [LEVELS_ABOVE_GROUND:15]\n    [LEVELS_ABOVE_LAYER_1:5]\n    [LEVELS_ABOVE_LAYER_2:1]\n    [LEVELS_ABOVE_LAYER_3:1]\n    [LEVELS_ABOVE_LAYER_4:1]\n    [LEVELS_ABOVE_LAYER_5:2]\n    [LEVELS_AT_BOTTOM:1]\n    [CAVE_MIN_SIZE:5]\n    [CAVE_MAX_SIZE:25]\n    [MOUNTAIN_CAVE_MIN:0]\n    [NON_MOUNTAIN_CAVE_MIN:0]\n    [ALL_CAVES_VISIBLE:0]\n    [SHOW_EMBARK_TUNNEL:2]\n    [TOTAL_CIV_NUMBER:" + params.TOTAL_CIV_NUMBER + "]\n    [TOTAL_CIV_POPULATION:15000]\n    [SITE_CAP:" + params.SITE_CAP + "]\n    [PLAYABLE_CIVILIZATION_REQUIRED:1]\n    [ELEVATION_RANGES:0:0:0]\n    [RAIN_RANGES:0:0:0]\n    [DRAINAGE_RANGES:0:0:0]\n    [SAVAGERY_RANGES:0:0:0]\n    [VOLCANISM_RANGES:0:0:0]\n";
  };

  window.DFHMExport = {
    pixelDataToMap: function(width, height, tag, pixelData) {
      var i, map, row, rowString, _i, _j, _ref, _ref1, _ref2;
      map = '';
      for (row = _i = 0, _ref = height - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; row = 0 <= _ref ? ++_i : --_i) {
        rowString = '    [' + tag;
        for (i = _j = _ref1 = row * width * 4, _ref2 = ((row + 1) * width * 4) - 1; _j <= _ref2; i = _j += 4) {
          rowString += ':' + pixelData[i];
        }
        rowString += ']\n';
        map += rowString;
      }
      return map;
    }
  };

}).call(this);
