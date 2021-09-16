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

