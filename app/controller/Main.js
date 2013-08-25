Ext.define('WWTouch.controller.Main', {
  extend : 'Ext.app.Controller',

  config : {
    refs : {
      blog : 'blog',
      viewer : 'viewer'
    },
    control : {
      'blog list' : {
        itemtap : 'showBlog'
      }
    }
  },

  showBlog : function(list, index, element, record) {

    var newPanel = this.getViewer().add({
      xtype : 'panel',
      title : record.get('title'),
      html : record.get('content'),
      scrollable : true,
      styleHtmlContent : true
    });

    // delete old card after a new one has been activated
    var onActiveItemChange = function(scope, newCard, oldCard, eOpts) {
      if (oldCard) {
        oldCard.destroy();
      }
    };

    // set animation of new card when it is activated
    this.getViewer().animateActiveItem(newPanel, {
      type : 'slide',
      direction : 'left'
    });

    // set listener to do something after active item has changed
    this.getViewer().onAfter('activeitemchange', onActiveItemChange, this.getViewer());

  }
});
