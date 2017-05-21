Ext.define('Chat.store.Messages', {
    extend: 'Ext.data.Store',

    alias: 'store.messages',

    model: 'Chat.model.Message',

    proxy: {
        type: 'hybrid',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    data: [
        {id: 1, uuid: 'ec29bd66-e544-4280-ae6c-f1b725b2647d', username: 'test1', text: 'Тестовое свое сообщение'},
        {id: 2, uuid: '', username: 'test2', text: 'Тестовое сообщение пользователя test2'},
        {id: 3, uuid: '', username: 'test3', text: 'Тестовое сообщение пользователя test3'},
        {id: 4, uuid: '', username: 'test4', text: 'Тестовое сообщение пользователя test4'},
        {id: 5, uuid: '', username: 'test5', text: 'Тестовое сообщение пользователя test5'},
        {id: 6, uuid: '', username: 'test6', text: 'Тестовое сообщение пользователя test6'},
        {id: 7, uuid: 'ec29bd66-e544-4280-ae6c-f1b725b2647d', username: 'test123', text: 'Тестовое свое сообщение от пользователя test123'},
        {id: 8, uuid: '', username: 'alles', text: 'Тестовое сообщение пользователя alles'},
        {id: 9, uuid: '', username: 'alles123', text: 'Тестовое сообщение пользователя alles123'},
        {id: 10, uuid: '', username: 'foo321', text: 'Тестовое сообщение пользователя foo321'},
        {id: 11, uuid: '', username: 'bar321', text: 'Тестовое сообщение пользователя bar321'},
        {id: 12, uuid: '', username: 'foobar321', text: 'Тестовое сообщение пользователя foobar321'},
        {id: 13, uuid: '', username: 'barfoo123', text: 'Тестовое сообщение пользователя barfoo123'}
    ]
});