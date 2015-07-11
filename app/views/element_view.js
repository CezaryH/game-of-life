define(['gol','marionette'], function(gol, Marionette){
	return Marionette.ItemView.extend({
        initialize : function(){
            this.indexInCollection = this.options.indexInCollection;
        },
		template: false,
        tagName : 'li',
        events : {
            'click' : 'clickEvent'
        },
        modelEvents : {
          'change isLive' : 'changeStatus'
        },
        changeStatus : function(){
            if(this.model.get('isLive') == 1){
                this.$el.addClass('live');
            } else {
                this.$el.removeClass('live');
            }
        },
        className : function(){
            var className = '';
            if(this.options.indexInCollection < gol.settings.get('cols')){
                className =  'first-row';
            }
            if(this.options.indexInCollection >= gol.settings.get('total') - gol.settings.get('cols')){
                className = 'last-row';
            }

            if (this.model.get('isLive')){
                className += ' live'
            }
            return className;
        },
        clickEvent : function(){
            console.log(this.model.toJSON(), this.model.neighbours, this.model.getLiveNeighboursCount());
        }
	});
});