(function () {
  'use strict';
  var search = document.getElementById('publication-search');
  if (!search) return;
  var lists = Array.prototype.slice.call(document.querySelectorAll('.publication-list'));
  var entries = [];
  lists.forEach(function (list) {
    var items = Array.prototype.slice.call(list.children);
    items.forEach(function (item, index) {
      if (list.hasAttribute('reversed')) item.value = items.length - index;
      entries.push({ element: item, text: item.textContent.toLocaleLowerCase() });
    });
  });
  search.addEventListener('input', function () {
    var query = search.value.trim().toLocaleLowerCase();
    var visible = 0;
    entries.forEach(function (entry) {
      var matches = !query || entry.text.indexOf(query) !== -1;
      entry.element.hidden = !matches;
      if (matches) visible += 1;
    });
    document.getElementById('publication-status').textContent = query
      ? visible + ' of ' + entries.length + ' publications match.'
      : entries.length + ' publications.';
  });
})();
