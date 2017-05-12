// navToggle

  $('#navToggle').click(function(){
    var $Toggle = $('.navToggleList')
    if($Toggle.hasClass('open')){
      $Toggle.stop().slideUp();
      $Toggle.removeClass('open');
      $('span:nth-child(1)').removeClass('active1');
      $('span:nth-child(2)').removeClass('active2');
      $('span:nth-child(3)').removeClass('active3');
    } else {
      $Toggle.stop().slideDown();
      $Toggle.addClass('open');
      $('span:nth-child(1)').addClass('active1');
      $('span:nth-child(2)').addClass('active2');
      $('span:nth-child(3)').addClass('active3');
    }
  });

  $('#navToggle').click(function(){
    if($())
    $('span:nth-child(1)').addClass('active');
  });