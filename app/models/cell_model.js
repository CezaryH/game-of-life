define(
    ['gol','marionette', 'backbone'],
    function(gol, Marionette, Backbone){
        return Backbone.Model.extend({
            defaults : {
                isLive : false,
                birth : false,
                die : false
            },
            setNeighbours : function(){
                var that = this,
                    neighbours = [],
                    cols = gol.settings.get('cols'),
                    myIndex = this.collection.indexOf(this),
                    myRow = Math.floor(myIndex / cols);

                if(myIndex >= cols){
                    [0,1,2].forEach(function(index){
                        if(Math.floor(((myIndex - cols - 1) + index) / cols) == myRow - 1){
                            neighbours.push(that.collection.at(myIndex - cols - 1 + index));
                        }
                    });
                }

                // get prev neighbour
                if(myIndex != 0 && myIndex % cols != 0){
                    neighbours.push(this.collection.at(myIndex - 1));
                }

                // get next neighbour
                if(myIndex < gol.settings.get('total') - 1 && myIndex % cols - 1 != 0){
                    neighbours.push(this.collection.at(myIndex + 1));
                }

                if(myIndex < gol.settings.get('total') - cols){
                    [0,1,2].forEach(function(index){
                        if(Math.floor(((myIndex + cols + 1) - index) / cols) == myRow + 1){
                            neighbours.push(that.collection.at(myIndex + cols + 1 - index));
                        }
                    });
                }
                this.neighbours = neighbours;
            },
            checkCondition : function(){
                var livingNeighbours = this.getLiveNeighboursCount();

                if(this.get('isLive') == false && livingNeighbours == 3){
                    this.set('birth', true);
                }

                if(this.get('isLive') == true){
                    if((livingNeighbours < 2 || livingNeighbours > 3 )){
                        this.set('die', true);
                    }
                }
            },
            updateCondition : function(){
                if(this.get('birth')){
                    this.set('isLive', true);
                }

                if(this.get('die')){
                    this.set('isLive', false);
                }

                this.set('die', false);
                this.set('birth', false);
            },
            getLiveNeighboursCount : function(){
                return this.neighbours.reduce(function(mem, model){
                    return (model.get('isLive')) ? mem + 1 : mem;
                }, 0);
            }
        });
    });