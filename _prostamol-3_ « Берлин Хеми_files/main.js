$('.navigation-button').on('click', function() {
	$('.navigation').toggleClass('navigation-open');
});

$('.js-call-popup').on('click', function(e) {
	e.preventDefault();
	var popup = $(this).attr('href');

	$('.popups').addClass('open');
	$(popup).addClass('open');
});

$('.js-close-popup').on('click', function(e) {
	e.preventDefault();

	$('.popup, .popups').removeClass('open');
});

$(".btn").on("click", function() {
	// console.log(	$(this).attr('value'));
  var pageSetId = "#PAGE_SET_" + $(this).attr('value');
  $(document).find(".home-page").removeClass("active");
  $(document).find(pageSetId).addClass("active");
  // console.log(pageSetId);
 var navPrev= $('.pagination-item__prev');
 var navNext= $('.pagination-item__next');
 var valBtn=$(this).attr('value');
 console.log(valBtn);
 if(valBtn==2) {
  navPrev.attr('value','1')
  navNext.attr('value','2')
 }
 if(valBtn==3) {
  navPrev.attr('value','1')
  navNext.attr('value','3')
 }
 if(valBtn == 9 || valBtn == 10 ||valBtn == 11){
   navPrev.attr('value','2')
 }
 if(valBtn == 4 || valBtn == 5 || valBtn == 6 || valBtn == 7 || valBtn == 8){
   navPrev.attr('value','3')
 }
 if(valBtn == 9){
    navPrev.attr('value','2')
    navNext.attr('value','9')
 }
 if(valBtn == 10){
    navPrev.attr('value','2')
    navNext.attr('value','10')
 }
 if(valBtn == 11){
    navPrev.attr('value','2')
    navNext.attr('value','11')
 }
 });

 
$(".breadcrumb a").on("click", function() {

  var pageSetId = "#PAGE_SET_" + $(this).attr('value');
  $(document).find(".home-page").removeClass("active");
  $(document).find(pageSetId).addClass("active");
  console.log(pageSetId);
 });
$(".home-page__back").on("click", function() {
  var pageSetId = "#CHANGE_IMG_" + $(this).attr('value');
  $(document).find(".home-page").removeClass("active");
  $(document).find(pageSetId).addClass("active");
  


 });

$('.pagination-item__prev').on('click',function(){
   var pageSetId = "#PAGE_SET_" + $(this).attr('value');
  $(document).find(".home-page").removeClass("active");
  $(document).find(pageSetId).addClass("active");
  var thisVal=$(this).attr('value');
  if(thisVal==3){
    $(this).attr('value','1');
    
  }
  if(thisVal==2){
    $(this).attr('value','1');
  }
  if(thisVal==1){
    $(this).attr('value','1');
    // $('.pagination-item__next').attr('value','2');
  }
  // var valMinus=thisVal-1;
  // $(this).attr('value',valMinus );
})
$('.pagination-item__next').on('click',function(){
   var pageSetId = "#PAGE_SET_" + $(this).attr('value');
  $(document).find(".home-page").removeClass("active");
  $(document).find(pageSetId).addClass("active");
  var thisVal=$(this).attr('value');
  if(thisVal==9){
    $('.pagination-item__prev').attr('value','2');
  }
  if(thisVal==10){
    $('.pagination-item__prev').attr('value','2');
  }
  if(thisVal==11){
    $('.pagination-item__prev').attr('value','2');
  }
  // if(thisVal==2){
  //   $(this).attr('value','1');
  // }
})
$('.home-page-set-1').on('click',function(){
  $(document).find(".home-page").removeClass("active");
  $('#PAGE_SET_1').addClass('active');
})
 $('#open-slides').on('click', function(e) {
     e.preventDefault();
	  $('.navigation').toggleClass('navigation-open');
  });
 $("body").bind('swipeleft',function(event, ui){
      goPage1();
})
$("body").bind('swiperight',function(event, ui){
      goPage2();
})  

function goPage1(){
  //  var dirPath = dirname(location.href);
    let str = location.href;

    // var to = str.search('-'); 
    // var from = str.length;
    // $newstr = str.substring(to,from);
    // // let num = parseInt($newstr);
    // console.log($newstr);
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let num = parseInt(numstr);
    num+=1;
    // console.log(numstr);
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    // console.log(str+'-'+numstr)
    var fullPath=str+'-'+num;
   window.location=fullPath;

}
function goPage2(){
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let num = parseInt(numstr);
    numstr-=1;
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+numstr;
    window.location=fullPath;
}
$('.scroll-area a').on('click',function(){
    // event.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let linkPage=$(this).attr('href');
    let linkPageNum=linkPage.match(regexp)[0];
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+linkPageNum;
    window.location=fullPath;
  })
  $('.btn-link').on('click',function(){
    // event.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let linkPage=$(this).attr('href');
    let linkPageNum=linkPage.match(regexp)[0];
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+linkPageNum;
    window.location=fullPath;
  })
  $('.pagination-item').on('click',function(){
    // event.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let linkPage=$(this).attr('href');
    let linkPageNum=linkPage.match(regexp)[0];
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+linkPageNum;
    window.location=fullPath;
  })
  $('.btn-wrap .btn').on('click','.btn:not(.js-call-popup)',function(){
    // event.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let linkPage=$(this).attr('href');
    let linkPageNum=linkPage.match(regexp)[0];
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+linkPageNum;
      console.log(str);
    window.location=fullPath;
  })
  $('.menu-item').on('click',function(){
    // event.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    numstr= str.match(regexp)[0];
    let linkPage=$(this).attr('href');
    let linkPageNum=linkPage.match(regexp)[0];
    var patt = /(.+?)\s?\-.*/g;
    str = str.replace(patt, '$1')
    var fullPath=str+'-'+linkPageNum;
      console.log(str);
    window.location=fullPath;
  })
  $('.btn-link-page').on('click',function(e){
  // e.preventDefault();
    let str = location.href;
    let regexp = /(\d)+/;
    let linkPage=$(this).attr('href');
    var fullPath=str+linkPage;
     window.location=fullPath;
 })