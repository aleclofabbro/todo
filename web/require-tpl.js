define('tpl', ['jquery'], function($) {
  "use strict";

  return {
    loadElem: function(url, cb) {
      $.ajax({
          type: 'GET',
          url: url,
          dataType: 'html'
        })
        .then(function(html) {
          var _master = $(html);
          return {
            clone: function() {
              return _master.clone();
            },
            cloneIn: function(elem) {
              var children = this.clone();
              $(elem).append(children);
              return children;
            },
            master: function() {
              return _master;
            }
          };
        })
        .then(cb);
    },
    load: function(name, parentRequire, onload, config) {
      var url = parentRequire.toUrl(name);
      this.loadElem(url, onload);
    }
  };
});