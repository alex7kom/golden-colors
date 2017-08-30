var goldenColors = {};

(function () {
  var goldenRatioConjugate = 0.618033988749895;

  function getRandom255 () {
    return Math.round(Math.random() * 255);
  }

  function convertDecToHex (number) {
    var result = number.toString(16);
    if (result.length === 1) {
      result = '0' + result;
    }
    return result;
  }

  function convertHsvToRgb (h, s, v) {
    var r, g, b;

    var i = Math.floor(h * 6);
    var f = h * 6 - i;
    var p = v * (1 - s);
    var q = v * (1 - f * s);
    var t = v * (1 - (1 - f) * s);

    switch(i % 6){
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }

  function WebColor (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  WebColor.prototype.toRgb = function () {
    return [this.r, this.g, this.b];
  };

  WebColor.prototype.toRgbString = function () {
    return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
  };

  WebColor.prototype.toHexString = function () {
    return '#' +
      convertDecToHex(this.r) +
      convertDecToHex(this.g) +
      convertDecToHex(this.b);
  };

  WebColor.prototype.toString = function () {
    return this.toHexString();
  };

  WebColor.prototype.toJSON = function () {
    return this.toHexString();
  };

  goldenColors.getNaive = function () {
    return new WebColor(getRandom255(), getRandom255(), getRandom255());
  };

  goldenColors.getHsvSimple = function (s, v) {
    var color = convertHsvToRgb(Math.random(), s, v);
    return new WebColor(color[0], color[1], color[2]);
  };

  goldenColors.getHsvGolden = function (s, v) {
    var h = Math.random();
    h += goldenRatioConjugate;
    h %= 1;
    var color = convertHsvToRgb(h, s, v);
    return new WebColor(color[0], color[1], color[2]);
  };
    
  var hFixed = Math.random();
  goldenColors.getHsvGoldenDistributed = function (s, v) {
    hFixed += goldenRatioConjugate;
    hFixed %= 1;
    var color = convertHsvToRgb(hFixed s, v);
    return new WebColor(color[0], color[1], color[2]);
  };
})();
