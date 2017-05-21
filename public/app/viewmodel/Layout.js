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
        username: ''
    },

    stores: {
        messages: {
            type: 'messages'
        }
    }
});