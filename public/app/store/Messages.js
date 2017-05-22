Ext.define('Chat.store.Messages', {
    extend: 'Ext.data.Store',

    alias: 'store.messages',

    model: 'Chat.model.Message',

    proxy: {
        type: 'memory',
        reader: {
            type: 'json'
        }
    },

    autoSync: true,

    sorters: [{
        property: 'id',
        direction: 'ASC'
    }],

    constructor: function () {
        this.callParent(arguments);

        app.pipe.on('new message', this.onAddMessage, this);
        app.pipe.on('new message id', this.onGetMessageId, this);
        app.pipe.on('messages', this.loadData, this);
        app.pipe.send('get messages', '');
    },

    sendMessage: function (message, username) {
        var data = {
            id: Math.floor(Math.random() * (99999999 - 10000000) + 10000000),
            username: username,
            uuid: app.uuid,
            text: message
        };
        this.add(data);
        app.pipe.send('new message', data);
    },

    onGetMessageId: function (data) {
        this.getById(data.oldId).set('id', data.newId);
    },

    onAddMessage: function (data) {
        this.add(data.message);
    }
});