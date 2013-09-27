Ext.define('WWTouch.view.Blog', {
    extend: 'Ext.dataview.List',
    xtype: 'blog',

    config: {
        title: 'Blog',
        iconCls: 'star',

            itemTpl: '{title}',

            store: 'Posts'
    }
});
