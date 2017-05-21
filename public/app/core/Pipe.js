Ext.define('Chat.core.Pipe', {
    mixins: ['Ext.mixin.Observable'],

    constructor: function (config) {
        this.mixins.observable.constructor.call(this, config);
    }
});