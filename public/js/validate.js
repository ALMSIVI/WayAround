'use strict';

// Login validation
$(function () {
  $('#login').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('#login-failure').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return true;
  });
});

// Index validation
$(function () {
  $('#placeForm').parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('#place-failure').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return true;
  });
});

// Parameter validation