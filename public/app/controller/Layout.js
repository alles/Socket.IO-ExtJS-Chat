Ext.define('Chat.controller.Layout', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.layout',

    afterRender: function () {
        app.pipe.on('login', this.setCountUsers, this);
        app.pipe.on('user joined', this.setCountUsers, this);
        app.pipe.on('user left', this.setCountUsers, this);
        app.pipe.on('connected', this.onConnected, this);
        app.pipe.on('disconnected', this.onDisconnect, this);
    },

    setCountUsers: function (data) {
        this.getViewModel().set('countUsers', data.numUsers);
    },

    onConnected: function () {
        this.getView().unmask();
    },

    onDisconnect: function () {
        var msg = this.getViewModel().get('maskMessage');
        this.getView().mask(msg);
    },

    onSendMessage: function (field, e) {
        if (e.getKey() == e.ENTER) {
            var msg = field.getValue(),
                username = this.lookupReference('usernameField').getValue();

            this.getViewModel().getStore('messages').sendMessage(msg, username);

            field.setValue('');
            e.stopEvent();
            e.stopPropagation();
        }
    },

    onRefreshDataView: function () {
        var store = this.getViewModel().getStore('messages');
        if (store.count()) {
            var cnt = this.lookupReference('scrollContainer');
            if (!cnt.rendered) return;

            cnt.getScrollable().scrollTo(Infinity, Infinity, false);
        }
    }
});