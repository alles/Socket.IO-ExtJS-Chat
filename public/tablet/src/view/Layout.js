Ext.define('Chat.view.Layout', {
    extend: 'Ext.Container',
    xtype: 'pLayout',

    requires: [
        'Chat.controller.Layout',
        'Chat.viewmodel.Layout'
    ],

    controller: 'layout',
    viewModel: 'layout'
});