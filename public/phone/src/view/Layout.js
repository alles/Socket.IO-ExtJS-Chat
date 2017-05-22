Ext.define('Chat.view.Layout', {
    extend: 'Ext.Container',
    xtype: 'pLayout',

    requires: [
        'Ext.TitleBar',
        'Ext.field.Text',
        'Ext.field.TextArea',
        'Ext.Label',

        'Chat.component.GrowTextArea',
        'Chat.controller.phone.Layout',
        'Chat.viewmodel.Layout'
    ],

    controller: 'layout',
    viewModel: 'layout',

    fullscreen: true,
    layout: {
        type: 'card',
        animation: 'slide'
    },

    cls: 'pLayout',

    items: [{
        xtype: 'titlebar',
        docked: 'top',
        bind: {
            title: '{chatTitleText}'
        },
        items: [{
            align: 'left',
            iconCls: 'md-icon-arrow-back',
            handler: 'onBackButtonTap',
            reference: 'backButton',
            hidden: true
        }, {
            xtype: 'label',
            align: 'right',
            bind: '{countUsers}',
            margin: '0 5 0 0'
        }]
    }, {
        xtype: 'container',
        cls: 'username-container',
        items: [{
            xtype: 'textfield',
            reference: 'usernameField',
            centered: true,
            bind: {
                placeHolder: '{usernamePlaceHolder}',
                value: '{username}'
            },
            width: '80%',
            listeners: {
                keyup: 'onKeyUpToUserName'
            }
        }]
    }, {
        xtype: 'container',
        layout: 'fit',
        items: [{
            xtype: 'dataview',
            margin: 5,
            reference: 'scrollContainer',
            bind: '{messages}',
            cls: 'messages',
            itemTpl: [
                '<tpl for=".">',
                    '<div class="message {ownCls}">',
                        '<div class="username">{username}</div>',
                        '<div class="text">{text}</div>',
                        '<div class="clear"></div>',
                    '</div>',
                '</tpl>'
            ].join('')
        }, {
            xtype: 'growtextareafield',
            reference: 'sendMessageField',
            docked: 'bottom',
            grow: true,
            growMax: 300,
            listeners: {
                keyup: 'onSendMessage'
            }
        }]
    }],

    listeners: {
        beforeshow: 'onBeforeShow'
    }
});