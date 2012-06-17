# Assign the jQuery variable

# TODO: Orthographic precipitation trigger

$ = jQuery
#canvas = null

worldState =
    elevation: false
    temperature: false
    rainfall: false
    drainage: false
    savagery: false


onImageLoaded = (event) ->
    dummyImage = new Image()
    dummyImage.onload = ->
        ctx = canvas.getContext '2d'
        ctx.clearRect 0, 0, 17, 17
        ctx.drawImage dummyImage, 0, 0, 17, 17
        toGreyscale ctx
        $('#output-text').text(boilerplate(17, 17, boilerplateTiny) + pixelDataToMap(17, 17, 'PS_EL', ctx.getImageData(0,0,17,17).data))

    dummyImage.src = event.target.result

onFileSelected = (event) ->
    if event.target.files[0]
        file = event.target.files[0]
        if file.type.match "image.*"
            reader = new FileReader()
            reader.onload = onImageLoaded
            reader.readAsDataURL file
        else
            alert "Not an image"

#Set the active field
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
    worldState.elevation = worldState.temperature = worldState.rainfall = worldstate.drainage = worldstate.savagery = false

# The user has changed the dimensions of the image, and we're going to need to update things
onDimensionChange = (event) ->
    event.preventDefault
    value = $(event.target)
    btnGroup = value.parents('.btn-group')
    btnGroup.find('.master-label').text(value.text())
    clearWorldState

# Set up the state of the entire app
init = ->
    if window.File and window.FileReader
        #Set up the listeners for the different groups
        #$('#test-loader').change onFileSelected
        #canvas = $('#output')[0]
        $('#dropdown-height, #dropdown-width').children('.dropdown-menu').find('a').click onDimensionChange

        $('a', '#heightmaps').click (event) ->
            event.preventDefault
            setActiveField $(event.target).parent('li')
        
    else
        alert "noes"

$(document).ready init
