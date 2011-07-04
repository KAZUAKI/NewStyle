// doit.js

// 何かの処理
(function() {
    // ネームスペース定義
    kk.doit = {};
    
    // tabボタンを押した時の処理
	kk.doit.something = function(_args) {    
        Ti.API.debug(_args+" tapped");
  	};

})();

