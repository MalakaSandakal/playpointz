var sidebar_ul = $('.sidebar-ul');
var top_nav = $('.navbar');
var page_content = $('.page-content');

sidebar_ul.css({
    'margin-top': top_nav.height()+25,
});
page_content.css({
    'padding-top': top_nav.height()+40,
});


$('.profile-details-section').click(function(){
    if($('.account-settings-section').hasClass('show')){
        $('.account-settings-section').removeClass('show'); 
    }else{
        $('.account-settings-section').addClass('show');  
    }
})


$('.notification-section').click(function(){
    if($('.notifications-section').hasClass('show')){
        $('.notifications-section').removeClass('show'); 
    }else{
        $('.notifications-section').addClass('show');  
    }
})


$(function() {

    $(".progress").each(function() {  
      var value = $(this).attr('data-value');
      var left = $(this).find('.progress-left .progress-bar');
      var right = $(this).find('.progress-right .progress-bar');  
      if (value > 0) {
        if (value <= 50) {
          right.css('transform', 'rotate(' + percentageToDegrees(value) + 'deg)')
        } else {
          right.css('transform', 'rotate(180deg)')
          left.css('transform', 'rotate(' + percentageToDegrees(value - 50) + 'deg)')
        }
      }  
    })
  
    function percentageToDegrees(percentage) {  
      return percentage / 100 * 360  
    }
  
  });