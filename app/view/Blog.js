Ext.define('WWTouch.view.Blog', {
    extend: 'Ext.navigation.View',
    xtype: 'blog',
    requires: ['Ext.data.proxy.JsonP', 'Ext.field.Text', 'Ext.field.Search', 'Ext.List'],

    config: {
        title: 'Wonder-Wander',
        iconCls: 'star',
        navigationBar: {
            hidden: true
        },

        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                store: 'Posts'
            },
            {
                xtype: 'toolbar',
                docked: 'top',

                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'searchfield',
                        placeHolder: 'Search...',
                        name: 'navSearch'
                    },
                    {
                        xtype: 'spacer'
                    }
                ]
            }
        ]
    }
});
