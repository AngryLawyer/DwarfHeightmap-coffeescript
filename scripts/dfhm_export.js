// Generated by CoffeeScript 1.3.3
(function() {
  var lookupFieldPrefix, pixelDataToMap, templates;

  templates = {
    boilerplateLarge: {
      BEAST_END_YEAR: '300:80',
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
      GOOD_SQ_COUNTS: '24:244:0',
      EVIL_SQ_COUNTS: '24:244:0',
      SUBREGION_MAX: 3500,
      TOTAL_CIV_NUMBER: 40,
      SITE_CAP: 1500,
      ELEVATION: '1:400:800:800',
      RAINFALL: '0:100:400:400',
      TEMPERATURE: '25:75:400:400',
      DRAINAGE: '0:100:400:400',
      VOLCANISM: '0:100:400:400',
      SAVAGERY: '0:100:400:400',
      REGION_COUNTS_SWAMP: '1032:7:6',
      REGION_COUNTS_DESERT: '1032:7:6',
      REGION_COUNTS_FOREST: '4128:13:12',
      REGION_COUNTS_MOUNTAINS: '8256:9:9',
      REGION_COUNTS_OCEAN: '8256:7:6',
      REGION_COUNTS_GLACIER: '0:0:0',
      REGION_COUNTS_TUNDRA: '0:0:0',
      REGION_COUNTS_GRASSLAND: '8256:13:12',
      REGION_COUNTS_HILLS: '8256:13:12',
      ELEVATION_RANGES: '8256:16512:8256',
      RAIN_RANGES: '8256:16512:8256',
      DRAINAGE_RANGES: '8256:16512:8256',
      SAVAGERY_RANGES: '8256:16512:8256',
      VOLCANISM_RANGES: '8256:16512:8256'
    },
    boilerplateMedium: {
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
      SITE_CAP: 1040,
      ELEVATION: '1:400:401:401',
      RAINFALL: '0:100:200:200',
      TEMPERATURE: '25:75:200:200',
      DRAINAGE: '0:100:200:200',
      VOLCANISM: '0:100:200:200',
      SAVAGERY: '0:100:200:200',
      REGION_COUNTS_SWAMP: '260:1:1',
      REGION_COUNTS_DESERT: '260:1:1',
      REGION_COUNTS_FOREST: '1040:3:3',
      REGION_COUNTS_MOUNTAINS: '2080:2:2',
      REGION_COUNTS_OCEAN: '2080:1:1',
      REGION_COUNTS_GLACIER: '0:0:0',
      REGION_COUNTS_TUNDRA: '0:0:0',
      REGION_COUNTS_GRASSLAND: '2080:3:3',
      REGION_COUNTS_HILLS: '2080:3:3',
      ELEVATION_RANGES: '2080:4160:2080',
      RAIN_RANGES: '2080:4160:2080',
      DRAINAGE_RANGES: '2080:4160:2080',
      SAVAGERY_RANGES: '2080:4160:2080',
      VOLCANISM_RANGES: '2080:4160:2080'
    },
    boilerplateSmall: {
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
      SITE_CAP: 264,
      ELEVATION: '1:400:202:202',
      RAINFALL: '0:100:101:101',
      TEMPERATURE: '25:75:101:101',
      DRAINAGE: '0:100:101:101',
      VOLCANISM: '0:100:101:101',
      SAVAGERY: '0:100:101:101',
      REGION_COUNTS_SWAMP: '66:0:0',
      REGION_COUNTS_DESERT: '66:0:0',
      REGION_COUNTS_FOREST: '264:0:0',
      REGION_COUNTS_MOUNTAINS: '528:0:0',
      REGION_COUNTS_OCEAN: '528:0:0',
      REGION_COUNTS_GLACIER: '0:0:0',
      REGION_COUNTS_TUNDRA: '0:0:0',
      REGION_COUNTS_GRASSLAND: '528:0:0',
      REGION_COUNTS_HILLS: '528:0:0',
      ELEVATION_RANGES: '528:1056:528',
      RAIN_RANGES: '264:528:264',
      DRAINAGE_RANGES: '264:528:264',
      SAVAGERY_RANGES: '264:528:264',
      VOLCANISM_RANGES: '264:528:264'
    },
    boilerplateSmaller: {
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
      SITE_CAP: 68,
      ELEVATION: '1:400:102:102',
      RAINFALL: '0:100:51:51',
      TEMPERATURE: '25:75:51:51',
      DRAINAGE: '0:100:51:51',
      VOLCANISM: '0:100:51:51',
      SAVAGERY: '0:100:51:51',
      REGION_COUNTS_SWAMP: '0:0:0',
      REGION_COUNTS_DESERT: '0:0:0',
      REGION_COUNTS_FOREST: '0:0:0',
      REGION_COUNTS_MOUNTAINS: '0:0:0',
      REGION_COUNTS_OCEAN: '0:0:0',
      REGION_COUNTS_GLACIER: '0:0:0',
      REGION_COUNTS_TUNDRA: '0:0:0',
      REGION_COUNTS_GRASSLAND: '0:0:0',
      REGION_COUNTS_HILLS: '0:0:0',
      ELEVATION_RANGES: '136:272:136',
      RAIN_RANGES: '0:0:0',
      DRAINAGE_RANGES: '0:0:0',
      SAVAGERY_RANGES: '0:0:0',
      VOLCANISM_RANGES: '0:0:0'
    },
    boilerplateTiny: {
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
      SITE_CAP: 18,
      ELEVATION: '1:400:52:52',
      RAINFALL: '0:100:26:26',
      TEMPERATURE: '25:75:26:26',
      DRAINAGE: '0:100:26:26',
      VOLCANISM: '0:100:26:26',
      SAVAGERY: '0:100:26:26',
      REGION_COUNTS_SWAMP: '0:0:0',
      REGION_COUNTS_DESERT: '0:0:0',
      REGION_COUNTS_FOREST: '0:0:0',
      REGION_COUNTS_MOUNTAINS: '0:0:0',
      REGION_COUNTS_OCEAN: '0:0:0',
      REGION_COUNTS_GLACIER: '0:0:0',
      REGION_COUNTS_TUNDRA: '0:0:0',
      REGION_COUNTS_GRASSLAND: '0:0:0',
      REGION_COUNTS_HILLS: '0:0:0',
      ELEVATION_RANGES: '36:72:36',
      RAIN_RANGES: '0:0:0',
      DRAINAGE_RANGES: '0:0:0',
      SAVAGERY_RANGES: '0:0:0',
      VOLCANISM_RANGES: '0:0:0'
    },
    boilerplate: function(width, height, params) {
      return "[WORLD_GEN]\n    [TITLE:DFHM]\n    [DIM:" + width + ":" + height + "]\n    [EMBARK_POINTS:1324]\n    [END_YEAR:1050]\n    [BEAST_END_YEAR:" + params.BEAST_END_YEAR + "]\n    [REVEAL_ALL_HISTORY:1]\n    [CULL_HISTORICAL_FIGURES:0]\n    [ELEVATION:" + params.ELEVATION + "]\n    [RAINFALL:" + params.RAINFALL + "]\n    [TEMPERATURE:" + params.TEMPERATURE + "]\n    [DRAINAGE:" + params.DRAINAGE + "]\n    [VOLCANISM:" + params.VOLCANISM + "]\n    [SAVAGERY:" + params.SAVAGERY + "]\n    [ELEVATION_FREQUENCY:1:1:1:1:1:1]\n    [RAIN_FREQUENCY:1:1:1:1:1:1]\n    [DRAINAGE_FREQUENCY:1:1:1:1:1:1]\n    [TEMPERATURE_FREQUENCY:1:1:1:1:1:1]\n    [SAVAGERY_FREQUENCY:1:1:1:1:1:1]\n    [VOLCANISM_FREQUENCY:1:1:1:1:1:1]\n    [MINERAL_SCARCITY:2500]\n    [MEGABEAST_CAP:" + params.MEGABEAST_CAP + "]\n    [SEMIMEGABEAST_CAP:" + params.SEMIMEGABEAST_CAP + "]\n    [TITAN_NUMBER:" + params.TITAN_NUMBER + "]\n    [TITAN_ATTACK_TRIGGER:80:0:100000]\n    [DEMON_NUMBER:" + params.DEMON_NUMBER + "]\n    [NIGHT_TROLL_NUMBER:" + params.NIGHT_TROLL_NUMBER + "]\n    [BOGEYMAN_NUMBER:" + params.BOGEYMAN_NUMBER + "]\n    [VAMPIRE_NUMBER:" + params.VAMPIRE_NUMBER + "]\n    [WEREBEAST_NUMBER:" + params.WEREBEAST_NUMBER + "]\n    [SECRET_NUMBER:" + params.SECRET_NUMBER + "]\n    [REGIONAL_INTERACTION_NUMBER:" + params.REGIONAL_INTERACTION_NUMBER + "]\n    [DISTURBANCE_INTERACTION_NUMBER:" + params.DISTURBANCE_INTERACTION_NUMBER + "]\n    [EVIL_CLOUD_NUMBER:" + params.EVIL_CLOUD_NUMBER + "]\n    [EVIL_RAIN_NUMBER:" + params.EVIL_RAIN_NUMBER + "]\n    [GOOD_SQ_COUNTS:" + params.GOOD_SQ_COUNTS + "]\n    [EVIL_SQ_COUNTS:" + params.EVIL_SQ_COUNTS + "]\n    [PEAK_NUMBER_MIN:0]\n    [PARTIAL_OCEAN_EDGE_MIN:0]\n    [COMPLETE_OCEAN_EDGE_MIN:0]\n    [VOLCANO_MIN:0]\n    [REGION_COUNTS:SWAMP:" + params.REGION_COUNTS_SWAMP + "]\n    [REGION_COUNTS:DESERT:" + params.REGION_COUNTS_DESERT + "]\n    [REGION_COUNTS:FOREST:" + params.REGION_COUNTS_FOREST + "]\n    [REGION_COUNTS:MOUNTAINS:" + params.REGION_COUNTS_MOUNTAINS + "]\n    [REGION_COUNTS:OCEAN:" + params.REGION_COUNTS_OCEAN + "]\n    [REGION_COUNTS:GLACIER:" + params.REGION_COUNTS_GLACIER + "]\n    [REGION_COUNTS:TUNDRA:" + params.REGION_COUNTS_TUNDRA + "]\n    [REGION_COUNTS:GRASSLAND:" + params.REGION_COUNTS_GRASSLAND + "]\n    [REGION_COUNTS:HILLS:" + params.REGION_COUNTS_HILLS + "]\n    [EROSION_CYCLE_COUNT:250]\n    [RIVER_MINS:0:0]\n    [PERIODICALLY_ERODE_EXTREMES:1]\n    [OROGRAPHIC_PRECIPITATION:1]\n    [SUBREGION_MAX:" + params.SUBREGION_MAX + "]\n    [CAVERN_LAYER_COUNT:3]\n    [CAVERN_LAYER_OPENNESS_MIN:0]\n    [CAVERN_LAYER_OPENNESS_MAX:100]\n    [CAVERN_LAYER_PASSAGE_DENSITY_MIN:0]\n    [CAVERN_LAYER_PASSAGE_DENSITY_MAX:100]\n    [CAVERN_LAYER_WATER_MIN:0]\n    [CAVERN_LAYER_WATER_MAX:100]\n    [HAVE_BOTTOM_LAYER_1:1]\n    [HAVE_BOTTOM_LAYER_2:1]\n    [LEVELS_ABOVE_GROUND:15]\n    [LEVELS_ABOVE_LAYER_1:5]\n    [LEVELS_ABOVE_LAYER_2:1]\n    [LEVELS_ABOVE_LAYER_3:1]\n    [LEVELS_ABOVE_LAYER_4:1]\n    [LEVELS_ABOVE_LAYER_5:2]\n    [LEVELS_AT_BOTTOM:1]\n    [CAVE_MIN_SIZE:5]\n    [CAVE_MAX_SIZE:25]\n    [MOUNTAIN_CAVE_MIN:0]\n    [NON_MOUNTAIN_CAVE_MIN:0]\n    [ALL_CAVES_VISIBLE:0]\n    [SHOW_EMBARK_TUNNEL:2]\n    [TOTAL_CIV_NUMBER:" + params.TOTAL_CIV_NUMBER + "]\n    [TOTAL_CIV_POPULATION:15000]\n    [SITE_CAP:" + params.SITE_CAP + "]\n    [PLAYABLE_CIVILIZATION_REQUIRED:1]\n    [ELEVATION_RANGES:" + params.ELEVATION_RANGES + "]\n    [RAIN_RANGES:" + params.RAIN_RANGES + "]\n    [DRAINAGE_RANGES:" + params.DRAINAGE_RANGES + "]\n    [SAVAGERY_RANGES:" + params.SAVAGERY_RANGES + "]\n    [VOLCANISM_RANGES:" + params.VOLCANISM_RANGES + "]\n";
    }
  };

  pixelDataToMap = function(width, height, tag, heightData) {
    var column, map, row, rowString, _i, _j;
    map = '';
    for (row = _i = 0; 0 <= height ? _i < height : _i > height; row = 0 <= height ? ++_i : --_i) {
      rowString = '    [' + tag;
      for (column = _j = 0; 0 <= width ? _j < width : _j > width; column = 0 <= width ? ++_j : --_j) {
        rowString += ':' + Math.round(heightData[(row * height) + column]);
      }
      rowString += ']\n';
      map += rowString;
    }
    return map;
  };

  lookupFieldPrefix = function(field) {
    switch (field) {
      case 'elevation':
        return 'PS_EL';
      case 'rainfall':
        return 'PS_RF';
      case 'temperature':
        return 'PS_TP';
      case 'drainage':
        return 'PS_DR';
      case 'savagery':
        return 'PS_SV';
      case 'volcanicity':
        return 'PS_VL';
    }
  };

  window.DFHMExport = {
    "export": function(width, height, template, params) {
      var exportData, field, heightmaps, imageData;
      exportData = templates.boilerplate(width, height, templates[template]);
      heightmaps = (function() {
        var _results;
        _results = [];
        for (field in params) {
          imageData = params[field];
          if (imageData.data !== false) {
            _results.push(pixelDataToMap(width, height, lookupFieldPrefix(field), imageData.data));
          } else {
            _results.push('');
          }
        }
        return _results;
      })();
      return exportData + heightmaps.join('');
    }
  };

}).call(this);
