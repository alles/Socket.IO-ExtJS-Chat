Ext.define('Chat.model.Message', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'uuid', type: 'string'},
        {name: 'ownCls', type: 'string', convert: function (val, rec) {
            return rec.get('uuid') === app.uuid ? 'owner' : 'another';
        }},
        {name: 'username', type: 'string'},
        {name: 'text', type: 'string'}
    ]
});