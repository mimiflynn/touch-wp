Ext.define('WWTouch.view.Main', {
  extend : 'Ext.tab.Panel',
  xtype : 'main',
  requires : ['Ext.TitleBar', 'Ext.Video', 'WWTouch.view.Home', 'WWTouch.view.Blog', 'WWTouch.view.Contact', 'WWTouch.view.Posts', 'WWTouch.store.Posts'],
  config : {
    tabBarPosition : 'bottom',

    items : [{
      xtype : 'homepanel'
    }, {
      xtype : 'blog'
    }, {
      xtype : 'contactform'
    }, {
      xtype : 'posts'
    }]
  }
});
