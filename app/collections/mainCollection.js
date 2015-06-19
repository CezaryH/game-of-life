define(['marionette', 'backbone', 'models/cell_model'], function(Marionette, Backbone, CellModel){
	return Backbone.Collection.extend({
        model : CellModel,
        initialize : function(){
            var that = this;
        },
        setNeighbours : function(){
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