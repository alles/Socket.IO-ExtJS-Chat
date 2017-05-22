Ext.define('Chat.viewmodel.Layout', {
    extend: 'Ext.app.ViewModel',

    requires: [
        'Chat.store.Messages'
    ],

    alias: 'viewmodel.layout',

    data: {
        chatTitleText: 'Simple chat',
        usernamePlaceHolder: 'Enter username',
        sendMessagePlaceHolder: 'Enter message',
        maskMessage: 'Connect was broken',

        username: '',
        countUsers: 0
    },

    stores: {
        messages: {
            type: 'messages'
        }
    }
});