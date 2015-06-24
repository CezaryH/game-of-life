define(['marionette', 'backbone', 'models/cell_model'], function(Marionette, Backbone, CellModel){
	return Backbone.Collection.extend({
        model : CellModel,
        getNeighbours : function(){
            this.each(function(model){
                model.setNeighbours();
            });
        },
        step : function(){
            this.each(function(model){
                model.checkCondition();
            });

            this.each(function(model){
                model.updateCondition();
            });
        }
	});
});