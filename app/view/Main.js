Ext.define('WWTouch.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'homepanel'
            },
            {
                xtype: 'blog'
            },
            {
                xtype: 'contactform'
            },
            {
                xtype: 'posts'
            }
        ]
    }
});
