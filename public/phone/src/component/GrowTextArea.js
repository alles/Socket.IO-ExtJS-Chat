Ext.define('Chat.component.GrowTextArea', {
    extend: 'Ext.field.TextArea',
    xtype: 'growtextareafield',

    config: {
        grow: false,
        growMax: null,
        growMin: null
    },

    initialize: function () {
        this.callParent(arguments);

        var growMin = this.getGrowMin();
        if (this.getGrow() && growMin) {
            this.setHeight(growMin);
        }
        this.on('painted', this.onPainted, this);
    },

    onPainted: function () {
        this.setGrowMin(this.getHeight());
    },
    
    doKeyUp: function () {
        this.callParent(arguments);

        if (this.getGrow()) {
            var taElem = this.el.down('textarea');
            if (taElem && taElem.getScrollTop()) {
                this.setHeight(this.el.getHeight() + taElem.getScrollTop());
            } else if (this.getValue() == '') {
                this.setHeight(this.getGrowMin());
            }
        }
    }
});