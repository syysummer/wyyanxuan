//rem适配
(function (designWidth){
  let size = document.documentElement.clientWidth/designWidth*100;
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "16px";
}(750));
