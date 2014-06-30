/*
 * gruntl
 * https://github.com/raosiyong/gruntl
 *
 * Copyright (c) 2014 lawrence rao
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.gruntl = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.gruntl = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.gruntl.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.gruntl.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].gruntl = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
