Ext.define('WWTouch.view.Posts', {
    extend: 'Ext.Container',
    xtype: 'posts',

    config: {
        fullscreen: true,
        layout: 'hbox',

        items: [
            {
                xtype: 'blog',
                width: 300
            },
            {
                xtype: 'viewer',
                width: 800
            }
        ]
    }
});
