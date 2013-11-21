Ext.define('WWTouch.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            blog: 'blog',
            viewer: 'viewer',
            list: 'blog list'
        },
        control: {
            'list': {
                itemtap: 'showBlog'
            },
            'blog searchfield': {
                keyup: 'onSearchKeyUp'
            }
        }
    },

    showBlog: function (list, index, element, record) {

        var newPanel = this.getViewer().add({
            xtype: 'panel',
            title: record.get('title'),
            html: record.get('content'),
            scrollable: true,
            styleHtmlContent: true
        });

        // delete old card after a new one has been activated
        var onActiveItemChange = function (scope, newCard, oldCard, eOpts) {
            if (oldCard) {
                oldCard.destroy();
            }
        };

        // set animation of new card when it is activated
        this.getViewer().animateActiveItem(newPanel, {
            type: 'slide',
            direction: 'left'
        });

        // set listener to do something after active item has changed
        this.getViewer().onAfter('activeitemchange', onActiveItemChange, this.getViewer());

    },
    onSearchKeyUp: function (field) {

        console.log('onSearchKeyUp fired');

        //get the store and the value of the field
        var value = field.getValue(), store = this.getList().getStore();

        //first clear any current filters on the store. If there is a new value, then suppress the refresh event
        store.clearFilter(!!value);

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','), regexps = [], i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i])
                    continue;

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function (record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i], didMatch = search.test(record.get('title') + ' ' + record.get('content'));

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
    }
});
