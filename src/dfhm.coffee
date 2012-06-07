# Assign the jQuery variable
$ = jQuery
canvas = null

pixelToGreyscale = (r, g, b) ->
    (r * 0.299) + (g * 0.587) + (b * 0.114)

toGreyscale = (ctx) ->
    imageData = ctx.getImageData(0, 0, 300, 300)
    length = imageData.data.length

    for i in [0..length] by 4
        do (i) ->
            brightness = pixelToGreyscale imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]
            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = brightness
            imageData.data[i + 3] = 255

    ctx.putImageData imageData, 0, 0

onImageLoaded = (event) ->
    dummyImage = new Image()
    dummyImage.onload = ->
        ctx = canvas.getContext '2d'
        ctx.clearRect 0, 0, 300, 300
        ctx.drawImage dummyImage, 0, 0, 300, 300
        toGreyscale ctx

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
    else
        alert "noes"

$(document).ready init
