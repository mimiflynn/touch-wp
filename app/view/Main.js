Ext.define('WWTouch.view.Main', {
  extend : 'Ext.tab.Panel',
  xtype : 'main',
  requires : ['Ext.TitleBar', 'Ext.Video'],
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
