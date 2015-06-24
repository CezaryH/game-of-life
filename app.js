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
        },
        underscore: {
            exports: '_'
        }
    }
});

require(['gol'],function(gol){
	gol.start();
});