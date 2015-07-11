define(['gol','marionette', 'underscore','collections/mainCollection', 'views/element_view'],
    function(gol, Marionette, _, Collection, ElementView){
	var items = [];

	for(var i=0 ; i < gol.settings.get('total'); i++){
		items.push({
			isLive :  (Math.random() < 0.2)
		});
	}

	
	return Marionette.CompositeView.extend({
		childView : ElementView,
		childViewContainer : '.collection',
		template : '#main-view-template',
        collection : new Collection(items),
        events : {
            'click .step' : 'step',
            'click .autoStart' : 'autoStart',
            'click .autoStop' : 'autoStop'
        },
        initialize : function(){
            this.collection.getNeighbours();
        },
        step : function(){
            this.collection.step();
        },
        childViewOptions : function(model){
            return {
                indexInCollection : this.collection.indexOf(model)
            };
        },
        autoStart : function(){
            var that = this;
            this.autoStop();
            this.interval = setInterval(function(){
                that.collection.step();
            }, 500);
        },
        autoStop : function(){
            clearInterval(this.interval);
        }
	});
});