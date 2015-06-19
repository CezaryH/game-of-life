define(['gol','marionette', 'underscore'], function(gol,Marionette, _){
	return Marionette.ItemView.extend({
        initialize : function(){
            this.indexInCollection = this.options.indexInCollection;

        },
		template: _.template(''),
        tagName : 'li',
        events : {
            'click' : 'clickEvent'
        },
        modelEvents : {
          'change life' : 'changeStatus'
        },
        onRender : function(){
            this.changeStatus();
        },
        changeStatus : function(){
            if(this.model.get('live') == 1){
                this.$el.addClass('live');
            } else {
                this.$el.removeClass('live');
            }
        },
        className : function(){

            if(this.options.indexInCollection < gol.settings.get('cols')){
                return 'first-row';
            }
            if(this.options.indexInCollection >= gol.settings.get('total') - gol.settings.get('cols')){
                return 'last-row';
            }

            return 'test';
        },
        clickEvent : function(){
            console.log(this.model.toJSON(), this.model.neighbours, this.model.getLiveNeighboursCount());
        }
	});
});