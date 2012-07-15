# TODO: Orthographic precipitation trigger
# TODO: Offset for each heightmap
# TODO: 'Step' for each colour level (contrast)?

$ = jQuery
#canvas = null

window.ratios =
    elevation: 1.56863
    temperature: 0.19608
    rainfall: 0.39215
    drainage: 0.39215
    savagery: 0.39215
    volcanicity: 0.39215

window.offsets =
    elevation: 0
    temperature: 25
    rainfall: 0
    drainage: 0
    savagery: 0
    volcanicity: 0

worldState =
    elevation:
        image: false
        data: false
        offset: false
        ratio: false
    temperature:
        image: false
        data: false
        offset: false
        ratio: false
    rainfall:
        image: false
        data: false
        offset: false
        ratio: false
    drainage:
        image: false
        data: false
        offset: false
        ratio: false
    savagery:
        image: false
        data: false
        offset: false
        ratio: false
    volcanicity:
        image: false
        data: false
        offset: false
        ratio: false

onClearClick = (event) ->
    event.preventDefault()
    clearWorldState()

onExportClick = (event) ->
    {width: width, height: height} = getDimensions()
    $('#output-text').text(DFHMExport.export width, height, determineSize(), worldState)
    
determineSize = () ->
    {width: width, height: height} = getDimensions()
    smallest = Math.min parseInt(width, 10), parseInt(height, 10)
    switch smallest
        when 17 then 'boilerplateTiny'
        when 33 then 'boilerplateSmaller'
        when 65 then 'boilerplateSmall'
        when 129 then 'boilerplateMedium'
        when 257 then 'boilerplateLarge'

# An image has been loaded
onImageLoaded = (event, stateField) ->
    {width: width, height:height} = getDimensions()
    dummyImage = new Image()
    dummyImage.onload = ->
        worldState[stateField].image = dummyImage
        worldState[stateField].data = DFHMImport.toHeightValue dummyImage, width, height, stateField, worldState[stateField].ratio, worldState[stateField].offset
        markFieldAsPopulated stateField
        render stateField

    dummyImage.src = event.target.result

# We've picked a file - load that badboy up
onFileSelected = (event) ->
    if event.target.files[0]
        file = event.target.files[0]
        if file.type.match "image.*"
            reader = new FileReader()
            activeField = getActiveField()
            reader.onload = (event) ->
                onImageLoaded event, activeField

            reader.readAsDataURL file
        else
            alertBox "error", "This is not a recognised image", "- you might want to try opening it in a graphics editor to check it's okay."

# Update the view to show that a field is full
markFieldAsPopulated = (field) ->
    getFieldRenderer(field).children('a').html(upcase(field) + ' &#10003;')

getFieldRenderer = (field) ->
    $('li', '#heightmaps').filter((index) ->
        $(this).data('type') == field
    )

# Set the active field, as one has been clicked
setActiveField = (field) ->
    field = $(field)
    field.addClass('active').siblings().removeClass('active')
    {width: width, height:height} = getDimensions()
    setOverrides worldState[field.data('type')].ratio, worldState[field.data('type')].offset
    render field.data('type')

# Get the currently used type
getActiveField = ->
    $('#heightmaps').children('li.active').data('type')

# What size is the user's map?
getDimensions = ->
    dimensions =
        width: $('#dropdown-width').find('.master-label').text()
        height: $('#dropdown-height').find('.master-label').text()

# Dimensions have changed, so the current world state is unusable
clearWorldState = ->
    for elementName, elementVal of worldState
        for optionName, optionVal of elementVal
            worldState[elementName][optionName] = false

    $('#heightmaps').children('.hm-option').each (index, item) ->
        item = $(item)
        item.children('a').html(upcase(item.data('type')))

    DFHMPreview.clear()
    $('#output-text').val ''
    setOverrides false, false

# The user has changed the dimensions of the image, and we're going to need to update things
onDimensionChange = (event) ->
    event.preventDefault()
    value = $(event.target)
    btnGroup = value.parents('.btn-group')
    btnGroup.find('.master-label').text(value.text())
    regenerateAll()

onRatioChange = (event) ->
    event.preventDefault()
    worldState[getActiveField()].ratio = $(event.target).val()
    regenerateAll()

onOffsetChange = (event) ->
    event.preventDefault()
    worldState[getActiveField()].offset = $(event.target).val()
    regenerateAll()

# Dimensions or similar have changed, so regen all available
regenerateAll = () ->
    {width: width, height: height} = getDimensions()

    for stateField, element of worldState
        if element.image != false
            element.data = DFHMImport.toHeightValue element.image, width, height, stateField, element.ratio, element.offset

    render getActiveField()

# Handle rendering to our world
render = (activeField) ->
    {width: width, height: height} = getDimensions()

    if activeField == 'elevation'
        DFHMPreview.renderElevation worldState[activeField].data, width, height
    else
        DFHMPreview.renderOther worldState[activeField].data, worldState['elevation'].data, width, height

# Capitalise the first character of a string
upcase = (string) ->
    string.charAt(0).toUpperCase() + string.substr(1)

# Create an alert box on the page
alertBox = (type, highlight, text) ->
    $('#alerts').prepend "<div class=\"alert alert-#{type}\"><a class=\"close\" data-dismiss=\"alert\" href=\"#\">x</a><strong>#{highlight}</strong> #{text}</div>"

# Populate the text boxes
setOverrides = (ratio, offset) ->
    
    if offset != false
        $('#offset').val offset
    else
        $('#offset').val ''

    if ratio != false
        $('#ratio').val ratio
    else
        $('#ratio').val ''

# Set up the state of the entire app
init = ->
    if window.File and window.FileReader
        #Set up the listeners for the different groups
        $('#image-loader').change onFileSelected
        $('#offset').change onOffsetChange
        $('#ratio').change onRatioChange
        #canvas = $('#output')[0]
        $('#dropdown-height, #dropdown-width').children('.dropdown-menu').find('a').click onDimensionChange

        $('a', '#heightmaps').click (event) ->
            event.preventDefault()
            setActiveField $(event.target).parent('li')

        $('#clear').click onClearClick
        $('#export').click onExportClick
        $('#output-text').focus ->
            $(this).select()

        alertBox "info", "Hi there!", """To get generating heightmaps, pick a map size, select a field, and import some images! The preview box will update to show you
what the map will look like - feel free to change some of the advanced variables to get closer to what you want. When you're done, hit Export, and copy the wall of text into data/init/world_gen.txt"""
        clearWorldState()
    else
        alertBox "error", "Uh oh", "- your browser doesn't support features that this app requires! Please switch to somethign more modern and we can get on with it."

$(document).ready init
