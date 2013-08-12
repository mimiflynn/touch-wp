Ext.define('WWTouch.controller.Main', {
  extend: 'Ext.app.Controller',
  
  config: {
    refs: {
      blog: 'blog',
      posts: 'posts'
    },
    control: {
      'blog list' : {
        itemtap: 'showBlog'
      },
      'posts list' : {
        itemtap: 'showPost'
      }
    }
  },
  
  showBlog: function(list, index, element, record) {
    this.getBlog().push({
      xtype: 'panel',
      title: record.get('title'),
      html: record.get('content'),
      scrollable: true,
      styleHtmlContent: true
    });
  },

  showPost : function(list, index, element, record) {
    this.getPosts().push({
      xtype: 'panel',
      title: record.get('title'),
      html: record.get('content'),
      scrollable: true,
      styleHtmlContent: true
    });
  }
});
