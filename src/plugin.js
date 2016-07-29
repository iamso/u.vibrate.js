  'use strict';

  $.fn.vibrate = function (conf) {
    var config = $.extend({
      speed:    30,
      duration: 2000,
      frequency:  5000,
      spread:   3,
      continuous: false
    }, conf);

    return this.each(function() {
      var $this = $(this),
          pos = $this.css('position'),
          vibrate = function() {
            var topPos  = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2),
                leftPos = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2),
                rotate  = Math.floor(Math.random() * config.spread) - ((config.spread - 1) / 2);

            $this.css({
              position:     'relative',
              left:       leftPos + 'px',
              top:        topPos + 'px',
              transform: 'rotate('+rotate+'deg)',
            });
          },
          doVibration = function() {
            var vibrationInterval = setInterval(vibrate, config.speed),
                stopVibration = function() {
                  clearInterval(vibrationInterval);
                  $this.css({
                    position: pos,
                    left: 0,
                    top: 0,
                    transform: 'rotate(0deg)',
                  });
                };

            setTimeout(stopVibration, config.duration);
          };
          if (config.continuous) {
            setInterval(doVibration, config.frequency);
          }
          else {
            doVibration();
          }
    });
  };
