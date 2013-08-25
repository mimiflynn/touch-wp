Ext.define('WWTouch.view.Posts', {
  extend : 'Ext.Container',
  xtype : 'posts',

  requires : ['Ext.data.proxy.JsonP', 'Ext.dataview.List', 'Ext.navigation.View', 'Ext.NestedList', 'WWTouch.store.Posts', 'WWTouch.view.Viewer'],

  config : {
    fullscreen : true,
    layout : 'hbox',
    
    title: 'Posts',
    iconCls: 'star',

    items : [{
      flex : 1,
      xtype : 'list',
      itemTpl : '{title}',

      store : 'Posts'
    }, {
      xtype : 'viewer',
      flex : 3
    }]
  }

});
