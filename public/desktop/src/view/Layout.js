Ext.define('Chat.view.Layout', {
    extend: 'Ext.panel.Panel',
    xtype: 'pLayout',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.form.field.Text',
        'Ext.form.field.TextArea',
        'Ext.view.View',

        'Chat.controller.Layout',
        'Chat.viewmodel.Layout'
    ],

    controller: 'layout',
    viewModel: 'layout',

    header: {
        bind: {
            title: '{chatTitleText}'
        },
        items: [{
            xtype: 'textfield',
            reference: 'username',
            bind: {
                emptyText: '{usernamePlaceHolder}',
                value: '{username}'
            }
        }]
    },

    layout: 'center',
    cls: 'pLayout',

    items: [{
        xtype: 'panel',
        layout: 'fit',
        width: 300,
        height: 500,
        border: 1,
        items: [{
            xtype: 'container',
            scrollable: 'y',
            cls: 'scroll-container',
            items: [{
                xtype: 'dataview',
                cls: 'messages',
                margin: 5,
                tpl: [
                    '<tpl for=".">',
                        '<div class="message {ownCls}">',
                            '<div class="username">{username}</div>',
                            '<div class="text">{text}</div>',
                        '</div>',
                        '<div class="clear"></div>',
                    '</tpl>'
                ].join(''),
                itemSelector: 'div.message',
                bind: {
                    store: '{messages}'
                }
            }]
        }],
        dockedItems: [{
            xtype: 'textareafield',
            bind: {
                emptyText: '{sendMessagePlaceHolder}',
                disabled: '{!username}'
            },
            dock: 'bottom',
            grow: true,
            growMin: 30
        }]
    }]
});