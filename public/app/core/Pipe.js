Ext.define('Chat.core.Pipe', {
    mixins: ['Ext.mixin.Observable'],

    connected: false,
    socket: null,

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);

        this.socket = io();
        this.connect();

        this.initEvents();
        this.on('login', this.onLogin, this);
        this.on('reconnect', this.connect, this);
        this.on('disconnect', this.onDisconnect, this);
    },

    connect: function () {
        this.socket.emit('add user', app.uuid);
    },

    initEvents: function () {
        var events = [
            'login', 'reconnect', 'disconnect', 'user joined',
            'user left', 'new message', 'new message id', 'messages'
        ];
        Ext.Array.each(events, function (evt) {
            var me = this;
            this.socket.on(evt, function (data) {
                me.fireEvent(evt, data);
            });
        }, this);
    },

    onLogin: function () {
        this.connected = true;
        this.fireEvent('connected');
    },

    onDisconnect: function () {
        this.connected = false;
        this.fireEvent('disconnected');
    },

    send: function (eventName, data) {
        this.socket.emit(eventName, data);
    }
});