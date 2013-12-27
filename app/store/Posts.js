Ext.define('WWTouch.store.Posts', {
    extend: 'Ext.data.Store',
    requires: 'WWTouch.model.Posts',

    config: {
        model: 'WWTouch.model.Posts',
        proxy: {
            type: 'ajax',
            url: 'http://localhost/wonder-wander.com/api/get_posts/',

            reader: {
                type: 'json',
                rootProperty: 'posts'
            }
        },
        autoLoad: true
    }
});
