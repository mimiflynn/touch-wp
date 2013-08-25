Ext.define('WWTouch.store.Posts', {
  extend: 'Ext.data.Store',
  requires: 'WWTouch.model.Posts',

  config: {
    model: 'WWTouch.model.Posts',
    proxy: {
      type: 'ajax',
      url: 'ww.json',

      reader: {
        type: 'json',
        rootProperty: 'posts'
      }
    },
    autoLoad: true
  },
});
