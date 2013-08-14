Ext.define('WWTouch.view.Posts', {
  extend : 'Ext.Container',
  xtype : 'posts',

  requires : [
    'Ext.data.proxy.JsonP',
    'Ext.dataview.List',
    'Ext.navigation.View',
    'WWTouch.store.Posts'
  ],

  config : {
    title : 'Posts',
    iconCls : 'action',
    store : null
  },

  initialize : function() {
    console.log('posts view');

    this.detailContainer = Ext.create('Ext.Container', {
      cls : 'detail-container'
    });

    this.nestedList = Ext.create('Ext.navigation.View', {
      docked : 'left',
      width : 300,

      itemTpl : '{title}',

      items: {
			  xtype: 'list',
			  itemTpl: '{title}',

			  store: 'Posts'
		}

    });

    this.setItems([this.detailContainer, this.nestedList]);

  }

});
