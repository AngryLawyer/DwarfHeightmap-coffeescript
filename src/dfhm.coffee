# Assign the jQuery variable

# TODO: Orthographic precipitation trigger
# TODO: Offset for each heightmap
# TODO: 'Step' for each colour level (contrast)?

$ = jQuery
#canvas = null

worldState =
    elevation: false
    temperature: false
    rainfall: false
    drainage: false
    savagery: false

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
        worldState[stateField] = DFHMImport.toGreyscale dummyImage, width, height
        markFieldAsPopulated stateField
        #$('#output-text').text(boilerplate(17, 17, boilerplateTiny) + pixelDataToMap(17, 17, 'PS_EL', ctx.getImageData(0,0,17,17).data))

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
            # TODO: Provide a pretty alert 
            alert "Not an image"

# Update the view to show that a field is full
markFieldAsPopulated = (field) ->
    getFieldRenderer(field).children('a').html(upcase(field) + ' &#10003;')

getFieldRenderer = (field) ->
    $('li', '#heightmaps').filter((index) ->
        $(this).data('type') == field
    )

# Set the active field
setActiveField = (field) ->
    $(field).addClass('active').siblings().removeClass('active')

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
    worldState.elevation = worldState.temperature = worldState.rainfall = worldState.drainage = worldState.savagery = false
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
            
        
    else
        # TODO - provide sensible errors
        alert "noes"

$(document).ready init
