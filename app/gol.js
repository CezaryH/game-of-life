define(
	['backbone','marionette', 'models/gol_main_model'],
	function(Backbone, Marionette, golMainModel){

		window.app = new Marionette.Application();

        window.app.settings = new golMainModel({
            rows : 60,
            cols : 60
        });

        var rootView = Marionette.LayoutView.extend({
			el: '#app-container',
			regions: {
			  mainRegion: ".js-main-region"
			}
		});

        window.app.addInitializer( function(){
            window.app.rootView = new rootView();

            require(['views/main_view'], function(MainView){
                var mainView = new MainView();
                window.app.rootView.getRegion('mainRegion').show(mainView);
            });

		});
		
		return window.app;
});