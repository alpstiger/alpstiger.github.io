$(document).ready(function(){
      function nextAni(){
          $(".img_slide").not(":animated").animate({"margin-top":"-500px"}, 500, function(){
              $(".img_slide li").eq(0).appendTo($(".img_slide"));
              $(".img_slide").css("margin-top","0px");
          });
      }
      function prevAni() {
          $(".img_slide li").eq(2).prependTo($(".img_slide"));
          $(".img_slide").css("margin-top", "-500px");
          $(".img_slide").not(":animated").animate({"margin-top":"0px"}, 500);
      }
      var intv = setInterval(function(){ nextAni(); }, 2900);
      $(".btn_box .it2").click(function(){
         clearInterval(intv);
         nextAni(); 
         intv = setInterval(function(){  nextAni(); }, 2900);  
      });
      $(".btn_box .it1").click(function(){
          clearInterval(intv);
          prevAni();
          intv = setInterval(function(){ nextAni(); }, 2900);
      });
});