// 画面幅に画像を表示
$(document).ready(function () {
  hsize = $(window).height();
  $('div[class*="mv"]').css("height", hsize + "px");
});
$(window).resize(function () {
  hsize = $(window).height();
  $('div[class*="mv"]').css("height", hsize + "px");
  8;
});

// スムーズスクロール
$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});


// 要素の高さを取得
$(function() {
$(window).load(function(){
  // タイトルのBOX分の高さを取得
  var child1 = $('div[class="title_box"]').height();
  // その下のコンテンツのBOX分の高さを取得
  var child2 = $('div[class="menu_box"]').outerHeight();
  var child3 = $('div[class="contents_wrapper_inner2"]').outerHeight();
  var child4 = $('div[class="location_box"]').outerHeight();


  // 余白分の高さを計算
  var mhsize = child1 + child2;
  var mhsize2 = child1 + child3;
  var mhsize3 = child1 + child4;
  // cssにその高さを反映させる
  $('div[class*="margin_red"]').css("height", mhsize + "px");
  $('div[class*="margin_red2"]').css("height", mhsize2 + "px");
  $('div[class*="margin_red3"]').css("height", mhsize3 + "px");


});
});