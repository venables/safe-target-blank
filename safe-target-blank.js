/*
 * safe-target-blank v1.0.0
 * Copyright 2014 Matt Venables https://mattvenables.com
 */
(function() {
  'use strict';

  var links = document.links;
  for(var i=0; i < links.length; i++) {
    if (links[i].target == '_blank') {
      links[i].setAttribute('rel', 'noreferrer');
    }
  }
})();
