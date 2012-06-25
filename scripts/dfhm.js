// Generated by CoffeeScript 1.3.3
(function() {
  var $, clearWorldState, determineSize, getActiveField, getDimensions, getFieldRenderer, init, markFieldAsPopulated, onClearClick, onDimensionChange, onExportClick, onFileSelected, onImageLoaded, setActiveField, upcase, worldState;

  $ = jQuery;

  window.ratios = {
    elevation: 1.56863,
    temperature: 0.19608,
    rainfall: 0.39215,
    drainage: 0.39215,
    savagery: 0.39215,
    volcanicity: 0.39215
  };

  window.offsets = {
    elevation: 0,
    temperature: 25,
    rainfall: 0,
    drainage: 0,
    savagery: 0,
    volcanicity: 0
  };

  worldState = {
    elevation: false,
    temperature: false,
    rainfall: false,
    drainage: false,
    savagery: false,
    volcanicity: false
  };

  onClearClick = function(event) {
    event.preventDefault();
    return clearWorldState();
  };

  onExportClick = function(event) {
    var height, width, _ref;
    _ref = getDimensions(), width = _ref.width, height = _ref.height;
    return $('#output-text').text(DFHMExport["export"](width, height, determineSize(), worldState));
  };

  determineSize = function() {
    var height, smallest, width, _ref;
    _ref = getDimensions(), width = _ref.width, height = _ref.height;
    smallest = Math.min(parseInt(width), parseInt(height));
    switch (smallest) {
      case 17:
        return 'boilerplateTiny';
      case 33:
        return 'boilerplateSmaller';
      case 65:
        return 'boilerplateSmall';
      case 129:
        return 'boilerplateMedium';
      case 257:
        return 'boilerplateLarge';
    }
  };

  onImageLoaded = function(event, stateField) {
    var dummyImage, height, width, _ref;
    _ref = getDimensions(), width = _ref.width, height = _ref.height;
    dummyImage = new Image();
    dummyImage.onload = function() {
      worldState[stateField] = DFHMImport.toHeightValue(dummyImage, width, height, stateField);
      markFieldAsPopulated(stateField);
      if (stateField === 'elevation') {
        return DFHMPreview.renderElevation(worldState[stateField], width, height);
      }
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
    return getFieldRenderer(field).children('a').html(upcase(field) + ' &#10003;');
  };

  getFieldRenderer = function(field) {
    return $('li', '#heightmaps').filter(function(index) {
      return $(this).data('type') === field;
    });
  };

  setActiveField = function(field) {
    var height, width, _ref;
    field = $(field);
    field.addClass('active').siblings().removeClass('active');
    _ref = getDimensions(), width = _ref.width, height = _ref.height;
    if (field.data('type') === 'elevation') {
      return DFHMPreview.renderElevation(worldState['elevation'], width, height);
    } else {
      return DFHMPreview.renderOther(worldState[field.data('type')], worldState['elevation'], width, height);
    }
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
    worldState.elevation = worldState.temperature = worldState.rainfall = worldState.drainage = worldState.savagery = worldState.volcanicity = false;
    return $('#heightmaps').children('.hm-option').each(function(index, item) {
      item = $(item);
      return item.children('a').html(upcase(item.data('type')));
    });
  };

  onDimensionChange = function(event) {
    var btnGroup, value;
    event.preventDefault();
    value = $(event.target);
    btnGroup = value.parents('.btn-group');
    btnGroup.find('.master-label').text(value.text());
    return clearWorldState();
  };

  upcase = function(string) {
    return string.charAt(0).toUpperCase() + string.substr(1);
  };

  init = function() {
    if (window.File && window.FileReader) {
      $('#image-loader').change(onFileSelected);
      $('#dropdown-height, #dropdown-width').children('.dropdown-menu').find('a').click(onDimensionChange);
      $('a', '#heightmaps').click(function(event) {
        event.preventDefault();
        return setActiveField($(event.target).parent('li'));
      });
      $('#clear').click(onClearClick);
      return $('#export').click(onExportClick);
    } else {
      return alert("noes");
    }
  };

  $(document).ready(init);

}).call(this);
