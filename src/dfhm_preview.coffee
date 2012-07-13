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

processOverlayPixel = (overlay, height) ->
    {r: height, g: height - overlay, b: height - overlay}

doRender = (width, height, srcLength, processor) ->
    #silly typeerrors from using strings, so make sure they're ints
    width = parseInt width
    height = parseInt height

    canvas = $('<canvas/>')[0]
    canvas.width = width
    canvas.height = height
    ctx = canvas.getContext '2d'
    ctx.clearRect 0, 0, width, height
    imageData = ctx.getImageData 0, 0, width, height
    
    for i in [0...srcLength]
        processor(imageData, i)

    ctx.putImageData imageData, 0, 0

    targetCanvas = $('#preview')[0]
    targetWidth = targetCanvas.width
    targetHeight = targetCanvas.height

    #Work out where to stick the output
    ctx = targetCanvas.getContext '2d'

    ctx.clearRect 0, 0, targetWidth, targetHeight

    console.log "#{width}, #{height} vs #{targetWidth}, #{targetHeight}"

    if width != height
        if width > height
            ctx.drawImage canvas, 0, 0, width, height, 0, (targetHeight / 2) - (((targetWidth / width) * height) / 2), targetWidth, (targetWidth / width) * height
        else if height > width
            ctx.drawImage canvas, 0, 0, width, height, (targetWidth / 2) - (((targetHeight / height) * width) / 2), 0, (targetHeight / height) * width, targetHeight
    else
        ctx.drawImage canvas, 0, 0, width, height, 0, 0, targetWidth, targetHeight
    

window.DFHMPreview = #TODO: Short-circuit when empty
    renderElevation: (data, width, height) ->

        processor = (imageData, i) ->
            target = i * 4
            {r: r, g: g, b: b} = processElevationPixel(data[i])
            imageData.data[target] = r
            imageData.data[target+1] = g
            imageData.data[target+2] = b
            imageData.data[target+3] = 255

        doRender(width, height, data.length, processor)

    renderOther: (data, elevation, width, height) ->

        processor = (imageData, i) ->
            target = i * 4
            {r: r, g: g, b: b} = processOverlayPixel(data[i], elevation[i])
            imageData.data[target] = r
            imageData.data[target+1] = g
            imageData.data[target+2] = b
            imageData.data[target+3] = 255

        doRender(width, height, data.length, processor)

    clear: () ->
        targetCanvas = $('#preview')[0]
        targetWidth = targetCanvas.width
        targetHeight = targetCanvas.height
        ctx = targetCanvas.getContext '2d'
        ctx.clearRect 0, 0, targetWidth, targetHeight
