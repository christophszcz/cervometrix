$(document).ready(function(){
  checkSize();
  checkTextSize();
  whatWeDoCheckSize();
  iPadMainBackground();
  iPhoneFiveMainBackground();
  checkImageSize();

  $(window).resize(checkSize);
  $(window).resize(checkImageSize);
  $(window).resize(checkTextSize);
  $(window).resize(iPadMainBackground);
  $(window).resize(iPhoneFiveMainBackground);
  $(window).resize(whatWeDoCheckSize);
});

function iPhoneFiveMainBackground(){
  if($('.navbar-brand-name').css('font-size') === '16px'){
    $('section.main-section').css('background-size', '750px 687px');
  }
}

function iPadMainBackground(){
  if($('.main-logo').css('margin-top') === '400px'){
    $('section.main-section').css('background-size', '1366px 1100px');  
  }
}
 
function checkSize(){
  if($(".chris-description").css("margin-bottom") === "40px"){
    $(".small-before-chris").insertBefore(".small-after-chris");
    $(".small-before-chloe").insertBefore(".small-after-chloe");
  } else {
    $(".small-after-chris").insertBefore(".small-before-chris");
    $(".small-after-chloe").insertBefore(".small-before-chloe");
  }
}

function whatWeDoCheckSize(){
  if($(".hippocampal-subfield-segmentation-description").css("margin-bottom") === "40px"){
    $(".small-before-hippocampal-subfield-segmentation").insertBefore(".small-after-hippocampal-subfield-segmentation");
    $(".small-before-medial-temporal-lobe-cortex-segmentation").insertBefore(".small-after-medial-temporal-lobe-cortex-segmentation");
    $(".small-before-ventricular-segmentation").insertBefore(".small-after-ventricular-segmentation");
    $(".small-before-lesions-and-brain-tumor-segmentation").insertBefore(".small-after-lesions-and-brain-tumor-segmentation");
  } else {
    $(".small-after-hippocampal-subfield-segmentation").insertBefore(".small-before-hippocampal-subfield-segmentation");
    $(".small-after-medial-temporal-lobe-cortex-segmentation").insertBefore(".small-before-medial-temporal-lobe-cortex-segmentation");
    $(".small-after-ventricular-segmentation").insertBefore(".small-before-ventricular-segmentation");
    $(".small-after-lesions-and-brain-tumor-segmentation").insertBefore(".small-before-lesions-and-brain-tumor-segmentation");
  }
}

function checkImageSize(){ 
  if ($('.navbar-brand-name').css('font-size') === '20px' && $(".navbar-inverse").hasClass('transparent')) {
    $('.main-section').css('background-size', '1366px 929px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "#000");
  }else if ($('.navbar-brand-name').css('font-size') === '20px') {
    $('.main-section').css('background-size', '1366px 929px');
  } else if ($('.navbar-brand-name').css('font-size') === '18px'){
    $('.main-section').css('background-size', '1010px  750px'); 
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");  
  } else if ($('.navbar-brand-name').css('font-size') === '17px'){
    $('.main-section').css('background-size', '1010px  750px');
    $(".navbar-inverse .navbar-nav>li>a").css("color", "!important #fff");
  }
};

function checkTextSize(){
  if($('.navbar-brand-name').css('font-size') === '19px'){
    $(".project-details-label").css('font-size', '12px');
  } else if($('.navbar-brand-name').css('font-size') === '17px'){
    $(".project-details-label").css('font-size', '10px');
  } else{
    $(".project-details-label").css('font-size', '14px'); 
  }
}