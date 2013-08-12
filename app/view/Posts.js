Ext.define('WWTouch.view.Posts', {
	extend: 'Ext.navigation.View',
	xtype: 'posts',
  requires: ['Ext.data.proxy.JsonP'],
	
	config: {
		title: 'Posts',
		iconCls: 'time',
		
		items: {
			xtype: 'list',
			itemTpl: '{title}',
			
			store: {
			  autoLoad: true,
			  fields: ['title', 'author', 'content'],
			  
			  proxy: {
			    type: 'jsonp',
			    url: 'http://localhost/wonder-wander.com/api/get_posts/',
			    
			    reader: {
			      type: 'json',
			      rootProperty: 'posts'  
			    }
			  }
			}
		}
	}
});
