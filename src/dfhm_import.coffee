# Code to aid in importing images and the like 

pixelToGreyscale = (r, g, b) ->
    (r * 0.299) + (g * 0.587) + (b * 0.114)


window.DFHMImport =
    toHeightValue: (image, width, height, type, ratioOverride = false, offsetOverride = false) ->

        canvas = $('<canvas/>')[0]
        canvas.width = width
        canvas.height = height
        ctx = canvas.getContext '2d'
        ctx.clearRect 0, 0, width, height
        ctx.drawImage image, 0, 0, width, height
        imageData = ctx.getImageData 0, 0, width, height
        length = imageData.data.length

        # Pick out the conversion ratio
        ratio = window.ratios[type]
        if (ratioOverride != false)
            overrideValue = parseInt(ratioOverride, 10)
            if overrideValue != NaN
                ratio += overrideValue

        # Pick out the offset
        offset = window.offsets[type]
        if (offsetOverride != false)
            overrideValue = parseInt(offsetOverride, 10)
            if overrideValue != NaN
                offset += overrideValue

        for i in [0...length] by 4
            ((pixelToGreyscale imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]) * ratio) + offset
