requirejs.config({
    baseUrl: "app",
	urlArgs: "bust=" +  (new Date()).getTime(),
    paths: {
        marionette	: './../bower_components/marionette/lib/backbone.marionette',
        backbone	: './../bower_components/backbone/backbone',
        jquery		: './../bower_components/jquery/dist/jquery.min',
		underscore	: './../bower_components/underscore/underscore'
    },
	shim: {
        marionette: {
            deps: ['jquery', 'underscore']
        }
    }
});
require(['marionette', 'backbone'], function(){

    if (window.__agent) {
        window.__agent.disableAnalytics = true;
        window.__agent.start(Backbone, Marionette);
    }

    require(['gol'], function(app){
        app.start();
    });
});
