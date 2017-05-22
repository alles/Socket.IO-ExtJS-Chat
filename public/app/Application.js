/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('Chat.Application', {
    extend: 'Ext.app.Application',

    requires: [
        'Ext.data.identifier.Uuid',

        'Chat.core.*',
        'Chat.component.*'
    ],
    
    name: 'Chat',

    uuid: null,

    init: function () {
        window.app = this;

        this.uuid = localStorage.getItem('uuid');
        if (!this.uuid) {
            this.uuid = (new Ext.data.identifier.Uuid()).generate();
            localStorage.setItem('uuid', this.uuid);
        }

        this.pipe = new Chat.core.Pipe();
    },

    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
