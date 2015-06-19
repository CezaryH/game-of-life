define(
	['backbone','marionette', 'models/gol_main_model'],
	function(Backbone, Marionette, golMainModel){
        if (window.__agent) {
            window.__agent.start(Backbone, Marionette);
        }
		var gol = new Marionette.Application();

        gol.settings = new golMainModel();

		var Mainlayout = Marionette.LayoutView.extend({
			el: '#app-container',
			regions: {
			  mainRegion: ".js-main-region"
			}
		});			

		
		gol.addInitializer( function(){
			var lay = new Mainlayout();

            require(['views/main_view'], function(MainView){
                var mainView = new MainView();
                lay.getRegion('mainRegion').show(mainView);
            });

		});
		
		return gol;
});