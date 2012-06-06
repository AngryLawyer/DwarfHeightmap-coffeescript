# Assign the jQuery variable
$ = jQuery
canvas = null
ctx = null

onImageLoaded = (event) ->
    dummyImage = new Image()
    dummyImage.onload = ->
        ctx.clearRect(0, 0, 300, 300)
        ctx.drawImage(dummyImage, 0, 0, 300, 300)

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

init = ->
    if window.File and window.FileReader
        $('#test-loader').change onFileSelected
        canvas = $('#output')[0]
        ctx = canvas.getContext '2d'
    else
        alert "noes"

$(document).ready init
