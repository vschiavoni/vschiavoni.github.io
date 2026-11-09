// Account for the sticky masthead when the theme scrolls to a section.
jQuery(function ($) {
  $("a").smoothScroll("options", {
    beforeScroll: function (options) {
      options.offset = -$(".masthead").outerHeight() - 20;
    }
  });
});
