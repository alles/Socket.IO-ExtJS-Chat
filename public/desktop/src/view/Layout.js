Ext.define('Chat.view.Layout', {
    extend: 'Ext.panel.Panel',
    xtype: 'pLayout',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.form.Label',
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
        }, {
            xtype: 'label',
            bind: {
                text: '{countUsers}'
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
            reference: 'scrollContainer',
            items: [{
                xtype: 'dataview',
                cls: 'messages',
                margin: 5,
                tpl: [
                    '<tpl for=".">',
                        '<div class="message {ownCls}">',
                            '<div class="username">{username}</div>',
                            '<div class="text">{text}</div>',
                            '<div class="clear"></div>',
                        '</div>',
                    '</tpl>'
                ].join(''),
                itemSelector: 'div.message',
                bind: {
                    store: '{messages}'
                },
                listeners: {
                    refresh: 'onRefreshDataView'
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
            growMax: 150,
            grow: true,
            growMin: 30,
            enterIsSpecial: true,
            listeners: {
                specialkey: 'onSendMessage'
            }
        }]
    }]
});