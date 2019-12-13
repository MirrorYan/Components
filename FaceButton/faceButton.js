(function($) {
  const container = document.querySelector('#container'),
        mouseCoords = container.getBoundingClientRect(),
        $faceButton = $('.face-button'),
        $faceContainer = $('.face-container');

  $faceButton.on('mousemove', function(e) {
    const mouseX = e.pageX - container.offsetLeft,
          mouseY = e.pageY - container.offsetTop;
    TweenMax.to($faceButton[0], 0.3, {
      x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 100,
      y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 100,
      ease: Power4.easeOut
    });
    TweenMax.to($faceContainer[0], 0.3, {
      x: (mouseX - mouseCoords.width / 2) / mouseCoords.width * 75,
      y: (mouseY - mouseCoords.height / 2) / mouseCoords.width * 75,
      ease: Power4.easeOut
    });
  });

  $faceButton.on('mouseenter', function(e) {
    TweenMax.to($faceButton[0], 0.3, {
      scale: 0.975
    })
  });

  $faceButton.on('mouseleave', function (e) {
    TweenMax.to($faceButton[0], 0.3, {
      x: 0,
      y: 0,
      scale: 1
    });
    TweenMax.to($faceContainer[0], 0.3, {
      x: 0,
      y: 0,
      scale: 1
    })
  });



}(jQuery));