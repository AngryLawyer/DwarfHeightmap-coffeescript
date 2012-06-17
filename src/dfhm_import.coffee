# Code to aid in importing images and the like 

pixelToGreyscale = (r, g, b) ->
    (r * 0.299) + (g * 0.587) + (b * 0.114)

window.DFHMImport = 
    toGreyscale: (ctx) ->
        imageData = ctx.getImageData(0, 0, 17, 17)
        length = imageData.data.length

        for i in [0..length] by 4
            do (i) ->
                brightness = pixelToGreyscale imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]
                imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = brightness
                imageData.data[i + 3] = 255

        ctx.putImageData imageData, 0, 0
