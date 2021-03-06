define(['marionette', 'backbone', 'models/cell_model'], function(Marionette, Backbone, CellModel){
	return Backbone.Collection.extend({
        model : CellModel,
        getNeighbours : function(){
            this.each(function(model){
                model.setNeighbours();
            });
        },
        step : function(){
            var changed = {
                arr : []
            };

            Marionette.actAsCollection(changed, 'arr');

            this.each(function(model){
                model.checkCondition();
                if(model.get('stateChange')){
                    changed.arr.push(model);
                }
            });



            changed.each(function(model){
                model.updateCondition();
            });
        }
	});
});