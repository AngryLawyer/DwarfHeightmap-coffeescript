# Code to aid in importing images and the like 

pixelToGreyscale = (r, g, b) ->
    (r * 0.299) + (g * 0.587) + (b * 0.114)

ratios =
    elevation: 1.56863
    temperature: 0.19608
    rainfall: 0.39215
    drainage: 0.39215
    savagery: 0.39215
    volcanicity: 0.39215

offsets =
    elevation: 0
    temperature: 25
    rainfall: 0
    drainage: 0
    savagery: 0
    volcanicity: 0

window.DFHMImport =
    toHeightValue: (image, width, height, type) ->

        canvas = $('<canvas/>')[0]
        ctx = canvas.getContext '2d'
        ctx.clearRect 0, 0, width, height
        ctx.drawImage image, 0, 0, width, height
        imageData = ctx.getImageData 0, 0, width, height
        length = imageData.data.length

        # Pick out the conversion ratio
        ratio = ratios[type]
        # Pick out the offset
        offset = offsets[type]

        for i in [0..length] by 4
            ((pixelToGreyscale imageData.data[i], imageData.data[i + 1], imageData.data[i + 2]) * ratio) + offset
