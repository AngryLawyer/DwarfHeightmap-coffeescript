// Generated by CoffeeScript 1.3.3
(function() {
  var $, clearWorldState, getActiveField, getDimensions, getFieldRenderer, init, markFieldAsPopulated, onDimensionChange, onFileSelected, onImageLoaded, setActiveField, worldState;

  $ = jQuery;

  worldState = {
    elevation: false,
    temperature: false,
    rainfall: false,
    drainage: false,
    savagery: false
  };

  onImageLoaded = function(event, stateField) {
    var dummyImage, height, width, _ref;
    _ref = getDimensions(), width = _ref.width, height = _ref.height;
    dummyImage = new Image();
    dummyImage.onload = function() {
      worldState[stateField] = DFHMImport.toGreyscale(dummyImage, width, height);
      return markFieldAsPopulated(stateField);
    };
    return dummyImage.src = event.target.result;
  };

  onFileSelected = function(event) {
    var activeField, file, reader;
    if (event.target.files[0]) {
      file = event.target.files[0];
      if (file.type.match("image.*")) {
        reader = new FileReader();
        activeField = getActiveField();
        reader.onload = function(event) {
          return onImageLoaded(event, activeField);
        };
        return reader.readAsDataURL(file);
      } else {
        return alert("Not an image");
      }
    }
  };

  markFieldAsPopulated = function(field) {
    return getFieldRenderer(field).children('a').text(field + ' :)');
  };

  getFieldRenderer = function(field) {
    return $('li', '#heightmaps').filter(function(index) {
      return $(this).data('type') === field;
    });
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
      $('#image-loader').change(onFileSelected);
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
