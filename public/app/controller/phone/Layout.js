Ext.define('Chat.controller.phone.Layout', {
    extend: 'Chat.controller.Layout',

    alias: 'controller.layout',

    onBeforeShow: function () {
        this.afterRender();

        var anim = this.getView().getLayout().getAnimation(),
            dv = this.lookupReference('scrollContainer');
        anim.on('animationend', this.onAnimationEnd, this);
        dv.on('painted', this.onRefreshDataView, this);
    },

    onKeyUpToUserName: function (field, e) {
        if (field.getValue() && e.getKey() == e.ENTER) {
            this.getView().setActiveItem(1);
        }
    },

    onAnimationEnd: function (anim) {
        var direction = anim.getDirection();
        anim.setDirection(direction == 'left' ? 'right' : 'left');
        this.lookupReference('backButton').setHidden(direction == 'right');
    },

    onBackButtonTap: function () {
        this.getView().setActiveItem(0);
    }
});