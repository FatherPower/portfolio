// 読み込みが終わってから初期化
window.addEventListener("load", init);
function init() {
  // ステージを作成
  var stage = new createjs.Stage("myCanvas");

    // タッチ操作をサポートしているブラウザーならば
    if(createjs.Touch.isSupported() == true){
    // タッチ操作を有効にします。
    createjs.Touch.enable(stage)
  }
  // オブジェクトの作成
  var shape = new createjs.Shape();
  shape.graphics.beginFill("DarkRed");
  shape.graphics.drawCircle(0, 0, 40);
  stage.addChild(shape);

  // tick イベントを登録する
  createjs.Ticker.addEventListener("tick", handleTick);

  function handleTick(event) {
    // マウス座標を取得する
    var mx = stage.mouseX;
    var my = stage.mouseY;
    // シェイプをマウスに追随させる
    shape.x = mx;
    shape.y = my;

    // 画面を更新する
    stage.update();
  }
}