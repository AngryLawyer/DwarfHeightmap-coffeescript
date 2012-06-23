#Code to aid in the rendering of the preview pane

processElevationPixel = (brightness) ->
    if brightness < 100
        #Below sea level
        {r: 0, g: 0, b: brightness}
    else if brightness < 300
        #Grasslands
        {r: 0, g: brightness, b: 0}
    else if brightness <= 255 / ratios.elevation
        #Mountains
        {r: brightness, g: brightness, b: brightness}
    else
        #Peak
        {r: 255, g: 255, b: 255}

window.DFHMPreview =
    renderElevation: (data, width, height) ->
        canvas = $('<canvas/>')[0]
        canvas.width = width
        canvas.height = height
        ctx = canvas.getContext '2d'
        ctx.clearRect 0, 0, width, height
        #ctx.drawImage image, 0, 0, width, height
        imageData = ctx.getImageData 0, 0, width, height
        srcLength = data.length
        length = imageData.data.length
        
        for i in [0...srcLength]
            target = i * 4
            {r: r, g: g, b: b} = processElevationPixel(data[i])
            imageData.data[target] = r
            imageData.data[target+1] = g
            imageData.data[target+2] = b
            imageData.data[target+3] = 255

        ctx.putImageData imageData, 0, 0

        targetCanvas = $('#preview')[0]
        targetWidth = targetCanvas.width
        targetHeight = targetCanvas.height
        ctx = targetCanvas.getContext '2d'
        ctx.clearRect 0, 0, targetWidth, targetHeight
        ctx.drawImage canvas, 0, 0, targetWidth, targetHeight
        #Do something!
    renderOther: (data, elevation) ->
        #Do something!
