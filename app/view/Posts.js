Ext.define('WWTouch.view.Posts', {
    extend : 'Ext.Container',
    xtype : 'posts',

    requires : [
        'Ext.data.proxy.JsonP',
        'Ext.dataview.List',
        'Ext.navigation.View',
        'Ext.NestedList'
    ],

    config : {
        fullscreen : true,
        layout : 'hbox',

        items : [{

            //flex : 1,
            width: 300,
            xtype : 'blog'

        }, {

            xtype : 'viewer',
            //flex : 2
            width: 800

        }]
    }

});
