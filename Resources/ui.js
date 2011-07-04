// ui.js

// UI処理
(function() {
    // ネームスペース定義
    kk.ui = {};
    
    // tab名、window名設定
    tabname1 = 'Tab1';
    tabname2 = 'Tab2';

    
    // tab内window生成
    kk.ui.createAttendeeWindow = function( _attended ) {
        var window = Titanium.UI.createWindow({
            title: (!_attended) ? tabname1 : tabname2
        });
        var button = Titanium.UI.createButton({
            title: (!_attended) ? tabname1+'タブ' : tabname2+'タブ',
            width: 200,
            height: 50
        });
        window.add(button);
        
        button.addEventListener('click', function(e) {
            kk.doit.something(button.title);
        });
        
        return window;
    };
    
    // tabGroup生成
    kk.ui.createApplicationTabGroup = function() {
        // tabGroup作成
        var tabGroup = Titanium.UI.createTabGroup();
        
        // tabウィンドウの作成
        var registered = kk.ui.createAttendeeWindow(false);
        var attended = kk.ui.createAttendeeWindow(true);
        
        // tab生成
        kk.registeredTab = Titanium.UI.createTab({
            title: tabname1,
            window: registered,
            icon: 'KS_nav_views.png'
        });
        kk.attendedTab = Titanium.UI.createTab({
            title: tabname2,
            window: attended,
            icon: 'KS_nav_ui.png'
        });
        
        // tabGroupにタブ追加
        tabGroup.addTab(kk.registeredTab);
        tabGroup.addTab(kk.attendedTab);
        
        return tabGroup;
    };
})();

