// Generated by CoffeeScript 1.3.3
(function() {
  var offsets, pixelToGreyscale, ratios;

  pixelToGreyscale = function(r, g, b) {
    return (r * 0.299) + (g * 0.587) + (b * 0.114);
  };

  ratios = {
    elevation: 1.56863,
    temperature: 0.19608,
    rainfall: 0.39215,
    drainage: 0.39215,
    savagery: 0.39215,
    volcanicity: 0.39215
  };

  offsets = {
    elevation: 0,
    temperature: 25,
    rainfall: 0,
    drainage: 0,
    savagery: 0,
    volcanicity: 0
  };

  window.DFHMImport = {
    toHeightValue: function(image, width, height, type) {
      var canvas, ctx, i, imageData, length, offset, ratio, _i, _results;
      canvas = $('<canvas/>')[0];
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, width, height);
      ctx.drawImage(image, 0, 0, width, height);
      imageData = ctx.getImageData(0, 0, width, height);
      length = imageData.data.length;
      ratio = ratios[type];
      offset = offsets[type];
      _results = [];
      for (i = _i = 0; _i <= length; i = _i += 4) {
        _results.push(((pixelToGreyscale(imageData.data[i], imageData.data[i + 1], imageData.data[i + 2])) * ratio) + offset);
      }
      return _results;
    }
  };

}).call(this);
