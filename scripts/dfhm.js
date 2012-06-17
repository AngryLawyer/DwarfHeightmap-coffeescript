// Generated by CoffeeScript 1.3.3
(function() {
  var $, clearWorldState, getActiveField, getDimensions, init, onDimensionChange, onFileSelected, onImageLoaded, setActiveField, worldState;

  $ = jQuery;

  worldState = {
    elevation: false,
    temperature: false,
    rainfall: false,
    drainage: false,
    savagery: false
  };

  onImageLoaded = function(event) {
    var dummyImage;
    dummyImage = new Image();
    dummyImage.onload = function() {
      var ctx;
      ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, 17, 17);
      ctx.drawImage(dummyImage, 0, 0, 17, 17);
      toGreyscale(ctx);
      return $('#output-text').text(boilerplate(17, 17, boilerplateTiny) + pixelDataToMap(17, 17, 'PS_EL', ctx.getImageData(0, 0, 17, 17).data));
    };
    return dummyImage.src = event.target.result;
  };

  onFileSelected = function(event) {
    var file, reader;
    if (event.target.files[0]) {
      file = event.target.files[0];
      if (file.type.match("image.*")) {
        reader = new FileReader();
        reader.onload = onImageLoaded;
        return reader.readAsDataURL(file);
      } else {
        return alert("Not an image");
      }
    }
  };

  setActiveField = function(field) {
    return $(field).addClass('active').siblings().removeClass('active');
  };

  getActiveField = function() {
    return $('#heightmaps').children('li.active').data('type');
  };

  getDimensions = function() {
    var dimensions;
    return dimensions = {
      width: $('#dropdown-width').find('.master-label').text(),
      height: $('#dropdown-height').find('.master-label').text()
    };
  };

  clearWorldState = function() {
    return worldState.elevation = worldState.temperature = worldState.rainfall = worldstate.drainage = worldstate.savagery = false;
  };

  onDimensionChange = function(event) {
    var btnGroup, value;
    event.preventDefault;
    value = $(event.target);
    btnGroup = value.parents('.btn-group');
    btnGroup.find('.master-label').text(value.text());
    return clearWorldState;
  };

  init = function() {
    if (window.File && window.FileReader) {
      $('#dropdown-height, #dropdown-width').children('.dropdown-menu').find('a').click(onDimensionChange);
      return $('a', '#heightmaps').click(function(event) {
        event.preventDefault;
        return setActiveField($(event.target).parent('li'));
      });
    } else {
      return alert("noes");
    }
  };

  $(document).ready(init);

}).call(this);
