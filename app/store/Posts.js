Ext.define('WWTouch.store.Posts', {
    extend: 'Ext.data.Store',
    requires: 'WWTouch.model.Posts',

    config: {
        model: 'WWTouch.model.Posts',
        proxy: {
            type: 'ajax',
            // url: 'ww.json',
            url: 'http://wonder-wander.com/api/get_posts/',

            reader: {
                type: 'json',
                rootProperty: 'posts'
            }
        },
        autoLoad: true
    },
});
