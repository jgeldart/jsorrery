
(function(ns){
	require.config({
		baseUrl: './js/',
		paths:{
			'jquery' : 'vendor/jquery.min',
			'vendor/jquery.scrollto' : 'vendor/jquery.scrollTo-1.4.2-min',
			'three' : 'vendor/three.min',
			'easel' : 'vendor/easeljs-0.6.0.min',
			'_' : 'vendor/underscore-min'
		},
		shim: {
			'jquery': {
				deps: []
			},
			'vendor/jquery.autosize': {
				deps: ['jquery']
			},
			'vendor/jquery.scrollto': {
				deps: ['jquery']
			},
			'easel' : {
				exports: 'createjs'
			}
		}
	});
		
	require(['jquery', 'orbit/Main', 'easel'], function($, Orbit){
		$(function(){
			ns.app = Orbit.init();
		});
	});
	
})(window.orbit = window.orbit || {});