Ext.define('WWTouch.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    requires: [
        'Ext.data.proxy.JsonP',
        'WWTouch.store.Posts'
    ],

    config: {
        title: 'Blog',
        iconCls: 'star',

        items: {
            xtype: 'list',
            itemTpl: '{title}',

            store: 'Posts'
        }
    }
});
