define(
    ['marionette', 'backbone'],
    function(Marionette, Backbone){
        return Backbone.Model.extend({
            defaults : {
                rows : 60,
                cols : 60
            },
            initialize : function(){
                this.set('total', this.countTotal())
            },
            countTotal : function(){
                return this.get('rows') * this.get('cols');
            }
        });
    });