# Assign the jQuery variable

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
    temperature:
        image: false
        data: false
    rainfall:
        image: false
        data: false
    drainage:
        image: false
        data: false
    savagery:
        image: false
        data: false
    volcanicity:
        image: false
        data: false

onClearClick = (event) ->
    event.preventDefault()
    clearWorldState()

onExportClick = (event) ->
    {width: width, height: height} = getDimensions()
    $('#output-text').text(DFHMExport.export width, height, determineSize(), worldState)
    
determineSize = () ->
    {width: width, height: height} = getDimensions()
    smallest = Math.min parseInt(width), parseInt(height)
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
        worldState[stateField].data = DFHMImport.toHeightValue dummyImage, width, height, stateField

        markFieldAsPopulated stateField
        if stateField == 'elevation'
            DFHMPreview.renderElevation worldState[stateField][data], width, height
        else
            DFHMPreview.renderOther worldState[stateField][data], worldState['elevation'][data], width, height

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

# Set the active field
setActiveField = (field) ->
    field = $(field)
    field.addClass('active').siblings().removeClass('active')
    {width: width, height:height} = getDimensions()
    if field.data('type') == 'elevation'
        DFHMPreview.renderElevation worldState['elevation'], width, height
    else
        DFHMPreview.renderOther worldState[field.data('type')], worldState['elevation'], width, height
    

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

    for element in worldState
        for option in element
            worldstate[element][option] = false

    $('#heightmaps').children('.hm-option').each (index, item) ->
        item = $(item)
        item.children('a').html(upcase(item.data('type')))

# The user has changed the dimensions of the image, and we're going to need to update things
onDimensionChange = (event) ->
    event.preventDefault()
    value = $(event.target)
    btnGroup = value.parents('.btn-group')
    btnGroup.find('.master-label').text(value.text())
    clearWorldState()

# Capitalise the first character of a string
upcase = (string) ->
    string.charAt(0).toUpperCase() + string.substr(1)

# Create an alert box on the page
alertBox = (type, highlight, text) ->
    $('#alerts').prepend "<div class=\"alert alert-#{type}\"><a class=\"close\" data-dismiss=\"alert\" href=\"#\">x</a><strong>#{highlight}</strong> #{text}</div>"

# Set up the state of the entire app
init = ->
    if window.File and window.FileReader
        #Set up the listeners for the different groups
        $('#image-loader').change onFileSelected
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
        
    else
        alertBox "error", "Uh oh", "- your browser doesn't support features that this app requires! Please switch to somethign more modern and we can get on with it."

$(document).ready init
