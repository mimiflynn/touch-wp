Ext.define('WWTouch.view.Blog', {
	extend: 'Ext.navigation.View',
	xtype: 'blog',
	
	config: {
		title: 'Blog',
		iconCls: 'star',
		
		items: {
			xtype: 'list',
			itemTpl: '{title}',
			
			store: {
			  autoLoad: true,
			  fields: ['title', 'author', 'content'],
			  
			  proxy: {
			    type: 'jsonp',
			    url: 'http://wonder-wander.com/api/get_recent_posts/',
			    
			    reader: {
			      type: 'json',
			      rootProperty: 'posts'  
			    }
			  }
			}
		}
	}
});