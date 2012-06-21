# Code to aid in the exporting of DFHM stuff
templates =
    boilerplateLarge:
        BEAST_END_YEAR: "300:80"
        MEGABEAST_CAP: 75
        SEMIMEGABEAST_CAP: 150
        TITAN_NUMBER: 33
        DEMON_NUMBER: 52
        NIGHT_TROLL_NUMBER: 26
        BOGEYMAN_NUMBER: 26
        VAMPIRE_NUMBER: 26
        WEREBEAST_NUMBER: 26
        SECRET_NUMBER: 52
        REGIONAL_INTERACTION_NUMBER: 52
        DISTURBANCE_INTERACTION_NUMBER: 52
        EVIL_CLOUD_NUMBER: 26
        EVIL_RAIN_NUMBER: 26
        GOOD_SQ_COUNTS: "24:244:0"
        EVIL_SQ_COUNTS: "24:244:0"
        SUBREGION_MAX: 3500
        TOTAL_CIV_NUMBER: 40
        SITE_CAP: 1500
    boilerplateMedium:
        BEAST_END_YEAR: '200:80'
        MEGABEAST_CAP: 18
        SEMIMEGABEAST_CAP: 37
        TITAN_NUMBER: 9
        DEMON_NUMBER: 28
        NIGHT_TROLL_NUMBER: 14
        BOGEYMAN_NUMBER: 14
        VAMPIRE_NUMBER: 14
        WEREBEAST_NUMBER: 14
        SECRET_NUMBER: 28
        REGIONAL_INTERACTION_NUMBER: 28
        DISTURBANCE_INTERACTION_NUMBER: 28
        EVIL_CLOUD_NUMBER: 14
        EVIL_RAIN_NUMBER: 14
        GOOD_SQ_COUNTS: '25:251:0'
        EVIL_SQ_COUNTS: '25:251:0'
        SUBREGION_MAX: 2750
        TOTAL_CIV_NUMBER: 40
        SITE_CAP: 1040
    boilerplateSmall:
        BEAST_END_YEAR: '100:80'
        MEGABEAST_CAP: 4
        SEMIMEGABEAST_CAP: 37
        TITAN_NUMBER: 9
        DEMON_NUMBER: 22
        NIGHT_TROLL_NUMBER: 11
        BOGEYMAN_NUMBER: 11
        VAMPIRE_NUMBER: 11
        WEREBEAST_NUMBER: 11
        SECRET_NUMBER: 22
        REGIONAL_INTERACTION_NUMBER: 22
        DISTURBANCE_INTERACTION_NUMBER: 22
        EVIL_CLOUD_NUMBER: 11
        EVIL_RAIN_NUMBER: 11
        GOOD_SQ_COUNTS: '6:63:127'
        EVIL_SQ_COUNTS: '6:63:127'
        SUBREGION_MAX: 2750
        TOTAL_CIV_NUMBER: 10
        SITE_CAP: 264
    boilerplateSmaller:
        BEAST_END_YEAR: '50:80'
        MEGABEAST_CAP: 1
        SEMIMEGABEAST_CAP: 2
        TITAN_NUMBER: 9
        DEMON_NUMBER: 20
        NIGHT_TROLL_NUMBER: 10
        BOGEYMAN_NUMBER: 10
        VAMPIRE_NUMBER: 10
        WEREBEAST_NUMBER: 10
        SECRET_NUMBER: 20
        REGIONAL_INTERACTION_NUMBER: 20
        DISTURBANCE_INTERACTION_NUMBER: 20
        EVIL_CLOUD_NUMBER: 10
        EVIL_RAIN_NUMBER: 10
        GOOD_SQ_COUNTS: '1:16:0'
        EVIL_SQ_COUNTS: '1:16:0'
        SUBREGION_MAX: 2750
        TOTAL_CIV_NUMBER: 5
        SITE_CAP: 68
    boilerplateTiny:
        BEAST_END_YEAR: '30:80'
        MEGABEAST_CAP: 1
        SEMIMEGABEAST_CAP: 2
        TITAN_NUMBER: 9
        DEMON_NUMBER: 20
        NIGHT_TROLL_NUMBER: 10
        BOGEYMAN_NUMBER: 10
        VAMPIRE_NUMBER: 10
        WEREBEAST_NUMBER: 10
        SECRET_NUMBER: 20
        REGIONAL_INTERACTION_NUMBER: 20
        DISTURBANCE_INTERACTION_NUMBER: 20
        EVIL_CLOUD_NUMBER: 10
        EVIL_RAIN_NUMBER: 10
        GOOD_SQ_COUNTS: '1:0:0'
        EVIL_SQ_COUNTS: '1:0:0'
        SUBREGION_MAX: 2750
        TOTAL_CIV_NUMBER: 5
        SITE_CAP: 18
    boilerplate: (width, height, params) ->
        """
        [WORLD_GEN]
            [TITLE:DFHM]
            [DIM:#{width}:#{height}]
            [EMBARK_POINTS:1324]
            [END_YEAR:1050]
            [BEAST_END_YEAR:#{params.BEAST_END_YEAR}]
            [REVEAL_ALL_HISTORY:1]
            [CULL_HISTORICAL_FIGURES:0]
            [ELEVATION:0:0:0:0]
            [RAINFALL:0:0:0:0]
            [TEMPERATURE:0:0:0:0]
            [DRAINAGE:0:0:0:0]
            [VOLCANISM:0:0:0:0]
            [SAVAGERY:0:0:0:0]
            [ELEVATION_FREQUENCY:1:1:1:1:1:1]
            [RAIN_FREQUENCY:1:1:1:1:1:1]
            [DRAINAGE_FREQUENCY:1:1:1:1:1:1]
            [TEMPERATURE_FREQUENCY:1:1:1:1:1:1]
            [SAVAGERY_FREQUENCY:1:1:1:1:1:1]
            [VOLCANISM_FREQUENCY:1:1:1:1:1:1]
            [MINERAL_SCARCITY:2500]
            [MEGABEAST_CAP:#{params.MEGABEAST_CAP}]
            [SEMIMEGABEAST_CAP:#{params.SEMIMEGABEAST_CAP}]
            [TITAN_NUMBER:#{params.TITAN_NUMBER}]
            [TITAN_ATTACK_TRIGGER:80:0:100000]
            [DEMON_NUMBER:#{params.DEMON_NUMBER}]
            [NIGHT_TROLL_NUMBER:#{params.NIGHT_TROLL_NUMBER}]
            [BOGEYMAN_NUMBER:#{params.BOGEYMAN_NUMBER}]
            [VAMPIRE_NUMBER:#{params.VAMPIRE_NUMBER}]
            [WEREBEAST_NUMBER:#{params.WEREBEAST_NUMBER}]
            [SECRET_NUMBER:#{params.SECRET_NUMBER}]
            [REGIONAL_INTERACTION_NUMBER:#{params.REGIONAL_INTERACTION_NUMBER}]
            [DISTURBANCE_INTERACTION_NUMBER:#{params.DISTURBANCE_INTERACTION_NUMBER}]
            [EVIL_CLOUD_NUMBER:#{params.EVIL_CLOUD_NUMBER}]
            [EVIL_RAIN_NUMBER:#{params.EVIL_RAIN_NUMBER}]
            [GOOD_SQ_COUNTS:#{params.GOOD_SQ_COUNTS}]
            [EVIL_SQ_COUNTS:#{params.EVIL_SQ_COUNTS}]
            [PEAK_NUMBER_MIN:0]
            [PARTIAL_OCEAN_EDGE_MIN:0]
            [COMPLETE_OCEAN_EDGE_MIN:0]
            [VOLCANO_MIN:0]
            [REGION_COUNTS:SWAMP:0:0:0]
            [REGION_COUNTS:DESERT:0:0:0]
            [REGION_COUNTS:FOREST:0:0:0]
            [REGION_COUNTS:MOUNTAINS:0:0:0]
            [REGION_COUNTS:OCEAN:0:0:0]
            [REGION_COUNTS:GLACIER:0:0:0]
            [REGION_COUNTS:TUNDRA:0:0:0]
            [REGION_COUnTS:GRASSLAND:0:0:0]
            [REGION_COUNTS:HILLS:0:0:0]
            [EROSION_CYCLE_COUNT:250]
            [RIVER_MINS:0:0]
            [PERIODICALLY_ERODE_EXTREMES:1]
            [OROGRAPHIC_PRECIPITATION:0]
            [SUBREGION_MAX:#{params.SUBREGION_MAX}]
            [CAVERN_LAYER_COUNT:3]
            [CAVERN_LAYER_OPENNESS_MIN:0]
            [CAVERN_LAYER_OPENNESS_MAX:100]
            [CAVERN_LAYER_PASSAGE_DENSITY_MIN:0]
            [CAVERN_LAYER_PASSAGE_DENSITY_MAX:100]
            [CAVERN_LAYER_WATER_MIN:0]
            [CAVERN_LAYER_WATER_MAX:100]
            [HAVE_BOTTOM_LAYER_1:1]
            [HAVE_BOTTOM_LAYER_2:1]
            [LEVELS_ABOVE_GROUND:15]
            [LEVELS_ABOVE_LAYER_1:5]
            [LEVELS_ABOVE_LAYER_2:1]
            [LEVELS_ABOVE_LAYER_3:1]
            [LEVELS_ABOVE_LAYER_4:1]
            [LEVELS_ABOVE_LAYER_5:2]
            [LEVELS_AT_BOTTOM:1]
            [CAVE_MIN_SIZE:5]
            [CAVE_MAX_SIZE:25]
            [MOUNTAIN_CAVE_MIN:0]
            [NON_MOUNTAIN_CAVE_MIN:0]
            [ALL_CAVES_VISIBLE:0]
            [SHOW_EMBARK_TUNNEL:2]
            [TOTAL_CIV_NUMBER:#{params.TOTAL_CIV_NUMBER}]
            [TOTAL_CIV_POPULATION:15000]
            [SITE_CAP:#{params.SITE_CAP}]
            [PLAYABLE_CIVILIZATION_REQUIRED:1]
            [ELEVATION_RANGES:0:0:0]
            [RAIN_RANGES:0:0:0]
            [DRAINAGE_RANGES:0:0:0]
            [SAVAGERY_RANGES:0:0:0]
            [VOLCANISM_RANGES:0:0:0]

    """

pixelDataToMap = (width, height, tag, pixelData) ->
    map = ''
    for row in [0..height-1]
        rowString = '    ['+tag
        for i in [row*width*4..((row+1)*width*4) - 1] by 4
            rowString += ':'+pixelData[i]
        rowString += ']\n'
        map += rowString
    map

window.DFHMExport =
    export: (width, height, template, params) ->
        exportData = templates.boilerplate width, height, templates[template]
        heightmaps = for field, imageData of params
            if imageData != false
                pixelDataToMap width, height, field, imageData.data
            else
                ''
        exportData + heightmaps.join('')
