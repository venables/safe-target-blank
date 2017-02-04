/*
 * safe-target-blank v1.1.0
 * Copyright 2014-2017 Matt Venables https://mattvenables.com
 */

(function () {
  'use strict'

  document.addEventListener('DOMContentLoaded', function (e) {
    var links = document.links
    for (var i = 0; i < document.links.length; i++) {
      if (links[i].target === '_blank' && links[i].rel.indexOf('noreferrer') === -1) {
        links[i].rel = (links[i].rel + ' noreferrer').trim()
      }
    }
  })
})()
